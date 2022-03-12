import {ic_NFT_minter} from "../../declarations/ic_NFT_minter";
import { Principal } from "@dfinity/principal";
import{mint_principal,getPrincipalsToken,getAllToken,get_balance,transferFrom} from "./be.js"

function main() {
  const button = document.getElementById("connect");
  const addbutton = document.getElementById("add");
  const generatebut = document.getElementById("generate");
  button.addEventListener("click", onButtonPress);
  addbutton.addEventListener("click", getBalances);
  generatebut.addEventListener("click", genrateNft);
}
document.addEventListener("DOMContentLoaded", main);

//---------------------------- PLUG CONNECTION -------------------------//

let princOfCaller = "";
const name = document.getElementById("name").src.toString();

async function onButtonPress(press) {
  press.target.disabled = true;
  const isConnected = await window.ic.plug.isConnected();
  if(!isConnected) {
    await window.ic.plug.requestConnect();
  }
  console.log('requesting connection..');
  alert('requesting connection..')
  if (!window.ic.plug.agent) {
    await window.ic.plug.createAgent();
    console.log('agent created');
    alert('agent created');
  }
  const prin = await window.ic.plug.agent.getPrincipal();
  var principalId = prin.toString();
  princOfCaller = prin;
  if (isConnected == true) {
    window.location.replace("gallery.html");
    console.log('Plug wallet is connected'+ principalId);
    alert('Plug wallet is connected to PID: '+ principalId)
  } else if(isConnected == flase) {
    window.location.replace("error.html");
    alert('Plug wallet connection was refused to PID: '+ principalId);
    console.log('Plug wallet connection was refused'+ principalId)
  }
}
  //---------------------------------------------------------------------//

// a function that generates an NFT from a give 
async function genrateNft() {
  const name = document.getElementById("name").src.toString();
  console.log(name);
  const p = await window.ic.plug.agent.getPrincipal();
  const mint = await minter.mint(name);
  mint_principal(name,p);
  console.log("minted...");
  const mintId = mint.toString();
  console.log("this id is" + mintId);
  var x = await minter.tokenURI(mint);
  console.log(x+"this nft owner is " + princOfCaller + "\nthis token id is " + mintId);
}

async function getBalances() {
  const nft = document.getElementById("add").value.toString();
  const balances = await ic_NFT_minter.balanceOf(princOfCaller);
  console.log("balances");
  alert('balances'+ balances);

}

//  async function refreshUserBalance() {
//   const balance = await this.icService.get_balance(this.userWalletPrincipal);
//   this.userWalletBalance = (balance ? balance : 0);
// }

// ############ BACKEND FUNCTIONS #############



  
  