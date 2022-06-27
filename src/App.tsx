import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';//pilha de navegacao, uma tela se soprepoe a outra
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import React from 'react';
import Login from './pages/login';
import Home from './pages/home';
import Categorias from './pages/categoria';

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <TabNavigation.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#0c1da2', borderBottomWidth: 0 }
    }}>
      <TabNavigation.Screen name='HomeTabScreen' component={Home} />
      <TabNavigation.Screen name='CategoriasTabScreen' component={Categorias} />
    </TabNavigation.Navigator>
  );
}

const StackNavigation = createNativeStackNavigator();


export default () => {
  return (
    <NavigationContainer /*engloba todas as navegacoes*/>
   <StackNavigation.Navigator /*container dos itens q vao ser definidos pra navegar*/>
        <StackNavigation.Screen /* */
          name='Login'
          component={Login}
        />
        <StackNavigation.Screen
          name='Home'
          component={BottomTabNavigator}
        />
        <StackNavigation.Screen
          name='Categorias'
          component={Categorias}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};