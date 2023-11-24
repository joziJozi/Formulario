import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InscreverForm from './InscreverForm';
import Inscrever from './Inscrever';

const Stack = createNativeStackNavigator();

const InscreverStack = () => {
  return (
    <>
     <Stack.Navigator>
                <Stack.Screen name="Inscrever" component={Inscrever} options={{ title: 'Inscrever' }} />
                <Stack.Screen name="Inscrever - Form" component={InscreverForm} options={{ title: 'Inscrever - Form' }} />
    </Stack.Navigator>
    </>
  )
}

export default InscreverStack