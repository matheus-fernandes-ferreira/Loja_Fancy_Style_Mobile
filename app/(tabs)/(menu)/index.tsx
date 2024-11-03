import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function MenuScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <TouchableOpacity style={styles.menuItem}>
                    <FontAwesome name="user" size={24} color="purple" />
                    <Text style={styles.menuText}>Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <FontAwesome name="shopping-bag" size={24} color="purple" />
                    <Text style={styles.menuText}>Pedidos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <FontAwesome name="heart" size={24} color="purple" />
                    <Text style={styles.menuText}>Favoritos</Text>
                </TouchableOpacity>

                <Link href={'./location'} asChild>
                    <TouchableOpacity style={styles.menuItem}>
                        <MaterialIcons name="location-on" size={24} color="purple" />
                        <Text style={styles.menuText}>Endereços</Text>
                    </TouchableOpacity>
                </Link>

                <TouchableOpacity style={styles.menuItem}>
                    <FontAwesome name="cog" size={24} color="purple" />
                    <Text style={styles.menuText}>Configurações</Text>
                </TouchableOpacity>

                <Link href={'./registerProduct'} asChild>
                    <TouchableOpacity style={styles.menuItem}>
                        <FontAwesome name="cog" size={24} color="purple" />
                        <Text style={styles.menuText}>Registrar novo produto</Text>
                    </TouchableOpacity>
                </Link>

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