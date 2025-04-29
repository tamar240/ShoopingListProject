

// import React, { useState, useEffect } from 'react';
// import {
//   View, Text, FlatList, TextInput, Button, StyleSheet
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import ProductDetail from './ProductDetail'; // Ensure this path is correct

// export default function ProductListScreen({ navigation }) {
  
//   const [products, setProducts] = useState([]);
//   const [name, setName] = useState('');
//   const [desc, setDesc] = useState('');

//   useEffect(() => {
//     const loadData = async () => {
//       const data = await AsyncStorage.getItem('PRODUCTS');
//       if (data) setProducts(JSON.parse(data));
//     };
//     loadData();
//   }, []);

//   useEffect(() => {
//     AsyncStorage.setItem('PRODUCTS', JSON.stringify(products));
//   }, [products]);

//   const addProduct = () => {
//     if (name.trim() === '') return;
//     const newProduct = {
//       id: Date.now().toString(),
//       name,
//       description: desc,
//       done: false,
//     };
//     setProducts([...products, newProduct]);
//     setName('');
//     setDesc('');
//   };

//   const toggleDone = (id) => {
//     setProducts(products.map(p =>
//       p.id === id ? { ...p, done: !p.done } : p
//     ));
//   };

//   const deleteProduct = (id) => {
//     setProducts(products.filter(p => p.id !== id));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>רשימת קניות</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="שם מוצר"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="תיאור (אופציונלי)"
//         value={desc}
//         onChangeText={setDesc}
//       />
//       <Button title="הוסף מוצר" onPress={addProduct} />

//       <FlatList
//         data={products}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <ProductDetail
        
          
//             product={item}
//             onToggle={() => toggleDone(item.id)}
//             onDelete={() => deleteProduct(item.id)}
//             onView={() => navigation.navigate('ProductDetail', { product: item })}
//           />
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#f2f2f2' },
//   title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
//   input: {
//     borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
//     padding: 10, marginBottom: 10, backgroundColor: 'white',
//   },
// });












import React, { useState, useEffect } from 'react';
import {
  View, Text, FlatList, TextInput, Button, StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductItem from '../components/ProductItem';

export default function ProductListScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const data = await AsyncStorage.getItem('PRODUCTS');
      if (data) setProducts(JSON.parse(data));
    };
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
      <Text style={styles.title}>רשימת קניות</Text>

      <TextInput
        style={styles.input}
        placeholder="שם מוצר"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="תיאור (אופציונלי)"
        value={desc}
        onChangeText={setDesc}
      />
      <Button title="הוסף מוצר" onPress={addProduct} />

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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f2f2f2' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 10, marginBottom: 10, backgroundColor: 'white',
  },
});
