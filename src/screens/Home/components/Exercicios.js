import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { loadDataExercicios } from "../../../services/loadData";

export default function Exercicios() {
    const [title, setTitle] = useState('');
    const [data, setExerciseData] = useState([])

    useEffect(() => {
        const retorno = loadDataExercicios();
        setTitle(retorno.title);
        setExerciseData(retorno.exercises)
        console.log(retorno)
    }, []);

    const TitleList = () => {
        return <>
            <Text style={style.title}>{title}</Text>
        </>
    }

    return (
        <FlatList
            data={data}
            ListHeaderComponent={TitleList}
            keyExtractor={({ id }) => id}
            renderItem={({ item: { exercise } }) => <Text>{exercise}</Text>}
        />
    )

}

const style = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    }
})
