import React, { Component } from 'react';
import axios from 'axios';

class OptionDelete extends Component{
	state = { id: null };

	setId(event){
		this.setState({id: event.target.value});
	}

	deleteData(id, data){
		parseInt(id);
		let uuid = null;
		for (let item of data){
			if(+item.id === +id){
				uuid = item._id
			}
		}

		axios.delete('http://localhost:3001/api/deleteData',{ data: {id: uuid} } );
	}

	render(){
		const { id } = this.state;
		const { data } = this.props;
		return(
			<div>
				<input type="text" placeholder="ID of item to delete"
						onChange={ (e) => this.setId(e) } />
				<button onClick={ () => this.deleteData(id,data) }>
					Delete
				</button>
			</div>
		);
	}



}

export default OptionDelete;