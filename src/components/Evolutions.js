import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const Evolutions = ({ data }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Evolutions</Text>

            {!data && <Text style={styles.title}>
                The last stage of its evolution.
            </Text>}

            {data && data.map(item => (
                <TouchableOpacity
                    style={styles.listItem}
                    key={item.id}
                    onPress={() => navigation.push("Detail",
                        {
                            key: item.key,
                            sprite: item.sprite
                        })}
                >
                    <Image
                        resizeMode='contain'
                        source={{ uri: item.sprite }}
                        style={styles.image} />
                    <Text style={styles.name}>{item.species}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Evolutions

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'black'
    },
    container: { padding: 20 },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        height: '80',
        alignItems: 'center'
    },
    image: {
        height: 60,
        width: 60,
        marginRight: 15
    },
    name: {
        fontSize: 18
    }
})