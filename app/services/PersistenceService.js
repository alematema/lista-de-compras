class PersistenceService  {
	
	constructor(persistenceServiceImpl){
		this._persistenceServiceImpl = persistenceServiceImpl;
	}
	
	save(obj){
		this._persistenceServiceImpl.save(obj);
	}
	
	delete(obj){
		this._persistenceServiceImpl.delete(obj);
	}
	
	deleteAll(){
		this._persistenceServiceImpl.deleteAll();
	}
	
	update(oldValue, newValue){
		this._persistenceServiceImpl.update(oldValue,newValue);
	}
	
	get all(){
		return this._persistenceServiceImpl.all;
	}
	
}