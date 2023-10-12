import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { map, capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Type(props) {
  const { types } = props;

  return (
    <View style={styles.content}>
      {map(types, (type, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(type.type.name),
          }}
        >
          <Text>{capitalize(type.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },

  pill: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
