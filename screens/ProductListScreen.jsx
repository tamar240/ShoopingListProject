
import React, { useState, useEffect } from 'react';
import {
  View, Text, FlatList, TextInput, Button, StyleSheet, I18nManager
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductItem from '../components/ProductItem';

export default function ProductListScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const loadData = async () => {
    const data = await AsyncStorage.getItem('PRODUCTS');
    if (data) setProducts(JSON.parse(data));
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('PRODUCTS', JSON.stringify(products));
  }, [products]);

  const addProduct = () => {
    if (name.trim() === '') return;
    const newProduct = {
      id: Date.now().toString(),
      name,
      description: desc,
      done: false,
    };
    setProducts([...products, newProduct]);
    setName('');
    setDesc('');
  };

  const toggleDone = (id) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, done: !p.done } : p
    ));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 רשימת קניות</Text>

      <TextInput
        style={styles.input}
        placeholder="שם מוצר"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
        textAlign={I18nManager.isRTL ? 'right' : 'left'}
      />
      <TextInput
        style={styles.input}
        placeholder="תיאור (אופציונלי)"
        placeholderTextColor="#888"
        value={desc}
        onChangeText={setDesc}
        textAlign={I18nManager.isRTL ? 'right' : 'left'}
      />
      <View style={styles.buttonContainer}>
        <Button title="➕ הוסף מוצר" onPress={addProduct} color="#4CAF50" />
      </View>

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onToggle={() => toggleDone(item.id)}
            onDelete={() => deleteProduct(item.id)}
            onView={() => navigation.navigate('ProductDetail', { product: item })}
          />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
    textAlign: 'right',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
  buttonContainer: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
