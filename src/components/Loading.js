import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.loading}>Loading...</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    loading: {
        fontSize: 22,
        color: 'black'
    }
})