import OBR from "@owlbear-rodeo/sdk";
import { ID } from "./constants";
import { isImage } from "@owlbear-rodeo/sdk";

export async function imageFilter() {
  const renderList = async (characters) => {
    // begin filter
    characters = await OBR.scene.items.getItems(
      (item) => item.layer === "CHARACTER" && isImage(item)
    );
    // end filter
    console.log("characters2", characters);
  };
  OBR.scene.items.onChange(renderList);
}
