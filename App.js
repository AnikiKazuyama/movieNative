import React from 'react';

import { Provider } from 'mobx-react';
import MoviesStore from './App/src/stores/MoviesStore'; 

import Root from './App/src/components/root/root';

const stores = {
  MoviesStore
}

export default class App extends React.Component {
  render() {
    return (
      <Provider { ...stores }>
        <Root/>
        {/* <View/> */}
      </Provider>
    );
  }
}
