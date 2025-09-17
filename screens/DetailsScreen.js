import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { getProductById } from '../services/mockData';

function DetailsScreen({ route }) {
  const { productId } = route.params;
  const product = getProductById(productId);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Producto no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Añadir al carrito" onPress={() => { /* Lógica para añadir al carrito */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default DetailsScreen;