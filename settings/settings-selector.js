//This file is no longer used

import OBR from "@owlbear-rodeo/sdk";
// import { ID } from "./constants";
import { isImage } from "@owlbear-rodeo/sdk";

export async function settingsPopover() {
  OBR.scene.items.onChange(async (characters) => {
    // begin filter
    characters = await OBR.scene.items.getItems(
      (items) => items.layer === "CHARACTER" && isImage(items)
    );
    // end filter

    // console.log("characters", characters);

    const resolve = Promise.resolve([...characters]);
    // console.log("all characters, resolved", resolve);
    (await resolve).forEach((element) =>
      console.log("all character elements", element)
    );
    resolve.then((...meta2) => {
      console.log(
        "resolve 'element2'",
        meta2.find((element2) => element2)
      );
      // console.log("meta2", ...meta2);
      const [resolve2] = [...meta2].find((element2) => element2);
      // console.log("resolve2-1", [resolve2]);
      // console.log("resolve2", [resolve2[`image`]]);
      const resolve3 = [resolve2[`image`]].find((element) => element);
      // console.log("resolve3", resolve3[`url`]);
    });
  });
}
