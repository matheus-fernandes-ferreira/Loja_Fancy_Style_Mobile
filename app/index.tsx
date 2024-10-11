import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { router, Link } from "expo-router";
import { useFonts, TenorSans_400Regular } from '@expo-google-fonts/tenor-sans';

export default function Screen() {
    const start = () => {
        router.replace('/home')
    }
    // Carrega fontes ( Tenor Sans)
    let [fontsLoaded] = useFonts({
        TenorSans_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }
        return (
            <SafeAreaView style={styles.container}>
                <Link href={'/home'} asChild>
                    <Pressable>
                        <ImageBackground
                            source={require('../assets/inicio.jpg')}
                            style={styles.logo}
                        >

                            <View style={styles.info}>
                                <Text style={styles.h1}>FancyStyle</Text>
                                <View style={styles.boxLink}>
                                    <Text style={styles.comecar}>
                                        Começar as compras
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </Pressable>
                </Link>

            </SafeAreaView>
        );
    }
    const styles = StyleSheet.create({
        container: {
            height: '100%',
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
            fontFamily: 'TenorSans_400Regular', // Aplica a fonte Tenor Sans
            fontWeight: 'bold',
            marginBottom: 10,
            zIndex: 1,
            color: 'yellow',
        },
        h2: {
            fontSize: 16,
            marginBottom: 10,
            zIndex: 1
        }
    })