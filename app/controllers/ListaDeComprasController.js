class ListaDeComprasController {

	constructor(persistenceServiceImpl) {

		this._itemCompra = document.querySelector('#item');
		this._persistenceService = new PersistenceService(persistenceServiceImpl);
		this._listaDeCompras = new Bind(
			new ListaDeCompras(),
			new ListaDeComprasView(document.querySelector('.collection')),
			['add', 'remove', 'removeAll']
		);

		this._mensagem = new Bind(
			new Mensagem(),
			new MensagemView(),
			['texto']
		);


	}

	adiciona(event) {

		event.preventDefault();

		try {

			this._listaDeCompras.add(this._itemCompra.value);
			this._persistenceService.save(this._itemCompra.value);

		} catch (e) {
			//alert(':-(\n' + e.message + '\nDigite um item de compra');
			this._mensagem.texto = ':-(\n' + e.message + '\nDigite um item de compra';
			return;
		}

		this._mensagem.texto = `${this._itemCompra.value} adicionado`;
		this._limpaFormulario();

	}

	_limpaFormulario() {
		this._itemCompra.value = '';
		document.querySelector('#nova-item').className = '';
	}

	remover(item) {

		// Get toast DOM Element, get instance, then call dismiss function
		var toastElement = document.querySelector('.toast');
		var toastInstance = M.Toast.getInstance(toastElement);
		toastInstance.dismiss();

		this._listaDeCompras.remove(item);
		this._persistenceService.delete(item);


	}

	cancelarRemover() {

		// Get toast DOM Element, get instance, then call dismiss function
		var toastElement = document.querySelector('.toast');
		var toastInstance = M.Toast.getInstance(toastElement);
		toastInstance.dismiss();

	}

	apagarLista(event) {

		// Get toast DOM Element, get instance, then call dismiss function
		var toastElement = document.querySelector('.toast');
		var toastInstance = M.Toast.getInstance(toastElement);
		toastInstance.dismiss();

		this._listaDeCompras.removeAll();
		this._persistenceService.deleteAll();
	

	}

	cancelarApagarLista(event) {
		// Get toast DOM Element, get instance, then call dismiss function
		var toastElement = document.querySelector('.toast');
		var toastInstance = M.Toast.getInstance(toastElement);
		toastInstance.dismiss();
	}

	confirmarRemover(event) {

		this._mensagem.texto = `<span>Apagar ${event.srcElement.parentElement.parentElement.textContent} ?</span>
<button class="btn-flat toast-action" onclick="listaDeComprasController.cancelarRemover()">NÃO</button>
<button class="btn-flat toast-action" onclick="listaDeComprasController.remover('${event.srcElement.parentElement.parentElement.textContent}')">SIM</button>`;

	}

	confirmarApagarListaCompras(event) {

		if (this._listaDeCompras.size === 0) return;

		this._mensagem.texto = `<span>Apagar O(s) ${this._listaDeCompras.size} Item(s) Da Lista De Compras ?</span><button class="btn-flat toast-action" onclick="listaDeComprasController.cancelarApagarLista(event)">NÃO</button><button class="btn-flat toast-action" onclick="listaDeComprasController.apagarLista(event)">SIM</button>`;

	}

	//Carrega lista de compras
	loadListaDeCompras() {

		let listaCompras = this._persistenceService.all;

		listaCompras.forEach(item => {

			this._listaDeCompras.add(item);

		});


		if (listaCompras.length > 0) {

			this._mensagem.texto = `Lista De Compras Carregada`;
			
		}

	}

}
