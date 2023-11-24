import React from 'react'
import Eventos from './Eventos';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventosForm from './EventosForm';

const Stack = createNativeStackNavigator();

const EventosStack = () => {
  return (
    <>
     <Stack.Navigator>
                <Stack.Screen name="Eventos" component={Eventos} options={{ title: 'Eventos' }} />
                <Stack.Screen name="Eventos - Form" component={EventosForm} options={{ title: 'Eventos - Form' }} />
    </Stack.Navigator>
    </>
  )
}

export default EventosStack