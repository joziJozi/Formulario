import React from 'react'
import Alunos from './Alunos';
import AlunosForm from './AlunosForm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const AlunosStack = () => {
  return (
    <>
     <Stack.Navigator>
                <Stack.Screen name="Alunos" component={Alunos} options={{ title: 'Alunos' }} />
                <Stack.Screen name="Alunos - Form" component={AlunosForm} options={{ title: 'Alunos - Form' }} />
    </Stack.Navigator>
    </>
  )
}

export default AlunosStack