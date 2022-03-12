import { Principal } from '@dfinity/principal';

        async function mint_principal(uri , p){
        return await ic_NFT_minter.mint_principal(uri, p);  
    };
  
     async function getPrincipalsToken (principal){  
        const p = Principal.fromText(principal);
        return await ic_NFT_minter.getPrincipalsToken(p); 
    }
  
     async function getAllToken (){
        return await ic_NFT_minter.getAllToken();    
    }
  
     async function get_balance(principal){
        const p = Principal.fromText(principal);
        const response = await ic_NFT_minter.balanceOf(p);
        if (response?.length === 0) return 0;
        return response; 
    }
  
     async function transferFrom(owner, newOwner, tokenId){
        const from = Principal.fromText(owner);
        const to = Principal.fromText(newOwner);
        return await ic_NFT_minter.transferFrom(from, to, tokenId, tokenId);
   
    }
export{mint_principal,getPrincipalsToken,getAllToken,get_balance,transferFrom};