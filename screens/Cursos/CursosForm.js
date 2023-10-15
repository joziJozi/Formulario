import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'


const CursosForm = ({navigation}) => {

  const [dados, setDados] = useState({})

  function handlechange(valor, campo) {
    setDados({ ...dados, [campo]: valor })
  }

  function salvar() {

    AsyncStorage.getItem('cursos').then(resultado => {
      const cursos = JSON.parse(resultado) || []
      cursos.push (dados)
      console.log(cursos)
   
      AsyncStorage.setItem('cursos', JSON.stringify(cursos))
   
      navigation.goBack()
    })

   
  }

  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text >Formulário de Curso</Text>
        <TextInput style={{ marginTop: 10 }} label='Nome' mode='outlined' onChangeText={(valor) => handlechange(valor, 'nome')} value={dados.nome}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Duração' mode='outlined' onChangeText={(valor) => handlechange(valor, 'duracao')} value={dados.duracao}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Modalidade' mode='outlined' onChangeText={(valor) => handlechange(valor, 'modalidade')} value={dados.modalidade}></TextInput>
        <Button onPress={salvar}>Salvar</Button>
      </ScrollView>
    </>
  )
}

export default CursosForm