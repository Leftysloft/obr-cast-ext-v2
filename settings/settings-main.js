import OBR from "@owlbear-rodeo/sdk";
import "../style.css";
import { settingsPopover } from "./settings-selector";

OBR.onReady(() => {
  document.querySelector("#app").innerHTML = `
  <div>
    <ul id="sheet-list"></ul>
  </div>
`;
  // setupContextMenu();
  // imageFilter();
  settingsPopover(document.querySelector("#sheet-list"));
});
// console.log("hello");
