import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Account from "../screens/Account";
import Favorite from "../screens/Favorite";
import StackNavigationPokemon from "./StackNavigationPokemon";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Cuenta"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Pokedex" component={StackNavigationPokemon} options={{
        tabBarIcon: () => renderPokeball(),
      }}/>
      <Tab.Screen
        name="Favoritos"
        component={Favorite}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -20 }}
    />
  );
}