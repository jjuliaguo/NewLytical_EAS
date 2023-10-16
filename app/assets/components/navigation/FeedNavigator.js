import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyPostsScreen, NewsDetailScreen } from '../../screens';
import route from './route';

const Stack = createStackNavigator();



export default function FeedNavigator() {
    return (
      <Stack.Navigator >
        <Stack.Screen name="MyPosts" component={MyPostsScreen} options={{headerShown:false, title:"Home"}}/>
        <Stack.Screen name={route.NEWS_DETAILS} component={NewsDetailScreen} options={{title:""}} />
      </Stack.Navigator>
    );
  }