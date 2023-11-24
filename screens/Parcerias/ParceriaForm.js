import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { useState } from 'react'
import parceriaValidator from '../../validators/parceriaValidator'
import { mask } from 'remask'

const ParceriaForm = ({ navigation, route }) => {



  let parceria = {
    nome: '',
    cnpj: '',
    proprietario: '',
    razaosocial: '',
    email: '',
  }

  const [selectedLanguage, setSelectedLanguage] = useState();

  const id = route.params?.id

  if (id >= 0) {

    parceria = route.params?.parceria
  }

  function salvar(dados) {

    AsyncStorage.getItem('parcerias').then(resultado => {
      const parcerias = JSON.parse(resultado) || []
      if (id >= 0) {
        parcerias.splice(id, 1, dados)
      } else {
        parcerias.push(dados)
      }
      console.log(parcerias)

      AsyncStorage.setItem('parcerias', JSON.stringify(parcerias))

      navigation.goBack()
    })


  }


  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text >Parceria</Text>
        <Formik
          initialValues={parceria}
          validationSchema={parceriaValidator}
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
                label='cnpj'
                mode='outlined'
                onChangeText={(value)=>{setFieldValue('cnpj', mask(value, '99.999.999/9999-99') )}}
                value={values.cnpj}></TextInput>
              {(errors.cnpj && touched.cnpj) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.cnpj}</Text>
              }
              <TextInput style={{ marginTop: 10 }}
                label='proprietario'
                mode='outlined'
                onChangeText={handleChange('proprietario')} value={values.proprietario}></TextInput>
              {(errors.proprietario && touched.proprietario) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.proprietario}</Text>
              }
              <TextInput style={{ marginTop: 10 }}
                label='razaosocial'
                mode='outlined'
                onChangeText={handleChange('razaosocial')} value={values.razaosocial}></TextInput>
              {(errors.razaosocial && touched.razaosocial) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.razaosocial}</Text>
              }
              <TextInput style={{ marginTop: 10 }}
                label='email'
                mode='outlined'
                onChangeText={handleChange('email')} value={values.email}></TextInput>
              {(errors.email && touched.email) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.email}</Text>
              }

             

              <Button onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>

      </ScrollView>
    </>
  )
}

export default ParceriaForm