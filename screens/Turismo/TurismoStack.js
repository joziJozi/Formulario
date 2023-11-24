import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Turismo from './Turismo';
import TurismoForm from './TurismoForm';

const Stack = createNativeStackNavigator();

const TurismoStack = () => {
  return (
    <>
     <Stack.Navigator>
                <Stack.Screen name="Turismo" component={Turismo} options={{ title: 'Turismo' }} />
                <Stack.Screen name="Turismo - Form" component={TurismoForm} options={{ title: 'Turismo - Form' }} />
    </Stack.Navigator>
    </>
  )
}

export default TurismoStack