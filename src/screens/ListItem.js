import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const ListItem = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container}
            onPress={() =>
                navigation.push("Detail",
                    {
                        key: item.key,
                        sprite: item.sprite
                    })}>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={{ uri: item.sprite }}
            />
            <Text style={styles.name}>{item.key}</Text>
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#f1f1f1"
    },
    image: {
        height: 100,
        width: 100
    },
    name: {
        fontSize: 24,
        marginLeft: 10,
        color: 'black'
    }
})