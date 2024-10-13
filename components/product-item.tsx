import { Link } from "expo-router";
import { Product } from "../types/product"
import { Pressable, Text, StyleSheet, Image, View } from "react-native";


type Props = {
    data: Product;
}

export const ProductItem = ({ data }: Props) => {
    return (
        // rota dinamica
        <Link href={`/product/${data.id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    style={styles.img}
                    source={{ uri: data.image }}
                    resizeMode="cover"
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
                </View>
            </Pressable>
        </Link>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: 250,
        width: '47.5%',
        borderColor: '#ddd',
        borderRadius: 8, // Para suavizar as bordas do item
        backgroundColor: '#fff', // Fundo branco para destacar a sombra
        shadowColor: '#000', // Cor da sombra (preta)
        shadowOffset: {
            width: 2,  // Sombra à direita
            height: 2, // Sombra abaixo
        },
        shadowOpacity: 0.2, // Opacidade da sombra (mais sutil)
        shadowRadius: 4,    // Raio da sombra (suavidade)
        elevation: 4,       // Para Android, define a elevação da sombra
        marginBottom: 16,   // Espaço vertical entre os itens
    },
    img: {
        width: '100%',
        height: '70%',
        borderRadius: 8,
    },
    info: {
        width: '100%',
        height: '30%',
        padding: 8,
        gap: 8,
    },
    title: {
        fontSize: 12,
        fontWeight: 'normal',
        textAlign: 'left',
        color: '#292929'

    },
    description: {
        fontSize: 13,
        color: "#555555",
        marginBottom: 10
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingRight: 8
    }
})