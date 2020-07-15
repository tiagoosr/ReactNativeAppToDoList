import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import Store from './src/Store';

import { createAppContainer } from 'react-navigation';
import DrawerNavigator from './src/navigators/DrawerNavigator';
const AppContainer = createAppContainer(DrawerNavigator);

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <AppContainer />
      </Provider>
    );
  }
}
export default App;