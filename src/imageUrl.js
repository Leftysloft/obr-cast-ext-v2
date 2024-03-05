//This file is used to get the URL from all characters in the current scene.
import OBR from "@owlbear-rodeo/sdk";
import { isImage } from "@owlbear-rodeo/sdk";
import { charUrl } from "./imageData";

export async function imageFilter(characterUrl) {
  OBR.scene.items.onChange(async (characters) => {
    // begin filter
    characters = await OBR.scene.items.getItems(
      (items) => items.layer === "CHARACTER" && isImage(items)
    );
    // end filter

    characters.forEach((element) => {
      const findElement = [element].find((element2) => element2); // separate characters
      const listElement = [findElement[`image`]]; // get image elements
      const findUrl = [...listElement].find((element3) => element3); // get url from image
      characterUrl = findUrl[`url`];
      charUrl(characterUrl);
    });
  });
}
// // not used // sort characters
// const sortedCharacter = characters.sort((a, b) =>
//   a.name.localeCompare(b.name)
// );
