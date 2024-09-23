import "../style.css";
import { charUrl } from "../src/imageData";
import { setupSheetList } from "../sheetList";

// let newItem = [];

export function settingsPopover() {
  const renderList = async (items) => {
    // Get the url of any item with
    // our gsheet metadata
    const sheetItems = [];

    for (const item of items) {
      const metadata = item.metadata[`${ID}/metadata`];
      if (metadata) {
        sheetItems.push({
          url: metadata.url,
          character_id: metadata.character_id,
          name: item.text.plainText,
          visible: metadata.visible,
          id: item.id,
        });
        console.log("sheetItems", sheetItems);
        console.log("metadata", metadata);
      }
      console.log("metadata", metadata);
      console.log("sheetItems 2", sheetItems);
    }
    OBR.scene.items.onChange(renderList);
    // console.log("renderedList", items);
  };

  //   console.log("Settings-Selector");
  //   setupSheetList(newItem);
  //   console.log("newItem", newItem);
  //   charUrl();
}
