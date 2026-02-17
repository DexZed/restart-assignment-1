async function getProducts() {
	return await (await fetch("https://fakestoreapi.com/products")).json();
}
export { getProducts };
