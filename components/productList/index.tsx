import { FlatList, View, StyleSheet } from "react-native";
import { useState } from "react";
import { getAllProducts } from "../../services/product";
import { ProductItem } from "../../components/product-item";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { Header } from "../../components/header/header";
import Banner from "../../components/banner/index";
import { Search } from "../../components/search/index";

export function AllProductList() {
    const allProducts = getAllProducts();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    // Função para filtrar os produtos com base no texto da busca
    const handleSearch = (query: string) => {
        setSearchQuery(query);

        // Filtra os produtos pelo título ou descrição
        const filtered = allProducts.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredProducts(filtered);
    };
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ListHeaderComponent={
                    <View style={{ flex: 1 }} >

                        {/* barra de pesquisa */}
                        <Search
                            searchQuery={searchQuery}
                            onSearch={handleSearch}
                        />
                    </View>
                }
                data={filteredProducts}
                renderItem={({ item }) => <ProductItem data={item} />}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
                style={styles.list}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#e4e3e3'
    },
    list: {
        flex: 1,
        width: '100%',
        gap: 8,
    }
});

