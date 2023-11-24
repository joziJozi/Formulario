import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { useState } from 'react'
import { mask } from 'remask'
import edusescValidator from '../../validators/edusescValidator'
const EdusescForm = ({ navigation, route }) => {



  let edusesc = {
    unidade: '',
    aluno: '',
    cpf: '',
    matricula: '',
    telefone: '',
    
  }

  const [selectedLanguage, setSelectedLanguage] = useState();

  const id = route.params?.id

  if (id >= 0) {

    edusesc = route.params?.edusesc
  }

  function salvar(dados) {

    AsyncStorage.getItem('edusesc').then(resultado => {
      const edusesc = JSON.parse(resultado) || []
      if (id >= 0) {
        edusesc.splice(id, 1, dados)
      } else {
        edusesc.push(dados)
      }
      console.log(edusesc)

      AsyncStorage.setItem('edusesc', JSON.stringify(edusesc))

      navigation.goBack()
    })


  }


  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text >Edusesc</Text>
        <Formik
          initialValues={edusesc}
          validationSchema={edusescValidator}
          onSubmit={values => salvar(values)}
        >
          {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
            <View>

              <TextInput style={{ marginTop: 10 }}
                label='Unidade Escolar'
                mode='outlined'
                onChangeText={handleChange('unidade')}
                 value={values.unidade}></TextInput>
              {(errors.unidade && touched.unidade) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.unidade}</Text>
              }

              <TextInput style={{ marginTop: 10 }}
                label='Aluno'
                mode='outlined'
                onChangeText={handleChange('aluno')} value={values.aluno}></TextInput>
              {(errors.aluno && touched.aluno) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.aluno}</Text>
              }
              <TextInput style={{ marginTop: 10 }}
                label='CPF'
                mode='outlined'
                onChangeText={(value)=>{setFieldValue('cpf', mask(value, '999.999.999-99') )}}
                value={values.cpf}></TextInput>
              {(errors.cpf && touched.cpf) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.cpf}</Text>
              }
              <TextInput style={{ marginTop: 10 }}
                label='Matricula'
                mode='outlined'
                onChangeText={handleChange('matricula')} value={values.matricula}></TextInput>
              {(errors.matricula && touched.matricula) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.matricula}</Text>
              }
              <TextInput style={{ marginTop: 10 }}
                label='Telefone'
                mode='outlined'
                onChangeText={(value)=>{setFieldValue('telefone', mask(value, '(99)99999-9999') )}}
                value={values.telefone}></TextInput>
              {(errors.telefone && touched.telefone) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.telefone}</Text>
              }

              

              <Button onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>

      </ScrollView>
    </>
  )
}

export default EdusescForm