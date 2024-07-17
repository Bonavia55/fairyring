import { GeneratedType } from "@cosmjs/proto-signing";
import { CodeInfo } from "./types/cosmwasm/wasm/v1/types";
import { QueryContractHistoryResponse } from "./types/cosmwasm/wasm/v1/query";
import { QuerySmartContractStateRequest } from "./types/cosmwasm/wasm/v1/query";
import { MsgStoreAndMigrateContractResponse } from "./types/cosmwasm/wasm/v1/tx";
import { MsgIBCCloseChannel } from "./types/cosmwasm/wasm/v1/ibc";
import { QueryContractInfoRequest } from "./types/cosmwasm/wasm/v1/query";
import { QueryPinnedCodesRequest } from "./types/cosmwasm/wasm/v1/query";
import { ContractMigrationAuthorization } from "./types/cosmwasm/wasm/v1/authz";
import { AcceptedMessageKeysFilter } from "./types/cosmwasm/wasm/v1/authz";
import { PinCodesProposal } from "./types/cosmwasm/wasm/v1/proposal_legacy";
import { MsgUpdateParams } from "./types/cosmwasm/wasm/v1/tx";
import { MsgStoreAndInstantiateContract } from "./types/cosmwasm/wasm/v1/tx";
import { MsgUpdateContractLabel } from "./types/cosmwasm/wasm/v1/tx";
import { QueryCodeResponse } from "./types/cosmwasm/wasm/v1/query";
import { CombinedLimit } from "./types/cosmwasm/wasm/v1/authz";
import { GenesisState } from "./types/cosmwasm/wasm/v1/genesis";
import { MsgUpdateContractLabelResponse } from "./types/cosmwasm/wasm/v1/tx";
import { StoreCodeAuthorization } from "./types/cosmwasm/wasm/v1/authz";
import { StoreCodeProposal } from "./types/cosmwasm/wasm/v1/proposal_legacy";
import { InstantiateContract2Proposal } from "./types/cosmwasm/wasm/v1/proposal_legacy";
import { ExecuteContractProposal } from "./types/cosmwasm/wasm/v1/proposal_legacy";
import { Params } from "./types/cosmwasm/wasm/v1/types";
import { QueryRawContractStateResponse } from "./types/cosmwasm/wasm/v1/query";
import { MaxFundsLimit } from "./types/cosmwasm/wasm/v1/authz";
import { MsgStoreCode } from "./types/cosmwasm/wasm/v1/tx";
import { MsgUpdateInstantiateConfig } from "./types/cosmwasm/wasm/v1/tx";
import { MsgUnpinCodes } from "./types/cosmwasm/wasm/v1/tx";
import { QueryContractInfoResponse } from "./types/cosmwasm/wasm/v1/query";
import { MsgUpdateParamsResponse } from "./types/cosmwasm/wasm/v1/tx";
import { MsgRemoveCodeUploadParamsAddresses } from "./types/cosmwasm/wasm/v1/tx";
import { QuerySmartContractStateResponse } from "./types/cosmwasm/wasm/v1/query";
import { ContractExecutionAuthorization } from "./types/cosmwasm/wasm/v1/authz";
import { MsgInstantiateContract } from "./types/cosmwasm/wasm/v1/tx";
import { QueryAllContractStateResponse } from "./types/cosmwasm/wasm/v1/query";
import { MsgAddCodeUploadParamsAddressesResponse } from "./types/cosmwasm/wasm/v1/tx";
import { ContractGrant } from "./types/cosmwasm/wasm/v1/authz";
import { Sequence } from "./types/cosmwasm/wasm/v1/genesis";
import { MsgPinCodes } from "./types/cosmwasm/wasm/v1/tx";
import { QueryPinnedCodesResponse } from "./types/cosmwasm/wasm/v1/query";
import { InstantiateContractProposal } from "./types/cosmwasm/wasm/v1/proposal_legacy";
import { QueryContractsByCodeRequest } from "./types/cosmwasm/wasm/v1/query";
import { MsgClearAdminResponse } from "./types/cosmwasm/wasm/v1/tx";
import { MigrateContractProposal } from "./types/cosmwasm/wasm/v1/proposal_legacy";
import { MsgMigrateContract } from "./types/cosmwasm/wasm/v1/tx";
import { Model } from "./types/cosmwasm/wasm/v1/types";
import { QueryCodesRequest } from "./types/cosmwasm/wasm/v1/query";
import { QueryParamsRequest } from "./types/cosmwasm/wasm/v1/query";
import { MsgUnpinCodesResponse } from "./types/cosmwasm/wasm/v1/tx";
import { QueryCodesResponse } from "./types/cosmwasm/wasm/v1/query";
import { MsgRemoveCodeUploadParamsAddressesResponse } from "./types/cosmwasm/wasm/v1/tx";
import { UnpinCodesProposal } from "./types/cosmwasm/wasm/v1/proposal_legacy";
import { AccessTypeParam } from "./types/cosmwasm/wasm/v1/types";
import { QueryCodeRequest } from "./types/cosmwasm/wasm/v1/query";
import { MsgUpdateAdminResponse } from "./types/cosmwasm/wasm/v1/tx";
import { MsgClearAdmin } from "./types/cosmwasm/wasm/v1/tx";
import { AccessConfig } from "./types/cosmwasm/wasm/v1/types";
import { MsgIBCSendResponse } from "./types/cosmwasm/wasm/v1/ibc";
import { QueryContractsByCodeResponse } from "./types/cosmwasm/wasm/v1/query";
import { MsgStoreAndInstantiateContractResponse } from "./types/cosmwasm/wasm/v1/tx";
import { AbsoluteTxPosition } from "./types/cosmwasm/wasm/v1/types";
import { CodeInfoResponse } from "./types/cosmwasm/wasm/v1/query";
import { Contract } from "./types/cosmwasm/wasm/v1/genesis";
import { StoreAndInstantiateContractProposal } from "./types/cosmwasm/wasm/v1/proposal_legacy";
import { MsgAddCodeUploadParamsAddresses } from "./types/cosmwasm/wasm/v1/tx";
import { QueryContractsByCreatorResponse } from "./types/cosmwasm/wasm/v1/query";
import { QueryAllContractStateRequest } from "./types/cosmwasm/wasm/v1/query";
import { MsgStoreCodeResponse } from "./types/cosmwasm/wasm/v1/tx";
import { Code } from "./types/cosmwasm/wasm/v1/genesis";
import { MsgStoreAndMigrateContract } from "./types/cosmwasm/wasm/v1/tx";
import { ContractCodeHistoryEntry } from "./types/cosmwasm/wasm/v1/types";
import { QueryParamsResponse } from "./types/cosmwasm/wasm/v1/query";
import { CodeGrant } from "./types/cosmwasm/wasm/v1/authz";
import { MsgExecuteContract } from "./types/cosmwasm/wasm/v1/tx";
import { MsgInstantiateContract2 } from "./types/cosmwasm/wasm/v1/tx";
import { MsgSudoContract } from "./types/cosmwasm/wasm/v1/tx";
import { MsgUpdateInstantiateConfigResponse } from "./types/cosmwasm/wasm/v1/tx";
import { MsgSudoContractResponse } from "./types/cosmwasm/wasm/v1/tx";
import { ClearAdminProposal } from "./types/cosmwasm/wasm/v1/proposal_legacy";
import { AcceptedMessagesFilter } from "./types/cosmwasm/wasm/v1/authz";
import { MsgIBCSend } from "./types/cosmwasm/wasm/v1/ibc";
import { MsgInstantiateContract2Response } from "./types/cosmwasm/wasm/v1/tx";
import { MsgMigrateContractResponse } from "./types/cosmwasm/wasm/v1/tx";
import { SudoContractProposal } from "./types/cosmwasm/wasm/v1/proposal_legacy";
import { QueryContractHistoryRequest } from "./types/cosmwasm/wasm/v1/query";
import { MsgInstantiateContractResponse } from "./types/cosmwasm/wasm/v1/tx";
import { AccessConfigUpdate } from "./types/cosmwasm/wasm/v1/proposal_legacy";
import { ContractInfo } from "./types/cosmwasm/wasm/v1/types";
import { MsgPinCodesResponse } from "./types/cosmwasm/wasm/v1/tx";
import { MaxCallsLimit } from "./types/cosmwasm/wasm/v1/authz";
import { UpdateAdminProposal } from "./types/cosmwasm/wasm/v1/proposal_legacy";
import { UpdateInstantiateConfigProposal } from "./types/cosmwasm/wasm/v1/proposal_legacy";
import { MsgUpdateAdmin } from "./types/cosmwasm/wasm/v1/tx";
import { QueryContractsByCreatorRequest } from "./types/cosmwasm/wasm/v1/query";
import { MsgExecuteContractResponse } from "./types/cosmwasm/wasm/v1/tx";
import { QueryRawContractStateRequest } from "./types/cosmwasm/wasm/v1/query";
import { AllowAllMessagesFilter } from "./types/cosmwasm/wasm/v1/authz";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmwasm.wasm.v1.CodeInfo", CodeInfo],
    ["/cosmwasm.wasm.v1.QueryContractHistoryResponse", QueryContractHistoryResponse],
    ["/cosmwasm.wasm.v1.QuerySmartContractStateRequest", QuerySmartContractStateRequest],
    ["/cosmwasm.wasm.v1.MsgStoreAndMigrateContractResponse", MsgStoreAndMigrateContractResponse],
    ["/cosmwasm.wasm.v1.MsgIBCCloseChannel", MsgIBCCloseChannel],
    ["/cosmwasm.wasm.v1.QueryContractInfoRequest", QueryContractInfoRequest],
    ["/cosmwasm.wasm.v1.QueryPinnedCodesRequest", QueryPinnedCodesRequest],
    ["/cosmwasm.wasm.v1.ContractMigrationAuthorization", ContractMigrationAuthorization],
    ["/cosmwasm.wasm.v1.AcceptedMessageKeysFilter", AcceptedMessageKeysFilter],
    ["/cosmwasm.wasm.v1.PinCodesProposal", PinCodesProposal],
    ["/cosmwasm.wasm.v1.MsgUpdateParams", MsgUpdateParams],
    ["/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract", MsgStoreAndInstantiateContract],
    ["/cosmwasm.wasm.v1.MsgUpdateContractLabel", MsgUpdateContractLabel],
    ["/cosmwasm.wasm.v1.QueryCodeResponse", QueryCodeResponse],
    ["/cosmwasm.wasm.v1.CombinedLimit", CombinedLimit],
    ["/cosmwasm.wasm.v1.GenesisState", GenesisState],
    ["/cosmwasm.wasm.v1.MsgUpdateContractLabelResponse", MsgUpdateContractLabelResponse],
    ["/cosmwasm.wasm.v1.StoreCodeAuthorization", StoreCodeAuthorization],
    ["/cosmwasm.wasm.v1.StoreCodeProposal", StoreCodeProposal],
    ["/cosmwasm.wasm.v1.InstantiateContract2Proposal", InstantiateContract2Proposal],
    ["/cosmwasm.wasm.v1.ExecuteContractProposal", ExecuteContractProposal],
    ["/cosmwasm.wasm.v1.Params", Params],
    ["/cosmwasm.wasm.v1.QueryRawContractStateResponse", QueryRawContractStateResponse],
    ["/cosmwasm.wasm.v1.MaxFundsLimit", MaxFundsLimit],
    ["/cosmwasm.wasm.v1.MsgStoreCode", MsgStoreCode],
    ["/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig", MsgUpdateInstantiateConfig],
    ["/cosmwasm.wasm.v1.MsgUnpinCodes", MsgUnpinCodes],
    ["/cosmwasm.wasm.v1.QueryContractInfoResponse", QueryContractInfoResponse],
    ["/cosmwasm.wasm.v1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses", MsgRemoveCodeUploadParamsAddresses],
    ["/cosmwasm.wasm.v1.QuerySmartContractStateResponse", QuerySmartContractStateResponse],
    ["/cosmwasm.wasm.v1.ContractExecutionAuthorization", ContractExecutionAuthorization],
    ["/cosmwasm.wasm.v1.MsgInstantiateContract", MsgInstantiateContract],
    ["/cosmwasm.wasm.v1.QueryAllContractStateResponse", QueryAllContractStateResponse],
    ["/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddressesResponse", MsgAddCodeUploadParamsAddressesResponse],
    ["/cosmwasm.wasm.v1.ContractGrant", ContractGrant],
    ["/cosmwasm.wasm.v1.Sequence", Sequence],
    ["/cosmwasm.wasm.v1.MsgPinCodes", MsgPinCodes],
    ["/cosmwasm.wasm.v1.QueryPinnedCodesResponse", QueryPinnedCodesResponse],
    ["/cosmwasm.wasm.v1.InstantiateContractProposal", InstantiateContractProposal],
    ["/cosmwasm.wasm.v1.QueryContractsByCodeRequest", QueryContractsByCodeRequest],
    ["/cosmwasm.wasm.v1.MsgClearAdminResponse", MsgClearAdminResponse],
    ["/cosmwasm.wasm.v1.MigrateContractProposal", MigrateContractProposal],
    ["/cosmwasm.wasm.v1.MsgMigrateContract", MsgMigrateContract],
    ["/cosmwasm.wasm.v1.Model", Model],
    ["/cosmwasm.wasm.v1.QueryCodesRequest", QueryCodesRequest],
    ["/cosmwasm.wasm.v1.QueryParamsRequest", QueryParamsRequest],
    ["/cosmwasm.wasm.v1.MsgUnpinCodesResponse", MsgUnpinCodesResponse],
    ["/cosmwasm.wasm.v1.QueryCodesResponse", QueryCodesResponse],
    ["/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddressesResponse", MsgRemoveCodeUploadParamsAddressesResponse],
    ["/cosmwasm.wasm.v1.UnpinCodesProposal", UnpinCodesProposal],
    ["/cosmwasm.wasm.v1.AccessTypeParam", AccessTypeParam],
    ["/cosmwasm.wasm.v1.QueryCodeRequest", QueryCodeRequest],
    ["/cosmwasm.wasm.v1.MsgUpdateAdminResponse", MsgUpdateAdminResponse],
    ["/cosmwasm.wasm.v1.MsgClearAdmin", MsgClearAdmin],
    ["/cosmwasm.wasm.v1.AccessConfig", AccessConfig],
    ["/cosmwasm.wasm.v1.MsgIBCSendResponse", MsgIBCSendResponse],
    ["/cosmwasm.wasm.v1.QueryContractsByCodeResponse", QueryContractsByCodeResponse],
    ["/cosmwasm.wasm.v1.MsgStoreAndInstantiateContractResponse", MsgStoreAndInstantiateContractResponse],
    ["/cosmwasm.wasm.v1.AbsoluteTxPosition", AbsoluteTxPosition],
    ["/cosmwasm.wasm.v1.CodeInfoResponse", CodeInfoResponse],
    ["/cosmwasm.wasm.v1.Contract", Contract],
    ["/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal", StoreAndInstantiateContractProposal],
    ["/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses", MsgAddCodeUploadParamsAddresses],
    ["/cosmwasm.wasm.v1.QueryContractsByCreatorResponse", QueryContractsByCreatorResponse],
    ["/cosmwasm.wasm.v1.QueryAllContractStateRequest", QueryAllContractStateRequest],
    ["/cosmwasm.wasm.v1.MsgStoreCodeResponse", MsgStoreCodeResponse],
    ["/cosmwasm.wasm.v1.Code", Code],
    ["/cosmwasm.wasm.v1.MsgStoreAndMigrateContract", MsgStoreAndMigrateContract],
    ["/cosmwasm.wasm.v1.ContractCodeHistoryEntry", ContractCodeHistoryEntry],
    ["/cosmwasm.wasm.v1.QueryParamsResponse", QueryParamsResponse],
    ["/cosmwasm.wasm.v1.CodeGrant", CodeGrant],
    ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract],
    ["/cosmwasm.wasm.v1.MsgInstantiateContract2", MsgInstantiateContract2],
    ["/cosmwasm.wasm.v1.MsgSudoContract", MsgSudoContract],
    ["/cosmwasm.wasm.v1.MsgUpdateInstantiateConfigResponse", MsgUpdateInstantiateConfigResponse],
    ["/cosmwasm.wasm.v1.MsgSudoContractResponse", MsgSudoContractResponse],
    ["/cosmwasm.wasm.v1.ClearAdminProposal", ClearAdminProposal],
    ["/cosmwasm.wasm.v1.AcceptedMessagesFilter", AcceptedMessagesFilter],
    ["/cosmwasm.wasm.v1.MsgIBCSend", MsgIBCSend],
    ["/cosmwasm.wasm.v1.MsgInstantiateContract2Response", MsgInstantiateContract2Response],
    ["/cosmwasm.wasm.v1.MsgMigrateContractResponse", MsgMigrateContractResponse],
    ["/cosmwasm.wasm.v1.SudoContractProposal", SudoContractProposal],
    ["/cosmwasm.wasm.v1.QueryContractHistoryRequest", QueryContractHistoryRequest],
    ["/cosmwasm.wasm.v1.MsgInstantiateContractResponse", MsgInstantiateContractResponse],
    ["/cosmwasm.wasm.v1.AccessConfigUpdate", AccessConfigUpdate],
    ["/cosmwasm.wasm.v1.ContractInfo", ContractInfo],
    ["/cosmwasm.wasm.v1.MsgPinCodesResponse", MsgPinCodesResponse],
    ["/cosmwasm.wasm.v1.MaxCallsLimit", MaxCallsLimit],
    ["/cosmwasm.wasm.v1.UpdateAdminProposal", UpdateAdminProposal],
    ["/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal", UpdateInstantiateConfigProposal],
    ["/cosmwasm.wasm.v1.MsgUpdateAdmin", MsgUpdateAdmin],
    ["/cosmwasm.wasm.v1.QueryContractsByCreatorRequest", QueryContractsByCreatorRequest],
    ["/cosmwasm.wasm.v1.MsgExecuteContractResponse", MsgExecuteContractResponse],
    ["/cosmwasm.wasm.v1.QueryRawContractStateRequest", QueryRawContractStateRequest],
    ["/cosmwasm.wasm.v1.AllowAllMessagesFilter", AllowAllMessagesFilter],
    
];

export { msgTypes }