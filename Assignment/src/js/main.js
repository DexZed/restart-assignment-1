/* empty css           */
import Footer from "./footer.js";
import Navbar from "./navbar.js";
import { AppStore } from "./store/store.js";
import router from "./router/routes.js";
function buildUi() {
	const app = document.querySelector("#app");
	const components = [
		Navbar().render(),
		router().render(),
		Footer().render()
	];
	app.replaceChildren(...components);
}
function Main() {
	window.addEventListener("popstate", buildUi);
	AppStore.subscribe(buildUi);
	document.addEventListener("DOMContentLoaded", () => {
		buildUi();
		document.body.addEventListener("click", (e) => {
			const link = e.target.closest("a");
			if (link && link.getAttribute("href")?.startsWith("/")) {
				e.preventDefault();
				history.pushState(null, "", link.href);
				buildUi();
			}
		});
	});
}
Main();
