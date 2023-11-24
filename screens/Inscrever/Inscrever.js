import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, {useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'


  const Inscrever = ({navigation}) => {

  const [inscrever, setInscrever] = useState([])
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
    AsyncStorage.getItem('inscrevers').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setInscrever(resultado)
    })
  }

  function confirmarExclusao(id){
    setidExcluir(id)
    setVisible(true)
  }

  function excluir(id) {
    inscrever.splice(idExcluir, 1)
    AsyncStorage.setItem('inscrevers', JSON.stringify(inscrever))
    carregarDados()
    setVisible(false)
  }

  return (
    <>
    <ScrollView style={{padding:15}}>
    <Text style={{marginBottom:10}}>Inscreva-se</Text>
    {inscrever.map((item, i)=>(
     <Card key={i} mode='outlined' style={{marginBottom:10}}>
      <Card.Content>
      <Text variant="bodyMedium">Nome:{item.nome}</Text>
      <Text variant="bodyMedium">Idade:{item.idade}anos</Text>
      <Text variant="bodyMedium">CPF:{item.cpf}</Text>
      <Text variant="bodyMedium">Telefone:{item.telefone}</Text>
      <Text variant="bodyMedium">Esporte:{item.esporte}</Text>
    </Card.Content>
    <Card.Actions>
      <IconButton icon='account-edit' iconColor='blue'onPress={() => navigation.push('Inscrever - Form', {id: i, inscrever: item})}></IconButton>
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
    onPress={() => navigation.push('Inscrever - Form')}
  />
    </>
  )
}

export default Inscrever