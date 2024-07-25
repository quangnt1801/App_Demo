/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AuthProvider} from './src/context/AuthContext';
import WelcomeScreen from './src/Main';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <WelcomeScreen />
    </AuthProvider>
  );
};

export default App;
