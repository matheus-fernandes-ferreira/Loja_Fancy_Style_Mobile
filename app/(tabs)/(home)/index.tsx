import { FlatList, View, Image, StyleSheet } from "react-native";
import { getAllProducts } from "../../../services/product";
import { ProductItem } from "../../../components/product-item";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { Header } from "../../../components/header/header";
import Banner from "../../../components/banner";
import { Search } from "../../../components/search";

export default function Screen() {
    const products = getAllProducts();

    return (

        <SafeAreaView style={styles.container}>
            <Header />
            <FlatList
                ListHeaderComponent={
                    <View style={{flex: 1}} >
                        <Banner />
                        <Search>
                            
                        </Search>
                    </View>
                }


                data={products}
                renderItem={({ item }) => <ProductItem data={item} />}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }} // Adicione o espaçamento horizontal entre os itens e o espaçamento vertical
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
        gap: 8,
    },
    imBanner: {
        width: '100%',
        height: 100,
    },
});
