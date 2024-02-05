import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import logo from './../../../assets/logo.png'
import { loadDataTopo } from "../../../services/loadData";

class Topo extends React.Component {
    state = {
        topo: {
            welcome: '',
            description: ''
        }
    }

    updateTopo() {
        const retorno = loadDataTopo();
        //ponto chave
        this.setState({ topo: retorno })
    }

    componentDidMount() {
        this.updateTopo()
    }

    render() {
        return (
            <View style={style.topo}>
                <Image source={logo} style={style.logo}></Image>
                <Text style={style.welcome}>{this.state.topo.welcome}</Text>
                <Text style={style.description}>{this.state.topo.description}</Text>
            </View >
        )
    }

}

const style = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 16
    },
    logo: {
        width: 60,
        height: 60
    },
    welcome: {
        marginTop: 20,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: "#464646"
    },
    description: {
        fontSize: 16,
        lineHeight: 28,
        color: "#A3A3A3"
    }
});

export default Topo;