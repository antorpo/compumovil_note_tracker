import React from 'react';
import {AppRegistry} from 'react-native';
import {App} from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/store';

// Agregamos este componente para poder usar el useSelector en <App />
// ya que al tener el Provider en <App /> no podiamos consultar el estado
// porque no estaba cargado
const AppStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppStore);
