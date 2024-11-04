import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useProductDataBase } from '../../services/useProductDatabase'; 
import { Product } from '../../types/product'; 

export default function LastFiveProducts() {
    const [lastFiveProducts, setLastFiveProducts] = useState<Product[]>([]);
    const productDataBase = useProductDataBase();

    useEffect(() => {
        async function fetchLastFiveProducts() {
            try {
                const products = await productDataBase.getLastFiveProducts();
                setLastFiveProducts(products);
            } catch (error) {
                console.error("Erro ao buscar os últimos 5 produtos:", error);
            }
        }

        fetchLastFiveProducts();
    }, []);

    // Se não houver produtos, retornar um componente de texto
    if (lastFiveProducts.length === 0) {
        return <Text style={styles.emptyText}>Nenhum produto disponível</Text>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={lastFiveProducts}
                horizontal
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <View style={styles.productItem}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        {/* As strings devem estar dentro de um componente <Text> */}
                        <Text style={styles.productTitle}>{item.title}</Text>
                        <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 350,
        marginVertical: 16,
    },
    productItem: {
        alignItems: 'center',
        marginRight: 16,
        width: 200,
    },
    image: {
        width: '100%',
        height: '80%',
        borderRadius: 8,
        marginBottom: 8,
    },
    productTitle: {
        fontSize: 16,
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 4,
    },
    emptyText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginVertical: 20,
    },
});
