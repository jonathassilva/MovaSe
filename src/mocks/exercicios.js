
const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// const exercicios = {
//     title: "Caminhar, simplesmente...",
//     distance: `${generateRandomNumber(1, 1000)} steps`,
//     evaluate: generateRandomNumber(1, 5),
// }

const exercicios = {
    title: 'Exercícios disponíveis',
    exercises: [
        {
            id: 1,
            exercise: "Andar normalmente",
            distance: `${generateRandomNumber(1, 1000)} steps`,
            evaluate: generateRandomNumber(1, 5),
        },
        {
            id: 2,
            exercise: "Subida/Descida de escada",
            distance: `${generateRandomNumber(1, 1000)} steps`,
            evaluate: generateRandomNumber(1, 5),
        },
    ]

}

export default exercicios;