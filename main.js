import "./style.css";
import OBR from "@owlbear-rodeo/sdk";
import { ID } from "./src/constants";
import { setupContextMenu } from "./contextMenu";
import { setupSheetList } from "./sheetList";

OBR.onReady(() => {
  //Open popover menu
  const popoverBtn = document.getElementById("popoverButton");
  popoverBtn.onclick = () => {
    OBR.popover.open({
      id: ID,
      url: "/src/settings-popover.html",
      height: 400,
      width: 400,
    });
  };
  document.querySelector("#app").innerHTML = `
  <div>
    <ul id="sheet-list"></ul>
  </div>
`;
  setupContextMenu();
  setupSheetList(document.querySelector("#sheet-list"));
  OBR.action.open();
});
