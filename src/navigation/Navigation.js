import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import PokedexNavigation from "./PokedexNavigation";
import FavotiteNavigation from "./FavotiteNavigation";
import NavigationAccount from "./NavigationAccount";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Accounts"
        component={NavigationAccount}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Pokedex" component={PokedexNavigation} options={{
        tabBarIcon: () => renderPokeball(),
      }} />
      <Tab.Screen
        name="Favorites"
        component={FavotiteNavigation}
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