import "../style.css";
import { imageFilter } from "../src/imageUrl";
import OBR from "@owlbear-rodeo/sdk";

OBR.onReady(() => {
  imageFilter(characterUrl, characterName);
});
