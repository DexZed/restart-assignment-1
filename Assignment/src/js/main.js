/* empty css           */
import Footer from "./footer.js";
import Hero from "./hero.js";
import Navbar from "./navbar.js";
function buildUi(ui) {
	document.querySelector("#app").replaceChildren(...ui.map((section) => {
		const el = document.createElement("div");
		el.innerHTML = section.render();
		return el.firstElementChild;
	}));
}
buildUi([
	Navbar(),
	Hero(),
	Footer()
]);
