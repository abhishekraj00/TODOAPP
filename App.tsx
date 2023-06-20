import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/Router/Mystack';
import UserProvider from './src/context/UserContext';
import {ToastAndroid} from 'react-native';
import {Button} from 'react-native-elements';
import MyButton from './src/components/MyButton';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
