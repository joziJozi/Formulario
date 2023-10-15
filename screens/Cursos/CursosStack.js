import React from 'react'
import Cursos from './Cursos';
import CursosForm from './CursosForm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CursosStack = () => {
  return (
    <>
     <Stack.Navigator>
                <Stack.Screen name="Cursos" component={Cursos} options={{ title: 'Cursos' }} />
                <Stack.Screen name="Cursos - Form" component={CursosForm} options={{ title: 'Cursos - Form' }} />
    </Stack.Navigator>
    </>
  )
}

export default CursosStack