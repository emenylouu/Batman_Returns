import { Principal } from '@dfinity/principal';
import { nft_minter } from "../../declarations/nft_minter";


        async function mint_principal(uri , p){
        return await nft_minter.mint_principal(uri, p);  
    };
  
     async function getPrincipalsToken (principal){  
        const p = Principal.fromText(principal);
        return await nft_minter.getPrincipalsToken(p); 
    }
  
     async function getAllToken (){
        return await nft_minter.getAllToken();    
    }
  
     async function get_balance(principal){
        const p = Principal.fromText(principal);
        const response = await nft_minter.balanceOf(p);
        if (response?.length === 0) return 0;
        return response; 
    }
  
     async function transferFrom(owner, newOwner, tokenId){
        const from = Principal.fromText(owner);
        const to = Principal.fromText(newOwner);
        return await nft_minter.transferFrom(from, to, tokenId, tokenId);
   
    }
export{mint_principal,getPrincipalsToken,getAllToken,get_balance,transferFrom};