import type { Principal } from '@dfinity/principal';
export interface DRC721 {
  'addNft' : (arg_0: Nft) => Promise<undefined>,
  'approve' : (arg_0: Principal, arg_1: TokenId) => Promise<undefined>,
  'balanceOf' : (arg_0: Principal) => Promise<[] | [bigint]>,
  'getAllToken' : () => Promise<Array<NftToken>>,
  'getApproved' : (arg_0: bigint) => Promise<Principal>,
  'getPrincipalsToken' : (arg_0: Principal) => Promise<Array<NftToken>>,
  'getTotalCountOfNfts' : () => Promise<bigint>,
  'isApprovedForAll' : (arg_0: Principal, arg_1: Principal) => Promise<boolean>,
  'mint' : (arg_0: string) => Promise<bigint>,
  'name' : () => Promise<string>,
  'ownerOf' : (arg_0: TokenId) => Promise<[] | [Principal]>,
  'setApprovalForAll' : (arg_0: Principal, arg_1: boolean) => Promise<
      undefined
    >,
  'symbol' : () => Promise<string>,
  'tokenURI' : (arg_0: TokenId) => Promise<[] | [string]>,
  'transferFrom' : (
      arg_0: Principal,
      arg_1: Principal,
      arg_2: bigint,
    ) => Promise<undefined>,
  'updateNft' : (arg_0: NftId, arg_1: Principal) => Promise<boolean>,
}
export interface Nft {
  'url' : string,
  'creator' : Principal,
  'principal' : Principal,
  'tokenId' : bigint,
}
export type NftId = number;
export interface NftToken {
  'url' : string,
  'creator' : Principal,
  'principal' : Principal,
  'tokenId' : bigint,
}
export type TokenId = bigint;
export interface _SERVICE extends DRC721 {}
