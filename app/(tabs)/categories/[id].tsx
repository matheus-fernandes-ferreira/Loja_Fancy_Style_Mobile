import { View, Text, StyleSheet, FlatList } from "react-native";
import { getAllProducts, getProductByCategory } from "../../../services/product";
import { ProductItem } from "../../../components/product-item";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getCategoryById } from "../../../services/category";

export default function Screen() {
    const { id } = useLocalSearchParams();

    const idCategory = parseInt(id as string);

    const category = getCategoryById(idCategory);
    if (!category) return router.back();

    const products = getProductByCategory(idCategory);

    return (
        <View style={styles.container}>
            <Stack.Screen 
            options={{ 
                headerShown: false
                }} />
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem data={item} />}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }} // Adicione o espaçamento horizontal entre os itens e o espaçamento vertical
                style={styles.list}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    list: {
        flex: 1,
        width: '100%',
        height: 350,
        padding: 20
    }
})