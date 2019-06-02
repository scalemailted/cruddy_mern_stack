import React, { Component } from 'react';

class ListData extends Component{
	render(){
		const { data } = this.props;
		return(
		  <ul>
		  {
		  	(data.length <= 0)
         	?  'NO ENTRIES YET'
         	: data.map( item => <ListItem id={item.id} message={item.message} key={item.id} />)
          }
       	  </ul>
		);
	}
}

class ListItem extends Component{
	render(){
		const {id, message} = this.props;
		return(
			<li>
				id:{id} <br />
				message:{message}
			</li>
		);
	}
}

export default ListData;