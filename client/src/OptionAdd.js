import React, { Component } from 'react';
import axios from 'axios';

class OptionAdd extends Component{
	state = { message: null };

	setMessage(event){
		this.setState( {message: event.target.value } );
	}

	putData(message, data){
		let currentIds = data.map( (item => item.id));
		let id = 0;
		while (currentIds.includes(id) ){
			id++;
		}
		let item = {id: id, message: message};
		axios.post('http://localhost:3001/api/putData', item);
	}

	render(){
		const { message } = this.state;
		const { data } = this.props;
		return(
		 <div>
          <input type="text" 
          		 placeholder="add text to database" 
          		 onChange={ (e) => this.setMessage(e) } />
          <button onClick={ () => this.putData(message,data) }>
            Create
          </button>
        </div>
		);
	}
}

export default OptionAdd;