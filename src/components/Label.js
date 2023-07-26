import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Label = ({ title, data }) => {
    console.log("data", data)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.labelContainer}>
                {data.map((item, id) => <Text id={id} style={styles.label}>{item.name}</Text>)}
            </View>

        </View>
    )
}

export default Label

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 20
    },
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    labelContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        flexWrap: 'wrap'
    },
    label: {
        color: 'black',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#f1f1f1',
        borderColor: '#999',
        marginRight: 4,
        marginBottom: 4,
        padding: 5
    }
})