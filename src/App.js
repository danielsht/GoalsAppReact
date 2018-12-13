import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Daily Goals</h3>
          <ul>
            {this.state.items.map(item => (
              <li key={item.id}><input className="remove-button" type="checkbox" onClick={(e) => {this.removeItem(item)}} /> {item.text}</li>
            ))}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What are your goals for today?
            </label>
            <input id="new-todo" onChange={this.handleChange} value={this.state.text} />
            <button>Add {this.state.items.length + 1}</button>
          </form>
        </header>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  removeItem(item) {
    const newItems = this.state.items.filter(AOItems => {
      return AOItems !== item;
    });

    this.setState({
      items: [...newItems]
    })
  }
}

export default App;
