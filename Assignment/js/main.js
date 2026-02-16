/* empty css           */
import { setupCounter } from "./counter.js";
document.querySelector("#app").innerHTML = `
  <div>
    Hello Vite!

  </div>
`;
setupCounter(document.querySelector("#counter"));
