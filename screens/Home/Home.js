
import React from 'react'
import Chart from 'react-google-charts';
import { ImageBackground, ScrollView } from 'react-native'
import { Card, Text } from 'react-native-paper'


const data = [
    ["Não praticam", "Praticam"],
    ["Não praticam", 62, 1]
    ["Praticam", 37, 9]
];

const options = {
    title: "Porcentagem dos brasileiros que praticaram esportes",
    chartArea: { width: "50%" },
    hAxis: {
        title: "porcentagem",
        minValue: 0,
    },
    vAxis: {
        title: "porcentagem",
    },
};

function App() {
    return (
        <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}




const Home = () => {



    return (
        <>
            <ScrollView style={{ padding: 15 }}>

                <ImageBackground
                    source={{ uri: 'https://i.pinimg.com/originals/bc/9c/c8/bc9cc868c6f6968a46014e24217a1b94.jpg' }}
                    style={{ width: 400, height: 400 }}
                >

                <Text variant='titleLarge' style={{ textAlign: 'center', color: 'black', padding: 15 }}>Sesc</Text>

                <Card style={{ marginBottom: 15 }}>
                <ImageBackground
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrT2fjvUImZsm88Jlg8-GdQQwOu3JPQUrylED84DvfqQ&s' }}
                    style={{ width: 400, height: 400 }}
                >
                    <Card.Content>
                        <Text variant="titleLarge" style={{ textAlign: 'center' }}>Sobre nós</Text>
                        <Text variant="bodyMedium">Com a missão de contribuir para o bem-estar e a melhoria da qualidade de vida dos empregados
                            do setor de Comércio de Bens, Serviços e Turismo, o Serviço Social do Comércio
                            – Sesc promove atendimento nas áreas de educação, saúde, esporte, alimentação, cultura,
                            ação social, turismo e lazer. </Text>
                <Card style={{ marginBottom: 15 }}>
                    <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzK7wk2Xkl4qlaitVlcJJMA5QNB8cYjHVvJw&usqp=CAU' }} />
                </Card>
                    </Card.Content>
                    </ImageBackground>
                </Card>


                <Card>
                <ImageBackground
                    source={{ uri: 'https://i.pinimg.com/originals/bc/9c/c8/bc9cc868c6f6968a46014e24217a1b94.jpg' }}
                    style={{ width: 400, height: 400 }}
                >
                    <Text variant="titleLarge" style={{ textAlign: 'center' }}>Percentual de pessoas que praticam esportes</Text>
                    <Chart
                        chartType="PieChart"
                        data={[["City", "2010 Population", "2000 Population"],
                        ["Não Praticam", 62, 1],
                        ["Praticam", 37, 9],]}
                        width="100%"
                        height="400px"
                        legendToggle
                    />
                    </ImageBackground>
                </Card>
                </ImageBackground>
            </ScrollView>
        </>
    )
}

export default Home