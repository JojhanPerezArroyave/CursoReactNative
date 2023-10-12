import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Header(props) {
    const { name, order, image, type } = props;
    const color = getColorByPokemonType(type);

    const bgStyle = [{ backgroundColor: color, ...styles.bg }];

    return (
        <>
            <View style={bgStyle}></View>
            <SafeAreaView style={styles.content}>

                <View style={styles.header}>
                    <Text style={styles.name}>{capitalize(name)}</Text>
                    <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
                </View>

                <View style={styles.contentImage}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({

    bg: {
        width: "100%",
        height: 400,
        position: "absolute",
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }],
    },

    content: {
        marginHorizontal: 30,
        marginVertical: 20
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
    },

    name: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },

    order: {
        fontSize: 20,
        color: "white",
    },

    contentImage: {
        flex1: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 30,
    },

    image: {
        width: 250,
        height: 250,
        resizeMode: "contain",
    },
});
