import { View, TextInput, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons';

export function Search() {
    return (
        <View style={styles.containerSearchBar}>
            <Feather name="search" size={24} color='#292929' />
            <TextInput
            placeholder='Pesquisar'
            style={styles.placeholder}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    containerSearchBar:{
        width: '100%',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
        paddingLeft: 8,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#cdcdcd',
        marginBottom: 20,
        backgroundColor: 'white',
        shadowColor: '#000', // Cor da sombra (preta)
        shadowOffset: {
            width: 2,  // Sombra à direita
            height: 2, // Sombra abaixo
        },
        shadowOpacity: 0.2, // Opacidade da sombra (mais sutil)
        shadowRadius: 4,    // Raio da sombra (suavidade)
        elevation: 4,       // Para Android, define a elevação da sombra
    },
    placeholder:{
        width: '100%',
    }
})