import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Image, Text, Pressable } from "react-native";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { Button } from "../../components/button";
import { getProductById } from "../../services/product";

export default function Screen() {
    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string);

    const product = getProductById(idProduct);
    if (!product) return router.back;

    const comprar = () => {
        alert("Você clicou no item " + product.title);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: '' }} />
            <View style={styles.Content}>
                <Image
                    style={styles.img}
                    source={{ uri: product.image }}
                    resizeMode="cover"
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
                    <Pressable style={styles.btnAdicionar}>
                        <Text style={styles.txtAdicionar}>
                            Adicionar ao carrinho
                        </Text>
                    </Pressable>

                </View>

            </View>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 10,
        backgroundColor: '#ffffff'

    },
    Content: {
        width: '100%',
        height: '100%',
    },
    img: {
        width: "100%",
        height: '70%',
        borderRadius: 10,
        marginBottom: 20,
    },
    info: {
        width: "100%",
        height: '30%',
        gap: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'purple',
        textAlign: 'center'
    },
    description: {
        fontSize: 14,
        color: '#000A3E',
        marginBottom: 10,
        textAlign: 'left'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#292929',
    },
    btnAdicionar:{
        width: '100%',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
    },
    txtAdicionar:{
        color: 'white',
        fontSize: 18,
    }

});