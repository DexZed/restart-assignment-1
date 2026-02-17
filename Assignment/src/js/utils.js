function html(strings, ...values) {
	const placeholders = /* @__PURE__ */ new Map();
	const fullHtml = strings.reduce((acc, str, i) => {
		const value = values[i];
		let replacement = value;
		if (value instanceof HTMLElement || Array.isArray(value) && value[0] instanceof HTMLElement) {
			const id = `placeholder-${Math.random().toString(36).substr(2, 9)}`;
			placeholders.set(id, value);
			replacement = `<div id="${id}"></div>`;
		}
		return acc + str + (replacement ?? "");
	}, "");
	const template = document.createElement("template");
	template.innerHTML = fullHtml.trim();
	const root = template.content.firstElementChild;
	placeholders.forEach((node, id) => {
		const marker = root.querySelector(`#${id}`);
		if (marker) if (Array.isArray(node)) marker.replaceWith(...node);
		else marker.replaceWith(node);
	});
	return root;
}
export { html };
