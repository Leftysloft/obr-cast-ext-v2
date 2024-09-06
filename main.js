import "./style.css";
import OBR from "@owlbear-rodeo/sdk";
//import { setupContextMenu } from "./src/popup";
//import { imageFilter } from "./src/imageUrl"; //Current file for getting the image url from all characters on a scene.
//import { imageFilter } from "./src/imageFetch"; //This is the original file for retrieving character image urls.
import { imageFilter } from "./src/imageUrl";
import { ID } from "./src/constants";
import { setupContextMenu } from "./contextMenu";

OBR.onReady(() => {
  //Open popover menu
  const popoverBtn = document.getElementById("popoverButton");
  popoverBtn.onclick = () => {
    console.log("popoverBtn");
    OBR.popover.open({
      id: ID,
      url: "/src/settings-popover.html",
      height: 400,
      width: 400,
    });
  };

  OBR.action.open();
  setupContextMenu();
});
