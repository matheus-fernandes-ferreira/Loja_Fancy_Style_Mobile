import { FlatList, View, StyleSheet } from "react-native";
import { useState } from "react";
import { getAllProducts } from "../../../services/product";
import { ProductItem } from "../../../components/product-item";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { Header } from "../../../components/header/header";
import Banner from "../../../components/banner";
import { Search } from "../../../components/search";
import {TitleBar} from "../../../components/titleBar/index"

export default function Screen() {
    

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Banner/>
           <TitleBar
           title="Novidades"
           actionText="Ver todos"
           href="./allProducts"

           />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        backgroundColor: '#e4e3e3'
    },
    list: {
        flex: 1,
        width: '100%',
        gap: 8,
    }
});
