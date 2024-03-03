//This file is no longer used

import OBR from "@owlbear-rodeo/sdk";
import { ID } from "./constants";
import { isImage } from "@owlbear-rodeo/sdk";

export async function imageFilter() {
  OBR.scene.items.onChange(async (characters) => {
    // begin filter
    characters = await OBR.scene.items.getItems(
      (items) => items.layer === "CHARACTER" && isImage(items)
    );
    // end filter

    console.log("characters", characters);

    const resolve = Promise.resolve([...characters]);
    console.log("all characters, resolved", resolve);
    (await resolve).forEach((element) =>
      console.log("all character elements", element)
    );
    resolve.then((...meta2) => {
      console.log(
        "resolve 'element2'",
        meta2.find((element2) => element2)
      );
      console.log("meta2", ...meta2);
      const [resolve2] = [...meta2].find((element2) => element2);
      console.log("resolve2-1", [resolve2]);
      console.log("resolve2", [resolve2[`image`]]);
      const resolve3 = [resolve2[`image`]].find((element) => element);
      console.log("resolve3", resolve3[`url`]);
    });

    // // For testing only.  This will move to "./src/image-match.js" & "contextMenu"
    // //TODO: Add a context meny item to set PC = true.  If true, store data in room meta
    // // console.log("scene meta", OBR.scene.getMetadata()); //not used atm
    // // console.log("room meta", OBR.room.getMetadata({ [`${ID}`]: characters }));
    // OBR.room.setMetadata({ [`${ID}`]: characters });
    // OBR.scene.setMetadata({ [`${ID}`]: characters });

    // const data = [OBR.scene.getMetadata()];
    // console.log("data", data);
    // const promise1 = Promise.resolve(...data);
    // console.log("promise1", promise1);
    // //console.log("characters currently in scene", characters); // characters currently in scene
    // //console.log("characters in sceneMetaData", promise1); // characters in sceneMetaData
    // promise1.then((meta) => {
    //   console.log(
    //     "value of 'element'",
    //     meta[`${ID}`].find((element) => element)
    //   );
    //   //console.log("meta", meta); // all sceneMetaData
    //   //console.log("metaID", meta[`${ID}`]);
    //   const sceneData2 = meta[`${ID}`].find((element) => element);
    //   //console.log("sceneData2", [sceneData2[`image`]]); //  Do Not Touch!  Make a copy to play with this.
    //   const sceneData3 = [sceneData2[`image`]].find((element) => element);
    //   //console.log("sceneData3", [sceneData3[`url`]]);
    //   //console.log("meta", OBR.room.getMetadata());
    // });

    //TODO: build function that itterates through the characters and room.meta
  });
}
