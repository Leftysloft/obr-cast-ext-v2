import OBR from "@owlbear-rodeo/sdk";
import "../style.css";
import { settingsPopover } from "./settings-selector";

OBR.onReady(() => {
  document.querySelector("#app").innerHTML = `
<div>
  <ul id="settings-page"></ul>
</div>
`;

  settingsPopover(document.querySelector("#setting-page"));
});
// console.log("hello");
