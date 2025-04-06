import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Discovery from '../../screens/Discovery/Discovery';
import Collection from '../../screens/Collection/Collection';
import Profile from '../../screens/Profile/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../themes/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={({route})=>({
      tabBarHideOnKeyboard: true,
      tabBarIcon:({focused, color, size})=>{
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Discovery') {
          iconName = focused ? 'search' : 'search-outline';
        } else if (route.name === 'Collection') {
          iconName = focused ? 'bookmark' : 'bookmark-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }   
        
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: color.primary,
      tabBarInactiveTintColor: color.grey,

      tabBarStyle: {
        backgroundColor: 'white',
        height: 60,
        paddingBottom: 8,
        borderTopColor: '#F0F0F0',
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '500',
      },
    })}

    
    >
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{headerShown: false}} 
      />
      <Tab.Screen
        name="Discovery"
        component={Discovery}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Collection"
        component={Collection}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
