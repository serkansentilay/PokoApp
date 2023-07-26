import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import Loading from '../../components/Loading';
import { useQuery } from '@apollo/client';
import { POKEMONS_QUERY } from './queries';
import Label from '../../components/Label';
import Evolutions from '../../components/Evolutions';



const Detail = ({ route }) => {

    const { key, sprite } = route.params
    const { error, loading, data } = useQuery(POKEMONS_QUERY, {
        variables: {
            pokemon: key
        }
    })


    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Text style={styles.text}>Error</Text>
    }



    const { types, evolutions } = data.getPokemon



    return (
        <ScrollView>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={{ uri: sprite }}
            />
            <Text style={styles.text}>{key}</Text>
            <Label title="types" data={types} />

            <Evolutions data={evolutions} />

        </ScrollView>
    )
}

export default Detail

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 20
    },
    image: {
        height: 200,
        marginVertical: 20
    }
})