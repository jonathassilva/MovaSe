import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/Login';
import Home from './screens/Home';

const Stack = createStackNavigator();

function App() {
    return (
        <SafeAreaView>
            {/* <Login /> */}
            <Home />
        </SafeAreaView>

    );
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
    }
});
export default App;