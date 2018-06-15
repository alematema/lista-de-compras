class LocalStoragePersistenceService {

	constructor(localStorage,storageName) {
		this._localStorage = localStorage;
		this._storageName = storageName;
	}

	save(obj) {

		let listaCompras;

		if (this._localStorage.getItem(this._storageName) === null) {
			listaCompras = [];
		} else {
			listaCompras = JSON.parse(this._localStorage.getItem(this._storageName));
		}

		listaCompras.push(obj);

		this._localStorage.setItem(this._storageName, JSON.stringify(listaCompras));

	}

	delete(obj) {

		let listaCompras;

		if (this._localStorage.getItem(this._storageName) === null) {
			listaCompras = [];
		} else {
			listaCompras = JSON.parse(this._localStorage.getItem(this._storageName));
		}


		listaCompras.forEach((item, index) => {

			if (item === obj) {

				listaCompras.splice(index, 1);
				this._localStorage.setItem(this._storageName, JSON.stringify(listaCompras));

			}

		});

	}
	
	deleteAll(){
		this._localStorage.setItem(this._storageName, JSON.stringify([]));
	}

	update(oldValue, newValue) {

		let listaCompras;

		if (this._localStorage.getItem(this._storageName) === null) {
			listaCompras = [];
		} else {
			listaCompras = JSON.parse(this._localStorage.getItem(this._storageName));
		}

		listaCompras.forEach( (item, index)=> {

			if (item === oldValue) {
							

				listaCompras[index] = newValue;
				this._localStorage.setItem(this._storageName, JSON.stringify(listaCompras));

			}

		});

	}
	
	get all(){
		
		let listaCompras;

		if (this._localStorage.getItem(this._storageName) === null) {
			listaCompras = [];
		} else {
			listaCompras = JSON.parse(this._localStorage.getItem(this._storageName));
		}
		
		return listaCompras;
		
	}

}
