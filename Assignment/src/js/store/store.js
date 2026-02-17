import { __vitePreload } from "../../../_virtual/_vite/preload-helper.js";
const AppStore = class Store {
	static instance;
	_state;
	listeners = [];
	constructor() {
		this._state = {
			user: "Guest",
			cartCount: 0,
			theme: "light",
			selectedCategory: "all",
			products: [],
			isLoading: false
		};
	}
	static getInstance() {
		if (!Store.instance) Store.instance = new Store();
		return Store.instance;
	}
	get state() {
		return this._state;
	}
	subscribe(fn) {
		this.listeners.push(fn);
	}
	setState(newState) {
		this._state = {
			...this._state,
			...newState
		};
		this.notify();
	}
	notify() {
		this.listeners.forEach((fn) => fn());
	}
	async fetchProducts() {
		if (this._state.isLoading || this._state.products.length > 0) return;
		this.setState({ isLoading: true });
		try {
			const { getProducts } = await __vitePreload(async () => {
				const { getProducts } = await import("../api/api.js");
				return { getProducts };
			}, [], import.meta.url);
			const data = await getProducts();
			this.setState({
				products: data,
				isLoading: false
			});
		} catch (error) {
			console.error("Failed to fetch", error);
			this.setState({ isLoading: false });
		}
	}
}.getInstance();
export { AppStore };
