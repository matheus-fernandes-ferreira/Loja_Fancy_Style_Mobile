import { View, Text, StyleSheet } from "react-native";

export default function Screen (){
    return(
        <View style={styles.container}>
            <Text>Fui eu quem fiz :D</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})