class ListaDeComprasView {
	
		constructor(element){
			this._element = element;
		};
		
		_template(model){
			
			return `${model.
				all.
				map( item => `<li class="collection-item">${item}<a class="delete-item secondary-content"><i style="cursor:pointer;" title="Remove ${item}" class="fa fa-remove" onclick="listaDeComprasController.confirmarRemover(event);"></i></a></li>`)
							.join('')
							}`;
		};
	
		update(model){
			this._element.innerHTML = this._template(model);
		};
	
}