import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create(
  {
    letraGordita: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    letra: {
      fontSize: 20,
    },
    view: {
      padding: 10
    },
    informacion: {
      textAlign: 'center',
      padding: 10,
      fontWeight: 'bold',
      fontSize: 20,

    }
  }
)

//stack para pulsar para la navegacion
//inicio pantalla STACK
function ListadoStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Listado" component={ListadoPantalla}
        options={{
          title: 'Listado de usuarios',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
      <HomeStack.Screen name="Detalles" component={DetalleUsuarioPantalla}
        options={{
          title: 'Detalle de usuario',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
    </HomeStack.Navigator>
  );
}




//PANTALLA FEED
function ListadoPantalla({ navigation }) {
  return (

    <View style={styles.view}>
      <Text style={styles.letra}
        onPress={() => navigation.navigate('Detalles', { nombre: 'Antonio Morlanes', edad: 34, sexo: 'Varón' })}>Antonio Morlanes</Text>
      <Text style={styles.letra}
        onPress={() => navigation.navigate('Detalles', { nombre: 'Margarita Fuentes', edad: 32, sexo: 'Mujer' })}>Margarita Fuentes</Text>
      <Text style={styles.letra}
        onPress={() => navigation.navigate('Detalles', { nombre: 'Manuel Machado', edad: 28, sexo: 'Varón' })}>Manuel Machado</Text>
    </View>
  );
}

//PANTALLA DETALLE USUARIO
function DetalleUsuarioPantalla({ route }) {
  const { nombre, edad, sexo } = route.params;
  return (
    <View style={styles.view}>
      <Text style={styles.letra}><Text style={styles.letraGordita}>Nombre: </Text>{nombre}</Text>
      <Text style={styles.letra}><Text style={styles.letraGordita}>Edad: </Text>{edad}</Text>
      <Text style={styles.letra}><Text style={styles.letraGordita}>Sexo: </Text>{sexo}</Text>
    </View>
  );
}

//PANTALLA INFORMACION
function InformacionPantalla() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.informacion}> Esta App te permite conocer en más profundidad las personas </Text>
    </View >
  );
}

function App() {
  //--------ELEMENTOS DE LA PANTALLA-------
  return (
    //tab para navegacion abajo

    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Informacion') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Listado') {
              iconName = focused ? 'ios-filter' : 'ios-filter-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
        })}
      >
        <Tab.Screen options={{ headerShown: false }} name="Listado" component={ListadoStackScreen}
        />
        <Tab.Screen options={{ headerShown: false }} name="Informacion" component={InformacionPantalla}
          options={{
            title: 'Información',
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }} />
      </Tab.Navigator>
    </NavigationContainer>


  )
}
export default App;