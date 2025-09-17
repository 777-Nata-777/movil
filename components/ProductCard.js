import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 150,
  },
  name: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 5,
    color: 'green',
  },
});

export default ProductCard;