import OBR from "@owlbear-rodeo/sdk";
import "../style.css";
import { settingsPopover } from "./settings-selector";
import { setupContextMenu } from "../contextMenu";

OBR.onReady(() => {
  document.querySelector("#app").innerHTML = `
  <div>
    <ul id="sheet-list"></ul>
  </div>
`;
  setupContextMenu();
  // imageFilter();
  settingsPopover(document.querySelector("#sheet-list"));
  OBR.action.open();
});
// console.log("hello");
