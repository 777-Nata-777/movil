import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getAllProducts } from '../services/mockData';
import ProductCard from '../components/ProductCard';

function ProductsScreen({ navigation }) {
  const allProducts = getAllProducts();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos los Productos</Text>
      <FlatList
        data={allProducts}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('Details', { productId: item.id })}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProductsScreen;