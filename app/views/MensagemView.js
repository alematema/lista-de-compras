class MensagemView {


    constructor(element){
        this._element = element;
    };
    
    _template(model){
        
    };

    update(model){
       
        let toastHtml;
        let toastDisplayLenght = 1500;

        if(model.texto.indexOf(':-(')!==-1){
            toastDisplayLenght = 2500;
        }

        if(model.texto.indexOf('<span>')!==-1){
            toastDisplayLenght = 10000;
        }

        M.toast({
			html: model.texto,
			displayLength: toastDisplayLenght
		});

    };


}