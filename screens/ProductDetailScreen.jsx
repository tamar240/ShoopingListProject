
import React from 'react';
import { View, ScrollView, I18nManager } from 'react-native';
import { Text } from 'react-native-paper';
import { Card } from '@rneui/themed';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f0f4f8', padding: 16 }}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      <Card containerStyle={{
        borderRadius: 16,
        paddingVertical: 20,
        paddingHorizontal: 16,
        backgroundColor: '#ffffff',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: 20,
            textAlign: 'right',
            writingDirection: 'rtl',
          }}
        >
          📝 פרטי המוצר
        </Text>

        <View style={{ marginBottom: 16 }}>
          <Text style={labelStyle}>שם המוצר:</Text>
          <Text style={valueStyle}>{product.name}</Text>
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={labelStyle}>תיאור:</Text>
          <Text style={valueStyle}>{product.description || 'אין תיאור'}</Text>
        </View>

        <View style={{ marginBottom: 8 }}>
          <Text style={labelStyle}>סומן כקנוי:</Text>
          <Text style={valueStyle}>{product.done ? 'כן' : 'לא'}</Text>
        </View>
      </Card>
    </ScrollView>
  );
}

const labelStyle = {
  fontSize: 16,
  fontWeight: '600',
  color: '#374151',
  marginBottom: 4,
  textAlign: 'right',
  writingDirection: 'rtl',
};

const valueStyle = {
  fontSize: 16,
  color: '#111827',
  textAlign: 'right',
  writingDirection: 'rtl',
};
