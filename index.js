import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Item extends Component {
  render() {
    let item = this.props.store.item;

    return (
      <div>
        <h1><a href={item.url}>{item.title}</a></h1>
        <h2>{item.score} - {item.by.id}</h2>
        <hr />
      </div>
    );
  }
};

let mountNode = document.getElementById('container');
let item = {
  id: '1337',
  url: 'http://google.com',
  title: 'Google',
  score: 100,
  by: { id: 'clay' }
};
let store = { item };
let rootComponent = <Item store={store} />;

ReactDOM.render(rootComponent, mountNode);
