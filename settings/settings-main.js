import OBR from "@owlbear-rodeo/sdk";
import "../style.css";
import { element } from "../sheetList";

OBR.onReady(() => {
  setupSheetList(element);
});
