import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { getAllProducts } from "../../services/product";
import { ProductItem } from "../../components/product-item";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
    const products = getAllProducts();
    return (
        <SafeAreaView style={styles.container}>

                <Image
                    style={styles.imBannerg}
                    source={{ uri: 'https://yacamim.vteximg.com.br/arquivos/ids/186850/banner%20atualizado%20outlet.jpg?v=638597811231170000' }}
                    resizeMode="cover"
                />

                <FlatList
                    data={products}
                    renderItem={({ item }) => <ProductItem data={item} />}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    style={styles.list}
                />
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 8,
    },
    imBannerg: {
        width: '100%',
        height: 100
    }
})