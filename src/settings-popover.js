import "../src/setting.style.css";

document.querySelector("#app").innerHTML = `
  <div id="button"></div>
  <script type="module" src="/main.js"></script>
  <div class="button">
    <button type="button"
      onclick="window.open('https://github.com/Leftysloft/obr-ext-healthbars/tree/main#readme', 'mozillaWindow', 'left=100,top=100,width=600,height=800')">Usage
      Guide</button>
  </div>
`;

console.log("Hello, I made it!");
