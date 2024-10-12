import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Pressable, StyleSheet, Text, View, Animated } from "react-native";
import { router, Link } from "expo-router";
import { useFonts, TenorSans_400Regular } from '@expo-google-fonts/tenor-sans';
import { useState, useEffect } from "react";

export default function Screen() {
    const [largura, setLargura] = useState(new Animated.Value(0));
    const [altura, setAltura] = useState(new Animated.Value(10));
    const [opacity, setOpacity] = useState(new Animated.Value(0));

    useEffect(() => {
        // Iniciar a sequência de animações
        Animated.sequence([
            Animated.timing(largura, {
                toValue: 420,
                duration: 500,
                useNativeDriver: false,
            }),
            Animated.timing(altura, {
                toValue: 800,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(opacity, {
                toValue: 1, 
                duration: 2000,
                useNativeDriver: true, // UseNativeDriver para opacidade
            }),
        ]).start();
    }, []);

    const start = () => {
        router.replace('/home');
    };

    let [fontsLoaded] = useFonts({
        TenorSans_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Link href={'./(tabs)/(home)'} asChild>
                <Pressable>
                    <Animated.View style={{
                        width: largura,
                        height: altura,
                        backgroundColor: 'purple',
                    }}>
                        <Animated.View style={{ opacity: opacity }}>
                            <ImageBackground
                                source={require('../assets/inicio.jpg')}
                                style={styles.logo}
                            >
                                <View style={styles.info}>
                                    {/* Tudo aqui está dentro de um <Text> */}
                                    <Text style={styles.h1}>FancyStyle</Text>
                                    <View style={styles.boxLink}>
                                        <Text style={styles.comecar}>
                                            Começar as compras
                                        </Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </Animated.View>
                    </Animated.View>
                </Pressable>
            </Link>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxLink: {
        width: '55%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'white',
    },
    comecar: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center'
    },
    info: {
        zIndex: 1,
        width: '100%',
        alignItems: 'flex-end',
        paddingRight: 20,
        paddingTop: 30,
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    h1: {
        fontSize: 22,
        fontFamily: 'TenorSans_400Regular',
        fontWeight: 'bold',
        marginBottom: 10,
        zIndex: 1,
        color: 'yellow',
    },
});
