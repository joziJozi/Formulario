import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import inscreverValidator from '../../validators/inscreverValidator'
import { mask } from 'remask'

const InscreverForm = ({ navigation, route }) => {



  let inscrever = {
    nome: '',
    idade: '',
    cpf: '',
    telefone: '',
    esporte: ''
  }

  const [selectedLanguage, setSelectedLanguage] = useState();

  const id = route.params?.id

  if (id >= 0) {

    inscrever = route.params?.inscrever
  }

  function salvar(dados) {

    AsyncStorage.getItem('inscrevers').then(resultado => {
      const inscrevers = JSON.parse(resultado) || []
      if (id >= 0) {
        inscrevers.splice(id, 1, dados)
      } else {
        inscrevers.push(dados)
      }
      console.log(inscrevers)

      AsyncStorage.setItem('inscrevers', JSON.stringify(inscrevers))

      navigation.goBack()
    })


  }


  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text >Inscreva-se</Text>
        <Formik
          initialValues={inscrever}
          validationSchema={inscreverValidator}
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
                label='Idade'
                mode='outlined'
                onChangeText={handleChange('idade')} value={values.idade}></TextInput>
              {(errors.idade && touched.idade) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.idade}</Text>
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
                label='Telefone'
                mode='outlined'
                onChangeText={(value)=>{setFieldValue('telefone', mask(value, '(99)99999-9999') )}}
                value={values.telefone}></TextInput>
              {(errors.telefone && touched.telefone) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.telefone}</Text>
              }

              <Picker
                style={{padding:10, marginTop:10}}
                selectedValue={values.esporte}
                onValueChange={handleChange('esporte')}>
                <Picker.Item label="esporte" value="" />
                <Picker.Item label="Natação" value="Natação" />
                <Picker.Item label="Futebol" value="Futebol" />
                <Picker.Item label="Musculação" value="Musculação" />
              </Picker>
                  {(errors.esporte && touched.esporte) &&
                    <Text style={{ marginTop: 10, color: 'red' }}>{errors.esporte}</Text>
                  }

              <Button onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>

      </ScrollView>
    </>
  )
}

export default InscreverForm