import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Plyground from '../../screens/Plyground';
import Home from '../../screens/Home/Home';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Plyground"
          component={Plyground}
          options={{headerShown: false}}
        /> */}
         <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
