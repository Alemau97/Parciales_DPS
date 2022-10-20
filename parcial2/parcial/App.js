
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './screens/Home';
import { Calculadora } from './screens/Calculadora';
import { Conversor } from './screens/Conversor';
import { Tienda } from './screens/Tienda';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="home" size={25} color="black" />
            )
          }}
          />
        <Tab.Screen 
          name="Calculadora" 
          component={Calculadora} 
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="calculator" size={25} color="black" />
            )
          }}
          />
        <Tab.Screen 
          name="Conversor" 
          component={Conversor} 
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <MaterialIcons name="attach-money" size={25} color="black" />
            )
          }}
          />
        <Tab.Screen 
          name="Tienda" 
          component={Tienda} 
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <MaterialIcons name="store" size={25} color="black" />
            )
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

