import { html } from "./utils.js";
import { getProducts } from "./api/api.js";
function Trend() {
	return { render() {
		const container = html`<section id="trend-section">
        <h2 class="text-3xl font-bold m-10 text-center md:text-left">Trending Now</h2>
        <div class="loader">Loading products...</div> 
      </section>`;
		getProducts().then((data) => {
			const grid = html`
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 place-items-center">
            ${data.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 3).map((p) => ProductCard(p).render())}
          </div>
        `;
			container.querySelector(".loader")?.replaceWith(grid);
		});
		return container;
	} };
}
function ProductCard(product) {
	return { render() {
		return html`
        <div class="card bg-base-100 w-80 shadow-xs border border-base-200">
          <figure>
            <img
              src="${product.image}"
              alt="${product.title}"
              class="h-48 object-contain"
            />
          </figure>
          <div class="card-body">
            <div class="flex justify-between">
              <div class="badge badge-primary badge-outline badge-xs">
                ${product.category}
              </div>
              <div class="flex gap-2">
              <div class="rating rating-xs">
                  <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                    </div>
                <p class="text-xs">
                ${product.rating.rate} (${product.rating.count})
              </p>
              </div>
              
            </div>
            <p class="truncate font-semibold">${product.title}</p>
            <h2 class="card-title text-sm font-bold">$ ${product.price}</h2>
            <div class="flex justify-between mt-5">
              <button class="btn btn-sm btn-outline">Details</button>
              <button class="btn btn-sm btn-primary">Add</button>
            </div>
          </div>
        </div>
      `;
	} };
}
export { ProductCard, Trend as default };
