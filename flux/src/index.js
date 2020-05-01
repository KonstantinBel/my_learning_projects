import { Dispatcher } from 'flux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




class MyDispatcher {
  register(callback) {
    this.callback = callback;
  }

  dispatch(obj) {
    this.callback(obj);
  }
}


const AppDispatcher = new MyDispatcher();

window.ListStore = {
   items: []
}

AppDispatcher.register(payload => {
  // eslint-disable-next-line default-case
  switch(payload.eventName) {
    case 'new-item':
      window.ListStore.items.push(payload.newItem);
      document.dispatchEvent(new Event('updateStore'));
      break;
  }

  return true;
});

document.querySelector('.js-add-item').addEventListener('click', event => {
  AppDispatcher.dispatch({
    eventName: 'new-item',
    newItem: { name: 'Marco' }
  });
});

function renderStore() {
  const viewEl = document.querySelector('.js-store-view');
  viewEl.innerHTML = '';

  window.ListStore.items.forEach(element => {
    viewEl.innerHTML += element.name + '\n';
  });
}

document.addEventListener('updateStore', event => {
  renderStore();
})
