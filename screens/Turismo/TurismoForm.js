import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { mask } from 'remask'
import turismoValidator from '../../validators/turismoValidator'
const TurismoForm = ({ navigation, route }) => {



  let turismo = {
    nome: '',
    tipo: '',
    dificuldade: '',
    data: '',
    horario: '',

  }

  const [selectedLanguage, setSelectedLanguage] = useState();

  const id = route.params?.id

  if (id >= 0) {

    turismo = route.params?.turismo
  }

  function salvar(dados) {

    AsyncStorage.getItem('turismos').then(resultado => {
      const turismos = JSON.parse(resultado) || []
      if (id >= 0) {
        turismos.splice(id, 1, dados)
      } else {
        turismos.push(dados)
      }
      console.log(turismos)

      AsyncStorage.setItem('turismos', JSON.stringify(turismos))

      navigation.goBack()
    })


  }


  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text >Turismo</Text>
        <Formik
          initialValues={turismo}
          validationSchema={turismoValidator}
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
                label='Tipo'
                mode='outlined'
                onChangeText={handleChange('tipo')} value={values.tipo}></TextInput>
              {(errors.tipo && touched.tipo) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.tipo}</Text>
              }

              <Picker
                style={{ padding: 10, marginTop: 10 }}
                selectedValue={values.dificuldade}
                onValueChange={handleChange('dificuldade')}>
                <Picker.Item label="Dificuldade" value="" />
                <Picker.Item label="Fácil" value="Fácil" />
                <Picker.Item label="Moderado" value="Moderado" />
                <Picker.Item label="Difícil" value="Difícil" />
              </Picker>
              {(errors.dificuldade && touched.dificuldade) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.dificuldade}</Text>
              }

              <TextInput style={{ marginTop: 10 }}
                label='Data'
                mode='outlined'
                onChangeText={(value)=>{setFieldValue('data', mask(value, '99/99/9999') )}}
                value={values.data}></TextInput>
              {(errors.data && touched.data) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.data}</Text>
              }
              <TextInput style={{ marginTop: 10 }}
                label='Horário'
                mode='outlined'
                onChangeText={(value)=>{setFieldValue('horario', mask(value, '99:99') )}}
                value={values.horario}
                ></TextInput>
              {(errors.horario && touched.horario) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.horario}</Text>
              }
              <Button onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>

      </ScrollView>
    </>
  )
}

export default TurismoForm