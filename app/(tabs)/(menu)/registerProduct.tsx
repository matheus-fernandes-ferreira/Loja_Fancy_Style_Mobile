// RegisterScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from '../../../components/input';
import { useProductDataBase } from '../../../services/useProductDatabase';
import { Product } from '../../../types/product';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
    const [idCategory, setIdCategory] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const router = useRouter();
    
    const productDataBase = useProductDataBase();

    async function create() {
        try {
            if (isNaN(Number(idCategory)) || isNaN(Number(price))) {
                return Alert.alert('Erro', 'idCategory e preço precisam ser números');
            }
            const response = await productDataBase.create({
                idCategory: Number(idCategory),
                image,
                title,
                description,
                price: Number(price),
            });
            Alert.alert('Produto cadastrado com id: ' + response.insertedRowId);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.titulo}>Registre um novo produto</Text>
                <View style={styles.forms}>
                    <Input placeholder="Categoria" onChangeText={setIdCategory} value={idCategory} />
                    <Input placeholder="Nome do produto" onChangeText={setTitle} value={title} />
                    <Input placeholder="Descrição" onChangeText={setDescription} value={description} />
                    <Input placeholder="Preço" onChangeText={setPrice} value={price} />
                    <Input placeholder="URL da imagem" onChangeText={setImage} value={image} />
                </View>

                <Pressable style={styles.btnRegistrar} onPress={create}>
                    <Text style={styles.txtRegistrar}>Registrar</Text>
                </Pressable>

                <Pressable
                    style={[styles.btnverProdutos]}
                    onPress={() => router.push('/ProductListScreen')}
                >
                    <Text style={styles.verProdutos}>Ver Produtos</Text>
                </Pressable>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#343434',
        paddingBottom: 30,
    },
    forms: {
        height: 'auto',
        width: '100%',
        paddingBottom: 20,
        gap: 20,
    },
    btnRegistrar: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16,
        backgroundColor: 'purple',
    },
    txtRegistrar: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'yellow',
    },
    btnverProdutos:{
        width: '100%',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16,
        backgroundColor: '#cdcdcd',
    },
    verProdutos:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'purple',
    }
});
