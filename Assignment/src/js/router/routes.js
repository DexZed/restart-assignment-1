var routes = [
	{
		path: "/error",
		view: () => ({ render: () => {
			const template = document.createElement("template");
			template.innerHTML = `
        <section class="hero">
          Error Page
        </section>
      `.trim();
			return template.content.firstElementChild;
		} })
	},
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
function router() {
	const match = routes.find((r) => location.pathname === r.path);
	return match ? match.view() : routes[0].view();
}
export { router as default };
