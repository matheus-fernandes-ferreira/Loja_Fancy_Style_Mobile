import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { Header } from "../../../components/header/header";
import Banner from "../../../components/banner";
import { TitleBar } from "../../../components/titleBar/index";
import LastFiveProducts from "../../../components/produtosRecentes";
import ImageDisplay from "../../../components/ImageDisplay";

const imageSource = require('../../../assets/display.png'); // Substitua 'sua-imagem.jpg' pelo nome da sua imagem

export default function Screen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Header />
                <Banner />
                <TitleBar
                    title="Novidades"
                    actionText="Ver todos"
                    href="./allProducts"
                />
                <LastFiveProducts />
                <ImageDisplay source={imageSource} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        backgroundColor: '#e4e3e3',
    },
    scrollViewContent: {
        paddingBottom: 20, // Adiciona espaço na parte inferior do ScrollView
    },
});
