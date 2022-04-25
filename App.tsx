import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import store from './src/Store';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation, {navigationRef} from './src/Navigations';
import {default_theme} from './src/Theme';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <ThemeProvider theme={default_theme}>
          <RootNavigation />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
