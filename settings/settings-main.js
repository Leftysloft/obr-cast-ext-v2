import OBR from "@owlbear-rodeo/sdk";
import "../style.css";
import "../sheetList";

OBR.onReady(() => {
  setupSheetList(document.querySelector("#sheet-list"));
});
