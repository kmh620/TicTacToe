
import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './components/Styles';
import Game from './components/Game';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore();

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

const render = (Component) => {
  ReactDOM.render(

    <HashRouter>
      <Provider store={store}>
        <Component/>
      </Provider>
    </HashRouter>
    ,
    document.getElementById('react-app-root')
  );
};

render(Game);

/*eslint-disable*/
if (module.hot) {
  module.hot.accept('./components/Game', () => {
    render(Game);
  });
}
/*eslint-enable*/
