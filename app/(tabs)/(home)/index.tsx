import { FlatList, Image, StyleSheet } from "react-native";
import { getAllProducts } from "../../../services/product";
import { ProductItem } from "../../../components/product-item";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { Header } from "../../../components/header/header";
import Banner from "../../../components/banner";

export default function Screen() {
    const products = getAllProducts();

    return (

            <SafeAreaView style={styles.container}>
                <Header/>
                <FlatList
                    ListHeaderComponent={
                        <Banner/>
                        
                        // <Image
                        //     style={styles.imBanner}
                        //     source={{ uri: 'https://yacamim.vteximg.com.br/arquivos/ids/186850/banner%20atualizado%20outlet.jpg?v=638597811231170000' }}
                        //     resizeMode="cover"
                        // />
                    }
                    data={products}
                    renderItem={({ item }) => <ProductItem data={item} />}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    style={styles.list}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        backgroundColor: '#e4e3e3'

    },
    list: {
        flex: 1,
        width: '100%',
        padding: 8,
    },
    imBanner: {
        width: '100%',
        height: 100,
    },
});
