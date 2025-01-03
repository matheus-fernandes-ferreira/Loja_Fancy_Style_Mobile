import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Pressable, StyleSheet, Text, View, Animated, Image } from "react-native";
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
                                style={styles.bg}
                            >
                                <View style={styles.info}>
                                    <Image
                                    style={styles.logomarca}
                                    source={require('../assets/logoFancy.png')}
                                    />
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

    info: {
        zIndex: 1,
        width: '100%',
        alignItems: 'flex-end',
        paddingRight: 20,
        paddingTop: 30,
    },
    bg: {
        width: '100%',
        height: '100%',
    },
    logomarca:{
        width: '50%',
        marginTop: '60%',
        marginRight: 15,
    },

});
