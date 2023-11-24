import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import cursoValidator from '../../validators/cursoValidator'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { mask } from 'remask'
import eventosValidator from '../../validators/eventosValidator'

const EventosForm = ({ navigation, route }) => {



  let evento = {
    nome: '',
    datainicio: '',
    datafim: '',
    descricao: '',
    patrocinador: '',
  }

  const [selectedLanguage, setSelectedLanguage] = useState();

  const id = route.params?.id

  if (id >= 0) {

    evento = route.params?.evento
  }

  function salvar(dados) {

    AsyncStorage.getItem('eventos').then(resultado => {
      const eventos = JSON.parse(resultado) || []
      if (id >= 0) {
        eventos.splice(id, 1, dados)
      } else {
        eventos.push(dados)
      }
      console.log(eventos)

      AsyncStorage.setItem('eventos', JSON.stringify(eventos))

      navigation.goBack()
    })


  }


  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text >Eventos</Text>
        <Formik
          initialValues={evento}
          validationSchema={eventosValidator}
          onSubmit={values => salvar(values)}
        >
          {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
            <View>

              <TextInput style={{ marginTop: 10 }}
                label='Nome'
                mode='outlined'
                onChangeText={handleChange('nome')}
                 value={values.nome}></TextInput>
              {(errors.nome && touched.nome) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.nome}</Text>
              }

              <TextInput style={{ marginTop: 10 }}
                label='Data Inicio'
                mode='outlined'
                onChangeText={(value)=>{setFieldValue('datainicio', mask(value, '99/99/9999') )}}
                value={values.datainicio}
                ></TextInput>
              {(errors.datainicio && touched.datainicio) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.datainicio}</Text>
              }
              <TextInput style={{ marginTop: 10 }}
                label='Data Fim'
                mode='outlined'
                onChangeText={(value)=>{setFieldValue('datafim', mask(value, '99/99/9999') )}}
                value={values.datafim}></TextInput>
              {(errors.datafim && touched.datafim) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.datafim}</Text>
              }
              <TextInput style={{ marginTop: 10 }}
                label='Descrição do Evento'
                mode='outlined'
                onChangeText={handleChange('descricao')} value={values.descricao}></TextInput>
              {(errors.descricao && touched.descricao) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.descricao}</Text>
              }
              <TextInput style={{ marginTop: 10 }}
                label='Patrocinador'
                mode='outlined'
                onChangeText={handleChange('patrocinador')} value={values.patrocinador}></TextInput>
              {(errors.patrocinador && touched.patrocinador) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.patrocinador}</Text>
              }

              

              <Button onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>

      </ScrollView>
    </>
  )
}

export default EventosForm