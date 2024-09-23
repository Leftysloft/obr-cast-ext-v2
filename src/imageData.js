//This file compares scene characters to scene metadata

import OBR from "@owlbear-rodeo/sdk";
import { ID } from "./constants";

export async function charUrl(characterUrl, characterName) {
  //Reads and retrieves url from Scene Metadata
  OBR.scene.setMetadata({
    [`${ID}`]: { [`${characterName}`]: { characterName, characterUrl } },
  });
  const data = [OBR.scene.getMetadata()];
  const promise1 = Promise.resolve(...data);
  console.log("scene data", data);
  promise1.then((meta) => {
    const sceneData2 = meta[`${ID}`];
    console.log("sceneData2", sceneData2);
    // console.log("metadata", data);

    // });
  });
}
