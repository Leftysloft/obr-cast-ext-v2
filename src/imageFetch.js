import OBR from "@owlbear-rodeo/sdk";
import { ID } from "./constants";
import { isImage } from "@owlbear-rodeo/sdk";

export async function imageFilter() {
  OBR.scene.items.onChange(async (characters) => {
    // begin filter
    characters = await OBR.scene.items.getItems(
      (item) => item.layer === "CHARACTER" && isImage(item)
    );
    // end filter

    console.log("characters", characters);

    // For testing only.  This will move to "./src/image-match.js" & "contextMenu"
    //TODO: Add a context meny item to set PC = true.  If true, store data in room meta
    //console.log("scene meta", OBR.scene.getMetadata()); //not used atm
    console.log("room meta", OBR.room.getMetadata());
    OBR.room.setMetadata({ [`${ID}`]: characters });
    //TODO: build function that itterates through the characters and room.meta
  });
}
