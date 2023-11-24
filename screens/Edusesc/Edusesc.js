import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, {useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'


  const Edusesc = ({navigation}) => {

  const [edusesc, setEdusesc] = useState([])
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
    AsyncStorage.getItem('edusesc').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setEdusesc(resultado)
    })
  }

  function confirmarExclusao(id){
    setidExcluir(id)
    setVisible(true)
  }

  function excluir(id) {
    edusesc.splice(idExcluir, 1)
    AsyncStorage.setItem('edusesc', JSON.stringify(edusesc))
    carregarDados()
    setVisible(false)
  }

  return (
    <>
    <ScrollView style={{padding:15}}>
    <Text style={{marginBottom:10}}>Edusesc</Text>
    {edusesc.map((item, i)=>(
     <Card key={i} mode='outlined' style={{marginBottom:10}}>
      <Card.Content>
      <Text variant="bodyMedium">Unidade Escolar:{item.unidade}</Text>
      <Text variant="bodyMedium">Aluno:{item.aluno}</Text>
      <Text variant="bodyMedium">CPF:{item.cpf}</Text>
      <Text variant="bodyMedium">Matricula:{item.matricula}</Text>
      <Text variant="bodyMedium">Telefone:{item.telefone}</Text>
      
    </Card.Content>
    <Card.Actions>
      <IconButton icon='account-edit' iconColor='blue'onPress={() => navigation.push('Edusesc - Form', {id: i, edusesc: item})}></IconButton>
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
    onPress={() => navigation.push('Edusesc - Form')}
  />
    </>
  )
}

export default Edusesc