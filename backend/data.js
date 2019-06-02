uuid = 0;
database = [];

class Data{
	constructor(){
		this._id = uuid++;
	}

	static find(){
		return database;
	}

	static findByIdAndUpdate(id, update){
		database.forEach( item => { 
			if (+item._id === +id){
				Object.assign(item, update)
			}
		});
	}

	static findByIdAndRemove(id){
		parseInt(id);
		database = database.filter( item => +item._id !== +id)
	}

	save(){
		database.push(this);
	}
}

module.exports = Data;