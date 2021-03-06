import React, { Component } from 'react';
import axios from 'axios';

class OptionUpdate extends Component{
	state = { id: null, message: null };

	setId(event){
		this.setState({ id: event.target.value });
	}

	setMessage(event){
		this.setState({ message: event.target.value });
	}

	updateData(id, message, data){
		let uuid = null;
		parseInt(id);
		for (let item of data){
			if (+item.id === +id){
				uuid = item._id;
			}
		}
		let requestData = {id: uuid, update: {message: message} }
		axios.post('http://localhost:3001/api/updateData', requestData);
	}

	render(){
		const { data } = this.props;
		const { id, message } = this.state;
		return(
			<div>
				<input type="text" placeholder="ID of item to update" 
						onChange={ (e) => this.setId(e) }/>
				<input type="text" placeholder="Update value of item"
						onChange={ (e) => this.setMessage(e) }/>
				<button onClick={ () => this.updateData(id, message, data) }>
					Update
				</button>
			</div>
		);
	}

}

export default OptionUpdate;