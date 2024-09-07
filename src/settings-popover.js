import OBR from "@owlbear-rodeo/sdk";
// import { ID } from "../src/constants";
import "../setting.style.css";
import { settingsList } from "./settings-list";

document.querySelector("#app").innerHTML = `
  <div id="button"></div>
  <script type="module" src="/main.js"></script>
  <div class="button">
    <button type="button"
      onclick="window.open('https://github.com/Leftysloft/obr-ext-healthbars/tree/main#readme', 'mozillaWindow', 'left=100,top=100,width=600,height=800')">Usage
      Guide</button>
  </div>
`;

OBR.onReady(() => {
  settingsList(document.querySelector("#sheet-list"));
  console.log("settings onready");
});
