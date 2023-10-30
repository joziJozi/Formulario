import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import cursoValidator from '../../validators/cursoValidator'
import { mask } from 'remask'

const CursosForm = ({ navigation, route }) => {
  


  let curso = {
    nome:'',
    duracao:'',
    modalidade:''
  }

  const id = route.params?.id

  if(id>= 0){

   curso = route.params?.curso 
  }


// const [values, setDados] = useState(curso)

//function handlechange(campo) {
// setDados({ ...values, [campo]: valor })
// }

  function salvar(dados) {

    AsyncStorage.getItem('cursos').then(resultado => {
      const cursos = JSON.parse(resultado) || []
      if (id >= 0) {
        cursos.splice(id, 1, dados)
      } else {
        cursos.push(dados)
      }
      console.log(cursos)

      AsyncStorage.setItem('cursos', JSON.stringify(cursos))

      navigation.goBack()
    })


  }


  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text >Formulário de Curso</Text>
        <Formik
          initialValues={curso}
          validationSchema={cursoValidator}
          onSubmit={values => salvar(values)}
        >
          {({values, handleChange, handleSubmit, errors, touched, setFieldValue}) => (
            <View>
              <TextInput style={{ marginTop: 10 }}
              label='CPF'
              mode='outlined'
              value={values.cpf}
              onChangeText={(value)=>{setFieldValue('cpf', mask (value, '999.999.999-99'))}}></TextInput>

              <TextInput style={{ marginTop: 10 }}
              label='Nome'
              mode='outlined'
              onChangeText={ handleChange('nome')} value={values.nome}></TextInput>
              {(errors.nome && touched.nome) && 
              <Text style={{marginTop:10, color:'red'}}>{errors.nome}</Text>
              }

              <TextInput style={{ marginTop: 10 }}
              label='Duração'
              mode='outlined'
              onChangeText={ handleChange('duracao')} value={values.duracao}></TextInput>
              {(errors.duracao && touched.duracao) && 
              <Text style={{marginTop:10, color:'red'}}>{errors.duracao}</Text>
              }

              <TextInput style={{ marginTop: 10 }}
              label='Modalidade'
              mode='outlined'
              onChangeText={ handleChange('modalidade')} value={values.modalidade}></TextInput>
              {(errors.modalidade && touched.modalidade) && 
              <Text style={{marginTop:10, color:'red'}}>{errors.modalidade}</Text>
              }

              <Button onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>

      </ScrollView>
    </>
  )
}

export default CursosForm