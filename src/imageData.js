//This file compares scene characters to scene metadata

import OBR from "@owlbear-rodeo/sdk";
import { ID } from "./constants";

export async function charUrl(characterUrl, characterName) {
  //Reads and retrieves url from Scene Metadata
  OBR.scene.setMetadata({ [`${ID}`]:{[`${characterName}`]: {characterName, characterUrl}} });
  const data = [OBR.scene.getMetadata()];
  const promise1 = Promise.resolve(...data);
  promise1.then((meta) => {
    const sceneData2 = meta[`${ID}`];
    // sceneData2.forEach((element) => {
      // const findElement = [element].find((element2) => element2); // separate characters
      // const listElement = [findElement].find((element) => element); // get image elements
      // const listImage = [listElement[`image`]].find((element) => element);
      // const listUrl = listImage[`url`];
     // console.log("metaUrl", findElement);
     // console.log("character URL", characterUrl);
     // console.log("character name", characterName);

     console.log("sceneData2", sceneData2);
     // console.log("metadata", data);
const arr = [sceneData2]
arr.push(arr && sceneData2)
console.log("arr", arr)
    // });
  });
}
