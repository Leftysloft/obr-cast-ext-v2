import "./style.css";
import OBR from "@owlbear-rodeo/sdk";
//import { setupContextMenu } from "./src/popup";
//import { imageFilter } from "./src/imageUrl"; //Current file for getting the image url from all characters on a scene.
//import { imageFilter } from "./src/imageFetch"; //This is the original file for retrieving character image urls.
import { imageFilter } from "./src/imageUrl";

document.querySelector("#app").innerHTML = `
  <div id="app"></div>
  <script type="module" src="/main.js"></script>
  <div class="button">
    <button type="button"
      onclick="window.open('https://github.com/Leftysloft/obr-ext-healthbars/tree/main#readme', 'mozillaWindow', 'left=100,top=100,width=600,height=800')">Usage
      Guide</button>
  </div>
  
  <div class="button">
  <script type="module" src="../popup.js"></script>
    <button type="button"
      onclick="window.open('../src/character-data.html', 'mozillaWindow', 'left=100,top=100,width=600,height=800')">Add Players</button>
  </div>
`;
OBR.onReady(() => {
  OBR.action.open();
  imageFilter();
});
