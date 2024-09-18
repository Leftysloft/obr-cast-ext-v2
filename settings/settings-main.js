import OBR from "@owlbear-rodeo/sdk";
import "../style.css";
import { setupSheetList } from "../sheetList";

OBR.onReady(() => {
  console.log("settings-main", setupSheetList.ten);
});
