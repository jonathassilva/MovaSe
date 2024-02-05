import React from "react";
import { View, StyleSheet, Button, TextInput, navigation } from "react-native";

const style = StyleSheet.create({
    login: {
        backgroundColor: "#FFABAB",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    },
    view: {
        backgroundColor: "#FFABAB",
        height: 800,
        position: "relative",
        width: 360
    },
    campoLogin: {
        backgroundColor: "#E6E6E6",
        height: 51,
        left: 18,
        position: "absolute",
        top: 400,
        width: 325
    },
    campoSenha: {
        backgroundColor: "#E6E6E6",
        height: 51,
        left: 18,
        position: "absolute",
        top: 513,
        width: 325,
    },
    overlapGroup: {
        borderRadius: 20,
        height: 51,
        left: 18,
        position: "absolute",
        top: 664,
        width: 325
    },
    botaoLogin: {
        backgroundColor: "#FF7070",
        borderRadius: 20,
        height: 51,
        left: 0,
        position: "absolute",
        top: 0,
        width: 325,
    },

});

export const LoginForm = () => {
    return (
        <View style={style.login}>
            <View style={style.view}>
                {/* <Image className="logo" alt="Logo" src="logo.png" /> */}
                <View style={style.campoLogin} />
                <TextInput style={style.campoSenha} />
                <View style={style.overlapGroup}>
                    <Button
                        title="Entrar"
                        style={style.botaoLogin}
                    />
                </View>
            </View>
        </View>
    );
};
