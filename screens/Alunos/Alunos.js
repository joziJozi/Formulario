import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, {useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

  const Alunos = ({navigation}) => {

  const [aluno, setAluno] = useState([])
  const [idExcluir, setidExcluir] = useState(0)

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  useFocusEffect(
    React.useCallback(() => {
      carregarDados()
    }, [])
  );

  function carregarDados() {
    AsyncStorage.getItem('alunos').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setAluno(resultado)
    })
  }

  function confirmarExclusao(id){
    setidExcluir(id)
    setVisible(true)
  }

  function excluir(id) {
    aluno.splice(idExcluir, 1)
    AsyncStorage.setItem('alunos', JSON.stringify(aluno))
    carregarDados()
    setVisible(false)
  }

  return (
    <>
    <ScrollView style={{padding:15}}>
    <Text style={{marginBottom:10}}>Alunos</Text>
    {aluno.map((item, i)=>(
     <Card key={i} mode='outlined' style={{marginBottom:10}}>
      <Card.Content>
      <Text variant="titleLarge">{item.nome}</Text>
      <Text variant="bodyMedium">CPF:{item.cpf}.</Text>
      <Text variant="bodyMedium">Matricula:{item.matricula}.</Text>
      <Text variant="bodyMedium">E-mail:{item.email}.</Text>
      <Text variant="bodyMedium">Telefone:{item.telefone}.</Text>
      <Text variant="bodyMedium">CEP:{item.cep}.</Text>
      <Text variant="bodyMedium">Logradouro:{item.logradouro}.</Text>
      <Text variant="bodyMedium">Complemento:{item.complemento}.</Text>
      <Text variant="bodyMedium">Número:{item.numero}.</Text>
      <Text variant="bodyMedium">Bairro:{item.bairro}.</Text>
    </Card.Content>
    <Card.Actions>
      <IconButton icon='account-edit' iconColor='blue'onPress={() => navigation.push('Alunos - Form', {id: i, aluno: item})}></IconButton>
      <IconButton icon='trash-can-outline' iconColor='red'onPress={()=>confirmarExclusao(i)}></IconButton>
    </Card.Actions>
      </Card>
    ))}
    <Portal>
          <Dialog visible={visible} onDismiss={()=>{}}>
            <Dialog.Title>Atenção</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">Deseja realmente excluir o registo?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={excluir}>Sim</Button>
              <Button onPress={hideDialog}>Não</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
</ScrollView>
<FAB
    icon="plus"
    size='small'
    style={{ position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,}}
    onPress={() => navigation.push('Alunos - Form')}
  />
    </>
  )
}

export default Alunos