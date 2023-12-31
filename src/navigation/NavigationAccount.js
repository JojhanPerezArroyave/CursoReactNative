import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'  
import Account from '../screens/Account'

const Stack = createStackNavigator()

export default function NavigationAccount() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} options={{
        title: "Cuenta"
      }}/>
    </Stack.Navigator>
  )
}