import React, { Component } from 'react';

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
				uuid = item.id
			}
		}

		let filtered_data = data.filter( item => +item.id !== +uuid );
		data.length = 0;
		data.push( ...filtered_data);
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