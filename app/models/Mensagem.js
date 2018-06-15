class Mensagem {

    constructor(texto){
        
        
        let handler = {

            get(target,prop){
                if(prop[0]==='_') throw new Error(`${prop} is private. Access denied from getting`);
                return Reflect.get(target,prop);
            },

            set(target,prop,value){
                if(prop[0]==='_') throw new Error(`${prop} is private. Access denied from setting`);
                return Reflect.set(target,prop,value);
            }

        };

        let proxy = new Proxy(this,handler);

        this._texto = texto;

        return proxy;

    }

    get texto(){
        return this._texto;
    }    

    set texto(novaMensagem){
        this._texto = novaMensagem;
    }

}