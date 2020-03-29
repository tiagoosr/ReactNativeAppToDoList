import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import Store from './src/Store';

import { createAppContainer } from 'react-navigation';
import FetchRequest from './src/screens/FetchRequest';
import DrawerNavigator from './src/navigators/DrawerNavigator';
const AppContainer = createAppContainer(DrawerNavigator);

class App extends React.Component {
  render() {
    return (
      // <ImageBackground source={require('./src/images/background.png')} style={{width: '100%', height: '100%'}}>
      // Provider seria uma caixa
      <Provider store={Store}>
        <AppContainer />
      </Provider>

      // {/* </ImageBackground> */}
    );
  }
}
export default App;