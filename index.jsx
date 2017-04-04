'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

import { updateCatListData } from './actions/actions';

const rootEl = document.getElementById('app');

import InitCatListData from './data/InitCatListData';


const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  if (state && state.catListData) {
    localStorage.catListData = JSON.stringify(state.catListData);
  }
});

if (localStorage.catListData) {
  store.dispatch(updateCatListData(JSON.parse(localStorage.catListData)));
} else {
  store.dispatch(updateCatListData(InitCatListData));
}

window.store = store;

ReactDOM.render(
  <Root store={store} />,
  rootEl
);
