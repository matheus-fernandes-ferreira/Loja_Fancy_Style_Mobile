import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Screen() {
    const start = () => {
        router.replace('/home')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../assets/inicio.jpg')}
                style={styles.logo}
            >

                <View style={styles.info}>
                    <Text style={styles.h1}>FanceStyle</Text>
                    <Button
                        title="Começar as compras"
                        onPress={start}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        zIndex: 1,
        width: '100%',
        height: '100%'
    },
    logo: {
        width: '100%',
        height: '100%',
        

    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        zIndex: 1,
    },
    h2: {
        fontSize: 16,
        marginBottom: 10,
        zIndex: 1
    }
})