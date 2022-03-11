import {ic_NFT_minter} from "../../declarations/ic_NFT_minter";
// const mintamount = 0; //Will be changed in the future so user has to pay to mint

function main() {
  const button = document.getElementById("connect");
  const addbutton = document.getElementById("add");
  const generatebut = document.getElementById("generate");
  const div = document.getElementById("name");

  button.addEventListener("click", onButtonPress);
  addbutton.addEventListener("click", getBalances);
  generatebut.addEventListener("click", genrateNft);
  div.addEventListener("click",redirect);
}

// const canisters = ["ai7t5-aibaq-aaaaa-aaaaa-c"]; //for mainnet deployment
// const host = "https://mainnet.dfinity.network"; //for mainnet deployment

//---------------------------------------------------------------------//
// Plug Connection 
let princOfCaller = "";
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
    console.log('Plug wallet is connected'+ principalId);
    alert('Plug wallet is connected to PID: '+ principalId)
  } else if(isConnected == flase) {
    alert('Plug wallet connection was refused to PID: '+ principalId);
    console.log('Plug wallet connection was refused'+ principalId)
  }
  //---------------------------------------------------------------------//

}

// a function that redirects the user to the next page where he can mint his nft
async function redirect(){
  const name = document.getElementById("name").value.toString();
  window.location.replace("inde.html");
  console.log("this is" + name);
}

async function genrateNft() {
  const name = document.getElementById("name").value.toString();
  const mint = await ic_NFT_minter.mint(name);
  console.log("minted...");
  const mintId = mint.toString();
  console.log("this id is" + mintId);

  document.getElementById("nft").src = await ic_NFT_minter.tokenURI(mint);
  document.getElementById("greeting").innerText = "this nft owner is " + princOfCaller + "\nthis token id is " + mintId;
}

async function getBalances() {
  const name = document.getElementById("add").value.toString();
  const balances = await ic_NFT_minter.balanceOf(princOfCaller);
  console.log("balances");
}

document.addEventListener("DOMContentLoaded", main);

  //const name = document.getElementById("name").value.toString();

  //button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  //const greeting = await minter.greet(name);

  //button.removeAttribute("disabled");

