package keeper_test

import (
	"github.com/Fairblock/fairyring/testutil/random"
	"github.com/Fairblock/fairyring/testutil/shares"
	commontypes "github.com/Fairblock/fairyring/x/common/types"
	types2 "github.com/Fairblock/fairyring/x/pep/types"
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/Fairblock/fairyring/testutil/keeper"
	"github.com/Fairblock/fairyring/x/keyshare/keeper"
	"github.com/Fairblock/fairyring/x/keyshare/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

const SECP_PUBKEY_1 = "A/MdHVpitzHNSdD1Zw3kY+L5PEIPyd9l6sD5i4aIfXp9"

func TestEncryptedlKeyShareMsgServerCreate(t *testing.T) {

	k, ctx, pk, _ := keepertest.KeyshareKeeper(t)
	srv := keeper.NewMsgServerImpl(k)
	wctx := sdk.UnwrapSDKContext(ctx)

	out, creator := SetupTestGeneralKeyShare(t, wctx, k, 1, 1)

	for i := 0; i < 5; i++ {

		idVal := random.RandHex(32)

		k.SetPrivateKeyShareRequest(wctx, types.PrivateKeyshareRequest{
			Identity:           idVal,
			Pubkey:             out.MasterPublicKey,
			IbcInfo:            nil,
			Counterparty:       nil,
			RequestId:          idVal,
			Sent:               false,
			EncryptedKeyshares: make([]*commontypes.EncryptedKeyshare, 0),
		})
		pk.SetPrivateRequest(wctx, types2.PrivateRequest{
			Creator:            creator,
			ReqId:              idVal,
			Pubkey:             out.MasterPublicKey,
			EncryptedKeyshares: make([]*commontypes.EncryptedKeyshare, 0),
		})
		pk.SetPrivateReqQueueEntry(wctx, commontypes.RequestPrivateKeyshare{
			Creator:   creator,
			RequestId: idVal,
		})

		derived, err := shares.DeriveShare(out.GeneratedShare[0].Share, 1, idVal)
		require.NoError(t, err)

		encryptedShare, err := shares.EncryptWithPublicKey(derived, SECP_PUBKEY_1)
		require.NoError(t, err)

		expected := &types.MsgSubmitEncryptedKeyshare{Creator: creator,
			KeyShareIndex:     1,
			Identity:          idVal,
			EncryptedKeyshare: encryptedShare,
			Requester:         creator,
		}

		_, err = srv.SubmitEncryptedKeyshare(wctx, expected)
		require.NoError(t, err)

		_, found := k.GetPrivateKeyShareRequest(ctx, idVal)
		require.True(t, found)

		rst, found := k.GetPrivateKeyShare(wctx,
			expected.Creator,
			expected.Identity,
			expected.Creator,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Validator)
	}
}

func TestEncryptedKeyShareMsgServerFailCases(t *testing.T) {
	k, ctx, pk, _ := keepertest.KeyshareKeeper(t)
	srv := keeper.NewMsgServerImpl(k)
	wctx := sdk.UnwrapSDKContext(ctx)

	out, creator := SetupTestGeneralKeyShare(t, wctx, k, 1, 1)
	onlyIdVal := random.RandHex(32)

	pk.SetPrivateReqQueueEntry(wctx, commontypes.RequestPrivateKeyshare{
		Creator:   creator,
		RequestId: onlyIdVal,
	})

	for _, tc := range []struct {
		desc    string
		request *types.MsgSubmitEncryptedKeyshare
		err     error
	}{
		{
			desc:    "Unauthorized",
			request: &types.MsgSubmitEncryptedKeyshare{Creator: "B"},
			err:     types.ErrAddrIsNotValidatorOrAuthorized,
		},
		{
			desc: "KeyShareRequestNotFound",
			request: &types.MsgSubmitEncryptedKeyshare{
				Creator:  creator,
				Identity: random.RandHex(32),
			},
			err: types.ErrKeyShareRequestNotFound,
		},
		{
			desc: "InvalidKeyShareIndex",
			request: &types.MsgSubmitEncryptedKeyshare{
				Creator:       creator,
				Identity:      onlyIdVal,
				KeyShareIndex: 10,
			},
			err: types.ErrInvalidKeyShareIndex,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {

			_, err := srv.SubmitEncryptedKeyshare(wctx, tc.request)

			require.ErrorIs(t, err, tc.err)

			if tc.desc == "KeyShareRequestNotFound" {
				k.SetPrivateKeyShareRequest(wctx, types.PrivateKeyshareRequest{
					Identity:           onlyIdVal,
					Pubkey:             out.MasterPublicKey,
					IbcInfo:            nil,
					Counterparty:       nil,
					RequestId:          onlyIdVal,
					Sent:               false,
					EncryptedKeyshares: make([]*commontypes.EncryptedKeyshare, 0),
				})
				pk.SetPrivateRequest(wctx, types2.PrivateRequest{
					Creator:            creator,
					ReqId:              onlyIdVal,
					Pubkey:             out.MasterPublicKey,
					EncryptedKeyshares: make([]*commontypes.EncryptedKeyshare, 0),
				})
			}
		})
	}
}
