import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Pokedex(props) {

  const { navigation } = props

  const goToPokemon = () => {
    navigation.navigate('Pokemon')
  }

  return (
    <View>
      <Text>Pokedex</Text>
      <Button title="Ir a Pokemon" onPress={goToPokemon} />
    </View>
  )
}