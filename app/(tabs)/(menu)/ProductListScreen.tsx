import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useProductDataBase } from '../../../services/useProductDatabase';
import { ProductItem } from '../../../components/product-item';
import { Product } from '../../../types/product';

export default function ProductListScreen() {
    const [products, setProducts] = useState<Product[]>([]);
    const productDataBase = useProductDataBase();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const allProducts = await productDataBase.getAllProducts();
                setProducts(allProducts);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <View style={{ flex: 1, padding: 16, alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Novos Produtos</Text>
           
            <FlatList
                data={products}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <ProductItem data={item} />}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
                style={styles.list}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    list: {
        flex: 1,
        width: '100%',
        gap: 8,
    }
});