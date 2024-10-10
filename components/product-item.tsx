import { Link } from "expo-router";
import { Product } from "../types/product"
import {Pressable, Text, StyleSheet, Image, View} from "react-native";


type Props = {
    data: Product;
}

export const ProductItem = ({data}: Props) =>{
    return(
        // rota dinamica
        <Link href={`/product/${data.id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    style={styles.img}
                    source={{uri: data.image}}
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
    container:{
        flexDirection: 'column',
        margin: 8,
        height: 200,
        backgroundColor: 'pink',
        flex: 1,
    },
    img:{
        width: '100%',
        height: '65%',
        borderRadius: 10,
        backgroundColor: "#CCCCCC",
    },
    info:{
        flex: 1,
    },
    title:{
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'

    },
    description:{
        fontSize: 13,
        color: "#555555",
        marginBottom: 10
    },
    price:{
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
        paddingRight: 8
    }
})