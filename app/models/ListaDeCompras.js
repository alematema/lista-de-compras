class ListaDeCompras {
	
	constructor() {
		this._lista = [];
		this.NUMBER_TYPE = typeof 1;
	};

	add(item) {
		
		if(item.trim()==='')throw new Error('O item não pode ser vazio');
		
		this._lista.push(item);
		
//		this._lista = [].concat(this._lista,item);GAMBIS PRO PROXY DE LISTA COMPRAS
		
	};

	remove(item) {
		this._lista.forEach((i, index) => {
			if (i === item) this._lista.splice(index, 1);
		});
	};
	
	removeAll(){
		this._lista = [];
	};

	get all() {
		return Array.from(this._lista);
	};

	contains(item) {
		return this._lista.includes(item);
	};

	get size() {
		return this._lista.length;
	};

	set(index, value) {
		if (index >= 0 && index < this.size) this._lista[index] = value;
	}

	indexOf(item) {
		return this._lista.indexOf(item);
	}

	get(item) {

		if ( ! this.isNumberType(item) ) {

			if (this.indexOf(item) !== -1) return this._lista[this.indexOf(item)];
			else return undefined;

		} else {

			if (item >= 0) return this._lista[item];
			else return undefined;

		}

	};
	
	isNumberType(value){
		return typeof value === this.NUMBER_TYPE
	};

}
