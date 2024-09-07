import "../style.css";
import { imageFilter } from "../src/imageFetch";
import OBR from "@owlbear-rodeo/sdk";

OBR.onReady(() => {
  imageFilter();
});
