import { html } from "./utils.js";
import Features from "./features.js";
import Hero from "./hero.js";
import Trend from "./trending.js";
function Home() {
	return { render() {
		return html`<section>${Hero().render()} ${Features().render()}${Trend().render()}</section>`;
	} };
}
export { Home as default };
