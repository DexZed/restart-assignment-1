const AppStore = class Store {
	static instance;
	_state;
	listeners = [];
	constructor() {
		this._state = {
			user: "Guest",
			cartCount: 0,
			theme: "light"
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
}.getInstance();
export { AppStore };
