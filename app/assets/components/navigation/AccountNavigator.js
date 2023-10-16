import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen, MessageScreen,MyPostsScreen } from '../../screens';


const Stack = createStackNavigator();



export default function AccountNavigator() {
    return (
      <Stack.Navigator >
        <Stack.Screen name="MyAccountScreen" component={AccountScreen} options={{title:"",headerShown:false}}/>
        <Stack.Screen name="Message" component={MessageScreen} />
      </Stack.Navigator>
    );
  }