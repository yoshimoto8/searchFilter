import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      initialItem: [
        "apple",
        "tree",
        "pen",
        "mike",
        "dog",
        "cat",
        "iphone",
        "book"
      ],
      items: []
    }
  }

  componentDidMount() {
    this.setState({items: this.state.initialItem})
  }

  filterList = (e) => {
    const updateList = this.state.initialItem.filter((item) => {
      return item.toLowerCase().search( e.target.value.toLowerCase()) !== -1;
    })
    this.setState({items: updateList})
  }

  render() {
    return (
      <div>
        <form action="">
          <input type="text" placeholder="search" onChange={this.filterList}/>
        </form>
        <div>
          {this.state.items.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )  
          })}
        </div>
      </div>
    );
  }
}

export default App;
