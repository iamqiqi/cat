import React, { Component } from 'react';
import { connect } from 'react-redux';
import CatMenu from '../components/CatMenu';
import CatContent from '../components/CatContent';
import DevTools from './DevTools';

import '../scss/styles.scss';

class App extends Component {
  render() {
    return (
      <div>
        <CatMenu />
        { __DEVTOOLS__ && typeof window.devToolsExtension === 'undefined' && <DevTools />}
      </div>
    );
  }
}

function select(state) {
  return {};
}

export default connect(select)(App);
