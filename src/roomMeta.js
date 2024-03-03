import OBR from "@owlbear-rodeo/sdk";
import { ID } from "./constants";

// For testing only.  This will move to "./src/image-match.js" & "contextMenu"
//TODO: Add a context meny item to set PC = true.  If true, store data in room meta
// console.log("scene meta", OBR.scene.getMetadata()); //not used atm
// console.log("room meta", OBR.room.getMetadata({ [`${ID}`]: characters }));
OBR.room.setMetadata({ [`${ID}`]: characters });
OBR.scene.setMetadata({ [`${ID}`]: characters });

const data = [OBR.scene.getMetadata()];
console.log("data", data);
const promise1 = Promise.resolve(...data);
console.log("promise1", promise1);
//console.log("characters currently in scene", characters); // characters currently in scene
//console.log("characters in sceneMetaData", promise1); // characters in sceneMetaData
promise1.then((meta) => {
  console.log(
    "value of 'element'",
    meta[`${ID}`].find((element) => element)
  );
  //console.log("meta", meta); // all sceneMetaData
  //console.log("metaID", meta[`${ID}`]);
  const sceneData2 = meta[`${ID}`].find((element) => element);
  //console.log("sceneData2", [sceneData2[`image`]]); //  Do Not Touch!  Make a copy to play with this.
  const sceneData3 = [sceneData2[`image`]].find((element) => element);
  //console.log("sceneData3", [sceneData3[`url`]]);
  //console.log("meta", OBR.room.getMetadata());
});
