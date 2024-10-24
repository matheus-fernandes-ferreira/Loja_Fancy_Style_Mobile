import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AllProductList } from '../../../components/productList/index'
export default function MenuScreen() {
    return (
        <SafeAreaView style={styles.container}>

            <AllProductList />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        alignSelf: 'center',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
    },
    menuText: {
        fontSize: 18,
        marginLeft: 20,
        color: '#333',
    },
});