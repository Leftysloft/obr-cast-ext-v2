//This file compares scene characters to scene metadata

import OBR from "@owlbear-rodeo/sdk";
import { ID } from "./constants";

export async function charUrl(char) {
  //Reads and retrieves url from Scene Metadata
  const data = [OBR.scene.getMetadata()];
  const promise1 = Promise.resolve(...data);
  promise1.then((meta) => {
    const sceneData2 = meta[`${ID}`];
    sceneData2.forEach((element) => {
      const findElement = [element].find((element2) => element2); // separate characters
      const listElement = [findElement].find((element) => element); // get image elements
      const listImage = [listElement[`image`]].find((element) => element);
      const listUrl = listImage[`url`];
      console.log("metaUrl", listUrl);
      console.log("character URL", char);
    });
  });
}
