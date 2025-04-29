import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductItem({ product, onToggle, onDelete, onView }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onToggle}>
        <Ionicons
          name={product.done ? 'checkbox' : 'square-outline'}
          size={24}
          color={product.done ? 'green' : 'gray'}
        />
      </TouchableOpacity>
      <Text style={[styles.text, product.done && styles.done]}>
        {product.name}
      </Text>
      <TouchableOpacity onPress={onView}>
        <Ionicons name="information-circle-outline" size={24} color="#007AFF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  done: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
