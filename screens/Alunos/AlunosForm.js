import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import alunoValidator from '../../validators/alunoValidator'
import { mask } from 'remask'



const AlunosForm = ({navigation, route}) => {
  
  let aluno = {
    nome: '',
    cpf: '',
    matricula: '',
    email: '',
    telefone: '',
    cep:'',
    logradouro: '',
    complemento: '',
    numero: '', 
    bairro: ''
  }

  const [selectedLanguage, setSelectedLanguage] = useState();

  const id = route.params?.id 
  
  if(id >= 0) {
     aluno = route.params?.aluno 
  }

  //const [dados, setDados] = useState(aluno)

  //function handlechange(valor, campo) {
  //  setDados({ ...dados, [campo]: valor })
 // }

  function salvar(dados) {

    AsyncStorage.getItem('alunos').then(resultado => {
      const alunos = JSON.parse(resultado) || []
      if(id>=0){
        alunos.splice(id, 1, dados)
      } else{
        alunos.push (dados)
      }
      console.log(alunos)
   
      AsyncStorage.setItem('alunos', JSON.stringify(alunos))
   
      navigation.goBack()
    })

   
  }

  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text >Formulário de Alunos</Text>
        <Formik
          initialValues={aluno}
          validationSchema={alunoValidator}
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
        onChangeText={handleChange('matricula')}
        value={values.matricula}></TextInput>
        {(errors.matricula && touched.matricula) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.matricula}</Text>
              }

        <TextInput style={{ marginTop: 10 }}
        label='E-mail'
        mode='outlined'
        onChangeText={(value)=>{setFieldValue('email', mask(value, 'username@gmail.com') )}}
        value={values.email}></TextInput>
        {(errors.email && touched.email) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.email}</Text>
              }

        <TextInput style={{ marginTop: 10 }}
        label='Telefone'
        mode='outlined'
        onChangeText={(value)=>{setFieldValue('telefone', mask(value, '(99)99999-9999') )}}
        value={values.telefone}></TextInput>
        {(errors.telefone && touched.telefone) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.telefone}</Text>
              }

        <TextInput style={{ marginTop: 10 }}
        label='CEP'
        mode='outlined'
        onChangeText={(value)=>{setFieldValue('cep', mask(value, '99.999-999') )}}
        value={values.cep}></TextInput>
        {(errors.cep && touched.cep) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.cep}</Text>
              }

        <TextInput style={{ marginTop: 10 }}
        label='Logradouro'
        mode='outlined'
        onChangeText={handleChange('logradouro')}
        value={values.logradouro}></TextInput>
        {(errors.logradouro && touched.logradouro) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.logradouro}</Text>
              }

        <TextInput style={{ marginTop: 10 }}
        label='Complemento'
        mode='outlined'
        onChangeText={ handleChange('complemento')}
        value={values.complemento}></TextInput>
        {(errors.complemento && touched.complemento) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.complemento}</Text>
              }

        <TextInput style={{ marginTop: 10 }}
        label='Numero'
        mode='outlined'
        onChangeText={ handleChange('numero')}
        value={values.numero}></TextInput>
        {(errors.numero && touched.numero) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.numero}</Text>
              }

        <TextInput style={{ marginTop: 10 }}
        label='Bairro'
        mode='outlined'
        onChangeText={ handleChange('bairro')}
        value={values.bairro}></TextInput>
        {(errors.bairro && touched.bairro) &&
                <Text style={{ marginTop: 10, color: 'red' }}>{errors.bairro}</Text>
              }

        <Button onPress={handleSubmit}>Salvar</Button>
        </View>
         )}
         </Formik>
      </ScrollView>
    </>
  )
}

export default AlunosForm