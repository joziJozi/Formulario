import React from 'react'
import Parceria from './Parceria';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ParceriaForm from './ParceriaForm';

const Stack = createNativeStackNavigator();

const ParceriaStack = () => {
  return (
    <>
     <Stack.Navigator>
                <Stack.Screen name="Parceria" component={Parceria} options={{ title: 'Parceria' }} />
                <Stack.Screen name="Parceria - Form" component={ParceriaForm} options={{ title: 'Parceria - Form' }} />
    </Stack.Navigator>
    </>
  )
}

export default ParceriaStack