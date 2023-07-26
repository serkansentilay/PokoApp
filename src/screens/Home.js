import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ListItem from './ListItem';
import Loading from '../components/Loading';
import { useQuery } from '@apollo/client';
import { POKEMONS_QUERY } from './queries';


const Home = () => {
    const { error, loading, data } = useQuery(POKEMONS_QUERY)

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Text>Error</Text>
    }

    console.log(data)


    return (
        <FlatList
            data={data.getAllPokemon}
            renderItem={({ item }) => <ListItem item={item} />}
            keyExtractor={item => item.key}
        />


    )
}

export default Home

const styles = StyleSheet.create({
    text: { color: 'black' }
})