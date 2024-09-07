import OBR from "@owlbear-rodeo/sdk";
import "../style.css";
import { setupSheetList } from "../sheetList";

OBR.onReady(() => {
  document.querySelector("#app").innerHTML = `
    <div>
      <ul id="sheet-list"></ul>
    </div>
  `;
  setupSheetList(document.querySelector("#sheet-list"));
});
