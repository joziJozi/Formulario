import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home/Home';
import ParceriaStack from './screens/Parcerias/ParceriaStack';
import EventosStack from './screens/Eventos/EventosStack';
import InscreverStack from './screens/Inscrever/InscreverStack';
import TurismoStack from './screens/Turismo/TurismoStack';
import EdusescStack from './screens/Edusesc/EdusescStack';




const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
   <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home" 
              component={Home}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="home" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Increva-se" 
              component={InscreverStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="pencil" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Turismo" 
              component={TurismoStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="bus" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Parceria" 
              component={ParceriaStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="human-handsup" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Eventos" 
              component={EventosStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="calendar" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Edusesc" 
              component={EdusescStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="calculator" size={26} />
                ),
              }}
            />
           
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}


