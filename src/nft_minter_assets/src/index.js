import { nft_minter } from "../../declarations/nft_minter";
import {StoicIdentity} from "ic-stoic-identity";
import{mint_principal,getPrincipalsToken,getAllToken,get_balance,transferFrom} from "./be.js"

const mintamount = 10; //Will be changed in the future so user has to pay to mint


function main() {
  const plug_button = document.getElementById("plug");
  const stoic_button = document.getElementById("stoic");

  // const addbutton = document.getElementById("add");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const btn4 = document.getElementById("btn4");
  const btn5 = document.getElementById("btn5");
  const btn6 = document.getElementById("btn6");
  const btn7 = document.getElementById("btn7");
  const btn8 = document.getElementById("btn8");
  const btn9 = document.getElementById("btn9");
  const btn10 = document.getElementById("btn10");


  plug_button.addEventListener("click", onButtonPressPlug);
  stoic_button.addEventListener("click", StoicConnect);
  btn1.addEventListener("click", genrateNft);
  btn2.addEventListener("click", genrateNft2);
  btn3.addEventListener("click", genrateNft3);
  btn4.addEventListener("click", genrateNft4);
  btn5.addEventListener("click", genrateNft5);
  btn6.addEventListener("click", genrateNft6);
  btn7.addEventListener("click", genrateNft7);
  btn8.addEventListener("click", genrateNft8);
  btn9.addEventListener("click", genrateNft9);
  btn10.addEventListener("click", genrateNft10);

}

const canisters = ["ai7t5-aibaq-aaaaa-aaaaa-c"]; //for mainnet deployment
const host = "https://mainnet.dfinity.network"; //for mainnet deployment

let princOfCaller = "";

async function onButtonPressPlug(press) {
  press.target.disabled = true;
  const isConnected = await window.ic.plug.isConnected();
  if(!isConnected) {
    await window.ic.plug.requestConnect();
  }
  console.log('requesting connection..');
  if (!window.ic.plug.agent) {
    await window.ic.plug.createAgent();
    console.log('agent created');
  }
  const prin = await window.ic.plug.agent.getPrincipal();
  var principalId = prin.toString();
  princOfCaller = prin;
  if (isConnected == true) {
    alert("NOICE! your connection to your PLUG wallet was smooth");

    console.log('Plug wallet is connected'+ principalId);
  } else if(isConnected == flase) {
    alert('Plug wallet connection was refused to PID: '+ principalId);
  }
}

  //---------------------------------------------------------------------//
  // --------------------- STOIC WALLET CONNECTION ----------------------
  //---------------------------------------------------------------------//


  async function StoicConnect(){
    try {StoicIdentity.load().then(async (identity) => {
      if (identity) {
        alert("you are connected, mint some NFTs!");

      } else {
        identity = await StoicIdentity.connect();
        console.log({ identity });
        // add user to the Hashmap
        mindbankMeetsIc.add_userr(identity.getPrincipal());
      }
      alert("NOICE! your connection to your STOIC wallet was smooth");

      console.log(identity.getPrincipal().toText());
    }); } catch (e){  
      console.log(e.toString());
  
  }
  };

 //---------------------------------------------------------------------//
  // --------------------- Mint NFTS ----------------------
  //---------------------------------------------------------------------//
  async function connectToPlug(){
  const p = await window.ic.plug.agent.getPrincipal();
  return p;
  }
  async function genrateNft() {
    const nft1 = document.getElementById("nft1").src.toString();
    console.log(nft1);
    alert(nft1);
    const p = await window.ic.plug.agent.getPrincipal();
    const mint = await nft_minter.mint(nft1);
    var total= await mint_principal(nft1,p);
    console.log("minted...");
    alert('minted ... total is' + total.toString());
    const mintId = mint.toString();
    alert("this id is: " + mintId+ "total minted is :" +total);
    console.log("this id is" + mintId + "total minted is :" +total);
    var x = await nft_minter.tokenURI(mint);
    console.log(x+"this nft owner is " + princOfCaller + "\nthis token id is " + mintId);
        window.location.href="https://images.squarespace-cdn.com/content/v1/50ff1acce4b047a6c7999c73/1575826088506-DNHZ96DIPARSZ9NBRZXK/Batman_%26_Superman_3_dribble_.gif";

  }

  async function genrateNft2() {
    const nft2 = document.getElementById("nft2").src.toString();
    console.log(nft2);
    alert(nft2);
    const p = await window.ic.plug.agent.getPrincipal();

    const mint = await nft_minter.mint(nft2);
    var total= await mint_principal(nft2,p);
    console.log("minted...");
    alert('minted ...');
    const mintId = mint.toString();
    alert("this id is: " + mintId+ "total minted is :" +total);
    console.log("this id is" + mintId + "total minted is :" +total);
    var x = await nft_minter.tokenURI(mint);
    console.log(x+"this nft owner is " + princOfCaller + "\nthis token id is " + mintId);
    window.location.href="https://i.chzbgr.com/full/9399876352/h0DAECB1E/person";

  }
  async function genrateNft3() {
    const nft3 = document.getElementById("nft3").src.toString();
    console.log(nft3);
    alert(nft3);
    const p = await window.ic.plug.agent.getPrincipal();
    const mint = await nft_minter.mint(nft3);
    var total= await mint_principal(nft3,p);
    console.log("minted...");
    alert('minted ...');
    const mintId = mint.toString();
    alert("this id is: " + mintId+ "total minted is :" +total);
    console.log("this id is" + mintId + "total minted is :" +total);
    var x = await nft_minter.tokenURI(mint);
    console.log(x+"this nft owner is " + princOfCaller + "\nthis token id is " + mintId);
    window.location.href="https://cdn.dribbble.com/users/664063/screenshots/8908736/batman_superman_7_dribbble_.gif";

  }
  async function genrateNft4() {
    const nft4 = document.getElementById("nft4").src.toString();
    console.log(nft4);
    alert(nft4);
    const p = await window.ic.plug.agent.getPrincipal();
    const mint = await nft_minter.mint(nft4);
    var total= await mint_principal(nft4,p);
    console.log("minted...");
    alert('minted ...');
    const mintId = mint.toString();
    alert("this id is: " + mintId+ "total minted is :" +total);
    console.log("this id is" + mintId);
    var x = await nft_minter.tokenURI(mint);
    console.log(x+"this nft owner is " + princOfCaller + "\nthis token id is " + mintId);
    window.location.href="https://images.squarespace-cdn.com/content/v1/50ff1acce4b047a6c7999c73/1575826088506-DNHZ96DIPARSZ9NBRZXK/Batman_%26_Superman_3_dribble_.gif";

  }
  async function genrateNft5() {
    const nft5 = document.getElementById("nft5").src.toString();
    console.log(nft5);
    alert(nft5);
    const p = await window.ic.plug.agent.getPrincipal();
    const mint = await nft_minter.mint(nft5);
    var total= await mint_principal(nft5,p);
    console.log("minted...");
    alert('minted ...');
    const mintId = mint.toString();
    alert("this id is: " + mintId+ "total minted is :" +total);
    console.log("this id is" + mintId);
    var x = await nft_minter.tokenURI(mint);
    console.log(x+"this nft owner is " + princOfCaller + "\nthis token id is " + mintId);
    window.location.href="https://i.pinimg.com/originals/cc/23/86/cc2386c68ffcaafc3f337199256c21aa.gif";

  }
  async function genrateNft6() {
    const nft6 = document.getElementById("nft6").src.toString();
    console.log(nft6);
    alert(nft6);
    const p = await window.ic.plug.agent.getPrincipal();
    const mint = await nft_minter.mint(nft6);
    var total= await mint_principal(nft6,p);
    console.log("minted...");
    alert('minted ...');
    const mintId = mint.toString();
    alert("this id is: " + mintId);
    alert("this id is: " + mintId+ "total minted is :" +total);
    var x = await nft_minter.tokenURI(mint);
    console.log(x+"this nft owner is " + princOfCaller + "\nthis token id is " + mintId);
    window.location.href="https://c.tenor.com/4SdMBThmUgcAAAAd/superman-best-friends.gif";

  }
  async function genrateNft7() {
    const nft7 = document.getElementById("nft7").src.toString();
    console.log(nft7);
    alert(nft7);
    const p = await window.ic.plug.agent.getPrincipal();
    const mint = await nft_minter.mint(nft7);
    var total= await mint_principal(nft7,p);
    console.log("minted...");
    alert('minted ...');
    const mintId = mint.toString();
    alert("this id is: " + mintId);
    console.log("this id is" + mintId);
    var x = await nft_minter.tokenURI(mint);
    console.log(x+"this nft owner is " + princOfCaller + "\nthis token id is " + mintId);
    window.location.href="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1487327588/content-items/001/868/981/8f8c0835862413.570645eca3011-original.gif?1487327588https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1487327588/content-items/001/868/981/8f8c0835862413.570645eca3011-original.gif?1487327588";

  }
  async function genrateNft8() {
    const nft8 = document.getElementById("nft8").src.toString();
    console.log(nft8);
    alert(nft8);
    const p = await window.ic.plug.agent.getPrincipal();
    const mint = await nft_minter.mint(nft8);
    var total= await mint_principal(nft8,p);
    console.log("minted...");
    alert('minted ...');
    window.location.href="https://i.pinimg.com/originals/7f/61/07/7f6107acd3f4559ba9a6ba9d81758422.gif";

    const mintId = mint.toString();
    alert("this id is: " + mintId);
    console.log("this id is" + mintId);
    var x = await nft_minter.tokenURI(mint);
    console.log(x+"this nft owner is " + princOfCaller + "\nthis token id is " + mintId);
  }
  async function genrateNft9() {
    const nft1 = document.getElementById("nft9").src.toString();
    console.log(nft9);
    alert(nft9);
    const p = await window.ic.plug.agent.getPrincipal();
    const mint = await nft_minter.mint(nft9s);
    var total= await mint_principal(nft9,p);
    console.log("minted...");
    alert('minted ...');
    window.location.href="https://cdn.dribbble.com/users/1181466/screenshots/2843122/flightsimulator_batman.gif";

    const mintId = mint.toString();
    alert("this id is: " + mintId);
    console.log("this id is" + mintId);
    var x = await nft_minter.tokenURI(mint);
    console.log(x+"this nft owner is " + princOfCaller + "\nthis token id is " + mintId);
  }
  async function genrateNft10() {
    const nft10 = document.getElementById("nft10").src.toString();
    console.log(nft10);
    alert(nft10);
    const p = await window.ic.plug.agent.getPrincipal();
    const mint = await nft_minter.mint(nft10);
    var total= await mint_principal(nft10,p);
    console.log("minted...");
    alert('minted ...');
    const mintId = mint.toString();
    alert("this id is: " + mintId);
    console.log("this id is" + mintId);
    var x = await nft_minter.tokenURI(mint);
    console.log(x+"this nft owner is " + princOfCaller + "\nthis token id is " + mintId);
    window.location.href="https://cdn.dribbble.com/users/1539273/screenshots/3200993/batman_gif_2.gif";

  }
// async function getBalances() {
//   // doenst work yet
//   const nft1 = document.getElementById("add").value.toString();
//   const balances = await nft_minter.balanceOf(princOfCaller);
  
//   console.log(balances);







document.addEventListener("DOMContentLoaded", main);

  //const nft1 = document.getElementById("nft1").value.toString();

  //button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  //const greeting = await nft_minter.greet(nft1);

  //button.removeAttribute("disabled");

  

