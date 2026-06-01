import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PlayerScreen from '../screens/PlayerScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#1DB954',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'WaveMusic',
          }}
        />

        <Stack.Screen
          name="Cadastro"
          component={RegisterScreen}
          options={{
            title: 'Criar Conta',
          }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Início',
            headerBackVisible: false,
          }}
        />

        <Stack.Screen
          name="Favoritos"
          component={FavoritesScreen}
          options={{
            title: 'Músicas Favoritas',
          }}
        />

        <Stack.Screen
          name="Player"
          component={PlayerScreen}
          options={{
            title: 'Tocando Música',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}