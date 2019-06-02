import React, { Component } from 'react';
import ListData from './ListData';
import OptionAdd from './OptionAdd';
import OptionDelete from './OptionDelete';
import OptionUpdate from './OptionUpdate';

class App extends Component{
  state = { data: [] };

  componentDidMount(){
    setInterval( () => this.getData(), 1000);
  }

  getData(){
    this.setState({data: this.state.data});
  }

  render(){
    const { data } = this.state;
    return (
      <div>
        <ListData data={data} />
        <OptionAdd data={data} />
        <OptionDelete data={data} />
        <OptionUpdate data={data} />
      </div>
    );
  }
}

export default App;