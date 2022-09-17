import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/Login';
import Home from './components/Home';
const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
         <Stack.Screen
          name="Home"
          component={Home}
        />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
