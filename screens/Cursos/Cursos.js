import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, Card, Divider, Text } from 'react-native-paper'

  const Cursos = ({navigation}) => {

  const [curso, setCurso] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('cursos').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setCurso(resultado)
    })
}, [])


  return (
    <>
    <Text style={{marginBottom:10}}>Cursos</Text>
    <Button 
    icon='plus'
    mode='contained'
    onPress={()=>navigation.push('Cursos - Form')}
    style={{marginBottom:10}}
    >
    Novo
    </Button>
    {curso.map(item=>(
     <Card style={{marginBottom: 10}}>
      <Text>{item.nome}</Text>
      </Card>
    ))}

    </>
  )
}

export default Cursos