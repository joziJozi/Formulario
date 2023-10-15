import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'

  const Alunos = ({navigation}) => {

  const [aluno, setAluno] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('alunos').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setAluno(resultado)
    })
}, [])


  return (
    <>
    <Text style={{marginBottom:10}}>Alunos</Text>
    <Button 
    icon='plus'
    mode='contained'
    onPress={()=>navigation.push('Alunos - Form')}
    style={{marginBottom:10}}
    >
    Novo
    </Button>
    {aluno.map(item=>(
     <Card style={{marginBottom: 10}}>
      <Text>{item.nome}</Text>
      </Card>
    ))}

    </>
  )
}

export default Alunos