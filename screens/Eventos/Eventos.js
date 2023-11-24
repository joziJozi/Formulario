import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, {useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'


  const Eventos = ({navigation}) => {

  const [evento, setEvento] = useState([])
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
    AsyncStorage.getItem('eventos').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setEvento(resultado)
    })
  }

  function confirmarExclusao(id){
    setidExcluir(id)
    setVisible(true)
  }

  function excluir(id) {
    evento.splice(idExcluir, 1)
    AsyncStorage.setItem('eventos', JSON.stringify(evento))
    carregarDados()
    setVisible(false)
  }

  return (
    <>
    <ScrollView style={{padding:15}}>
    <Text style={{marginBottom:10}}>Eventos</Text>
    {evento.map((item, i)=>(
     <Card key={i} mode='outlined' style={{marginBottom:10}}>
      <Card.Content>
      <Text variant="bodyMedium">Nome do Evento:{item.nome}</Text>
      <Text variant="bodyMedium">Data Inicio:{item.datainicio}</Text>
      <Text variant="bodyMedium">Data Fim:{item.datafim}</Text>
      <Text variant="bodyMedium">Descrição do Evento:{item.descricao}</Text>
      <Text variant="bodyMedium">Patrocinador:{item.patrocinador}</Text>
    </Card.Content>
    <Card.Actions>
      <IconButton icon='account-edit' iconColor='blue'onPress={() => navigation.push('Eventos - Form', {id: i, evento: item})}></IconButton>
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
    onPress={() => navigation.push('Eventos - Form')}
  />
    </>
  )
}

export default Eventos