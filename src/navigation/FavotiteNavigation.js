import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Favorites from '../screens/Favorite';

const Stack = createStackNavigator();

export default function FavotiteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={Favorites} options={{
        title: "Favoritos"
      }}/>
    </Stack.Navigator>
  )
}