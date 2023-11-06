import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { Formik } from 'formik'
import disciplinaValidator from '../../validators/disciplinaValidator'

const DisciplinasForm = ({ navigation, route }) => {

  let disciplina = {
    nome: '',
    curso: ''
  }

  const [selectedLanguage, setSelectedLanguage] = useState();
  const id = route.params?.id

  if (id >= 0) {
    disciplina = route.params?.disciplina

  }

  //const [dados, setDados] = useState(disciplina)

  //function handlechange(valor, campo) {
  // setDados({ ...dados, [campo]: valor })
  // }

  function salvar(dados) {

    AsyncStorage.getItem('disciplinas').then(resultado => {
      const disciplinas = JSON.parse(resultado) || []
      if (id >= 0) {
        disciplinas.splice(id, 1, dados)
      } else {
        disciplinas.push(dados)
      }
      console.log(disciplinas)

      AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))

      navigation.goBack()
    })


  }

  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text >Formulário de Disciplinas</Text>
        <Formik
          initialValues={disciplina}
          validationSchema={disciplinaValidator}
          onSubmit={values => salvar(values)}
        >
          {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (

            <View>
              <TextInput style={{ marginTop: 10 }}
                label='Nome'
                mode='outlined'
                onChangeText={handleChange( 'nome')}
                value={values.nome}></TextInput>
              {(errors.nome && touched.nome) &&
                  <Text style={{ marginTop: 10, color: 'red' }}>{errors.nome}</Text>
              }

              <TextInput style={{ marginTop: 10 }}
                label='Curso'
                mode='outlined'
                onChangeText={handleChange( 'curso')}
                value={values.curso}></TextInput>
              {(errors.curso && touched.curso) &&
                  <Text style={{ marginTop: 10, color: 'red' }}>{errors.curso}</Text>
              }
              <Button onPress={handleSubmit}>Salvar</Button>
              
            </View>
          )}
        </Formik>
      </ScrollView>
    </>
  )
}

export default DisciplinasForm