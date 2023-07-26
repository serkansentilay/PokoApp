import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './screens/Detail/Detail';
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={{ colors: { card: "red", background: '#fff', text: '#fff', primary: '#fff' } }}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} options={({ route }) => ({ title: route.params.key })} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})