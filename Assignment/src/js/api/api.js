const Catagories = [
	"electronics",
	"jewelery",
	"men's clothing",
	"women's clothing"
];
async function getProducts() {
	return await (await fetch("https://fakestoreapi.com/products")).json();
}
export { Catagories, getProducts };
