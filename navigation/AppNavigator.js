import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Products" component={ProductsScreen} options={{ title: 'Productos' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalles' }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Carrito' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;