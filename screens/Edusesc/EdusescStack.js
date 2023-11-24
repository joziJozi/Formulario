import React from 'react'
import Edusesc from './Edusesc';
import CursosForm from './EdusescForm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EdusescForm from './EdusescForm';

const Stack = createNativeStackNavigator();

const EdusescStack = () => {
  return (
    <>
     <Stack.Navigator>
                <Stack.Screen name="Edusesc" component={Edusesc} options={{ title: 'Edusesc' }} />
                <Stack.Screen name="Edusesc - Form" component={EdusescForm} options={{ title: 'Edusesc - Form' }} />
    </Stack.Navigator>
    </>
  )
}

export default EdusescStack