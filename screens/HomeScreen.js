import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { getFeaturedProducts } from '../services/mockData';
import ProductCard from '../components/ProductCard';

function HomeScreen({ navigation }) {
  const featuredProducts = getFeaturedProducts();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos Destacados</Text>
      <FlatList
        data={featuredProducts}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('Details', { productId: item.id })}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <Button
        title="Ver todos los productos"
        onPress={() => navigation.navigate('Products')}
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

export default HomeScreen;