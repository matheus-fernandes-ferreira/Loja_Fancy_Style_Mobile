import { Pressable, Text, StyleSheet, Image,View } from "react-native";
import { Category } from "../types/category"
import { router } from "expo-router";

type Props ={
    data: Category;
}

export const CategoryItem = ({data}: Props) =>{
    const click =() =>{

        router.navigate(`/categories/${data.id}`)
    }
    return(
        <Pressable onPress={click} style={styles.container}>
            <Image
                source={{uri: data.cover}}
                resizeMode="cover"
                style={styles.image}
            />
                {/* <Text style={styles.title}>{data.title}</Text> */}
        </Pressable>
    );
}
const styles = StyleSheet.create({
    container:{
        margin: 10,
        borderRadius: 10,
        width: '100%',
        
    },
    image:{
        width: '100%',
        height: 150,
        borderRadius: 10
    },
 
    title:{
        color: '#3b3535',
        fontSize: 24
    }
})