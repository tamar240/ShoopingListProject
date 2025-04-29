
import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { Card } from '@rneui/themed';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <Card containerStyle={{ borderRadius: 12 }}>
        <Card.Title className="text-xl font-bold text-gray-800">פרטי המוצר</Card.Title>
        <Card.Divider />

        <View className="mb-4">
          <Text className="text-lg font-medium text-gray-700 mb-1">שם המוצר:</Text>
          <Text className="text-base text-gray-900">{product.name}</Text>
        </View>

        <View className="mb-4">
          <Text className="text-lg font-medium text-gray-700 mb-1">תיאור:</Text>
          <Text className="text-base text-gray-900">{product.description || 'אין תיאור'}</Text>
        </View>

        <View className="mb-2">
          <Text className="text-lg font-medium text-gray-700 mb-1">סומן כקנוי:</Text>
          <Text className="text-base text-gray-900">{product.done ? 'כן' : 'לא'}</Text>
        </View>
      </Card>
    </ScrollView>
  );
}
