import { html } from "../utils.js";
var routes = [
	{
		path: "/",
		view: () => ({ render: () => {
			const template = document.createElement("template");
			template.innerHTML = `
        <section class="hero">
          Home Page
        </section>
      `.trim();
			return template.content.firstElementChild;
		} })
	},
	{
		path: "/products",
		view: () => ({ render: () => {
			const template = document.createElement("template");
			template.innerHTML = `
        <section class="hero">
         Products Page
        </section>
      `.trim();
			return template.content.firstElementChild;
		} })
	},
	{
		path: "/products/:id",
		view: (params) => ({ render: () => {
			const template = document.createElement("template");
			template.innerHTML = `
        <section class="hero">
         Products Page Id: ${params?.[0]} 
        </section>
      `.trim();
			return template.content.firstElementChild;
		} })
	},
	{
		path: "/about",
		view: () => ({ render: () => {
			const template = document.createElement("template");
			template.innerHTML = `
        <section class="hero">
          About Page
        </section>
      `.trim();
			return template.content.firstElementChild;
		} })
	},
	{
		path: "/contact",
		view: () => ({ render: () => {
			const template = document.createElement("template");
			template.innerHTML = `
        <section class="hero">
          Contact Page
        </section>
      `.trim();
			return template.content.firstElementChild;
		} })
	}
];
function getRouteParams(routePath) {
	const currentPath = location.pathname;
	const regex = new RegExp("^" + routePath.replace(/:[^\s/]+/g, "([^/]+)") + "$");
	const match = currentPath.match(regex);
	if (match) return match.slice(1);
	return null;
}
function router() {
	for (const route of routes) {
		const params = getRouteParams(route.path);
		if (params) return route.view(params);
	}
	return { render: () => {
		return html`
        <section class="hero">
          Error Page
        </section>
      `;
	} };
}
export { router as default };
