import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

interface SearchProps {
    searchQuery: string;
    onSearch: (query: string) => void;
}

export function Search({ searchQuery, onSearch }: SearchProps) {
    return (
        <View style={styles.containerSearchBar}>
            <Feather name="search" size={24} color='#292929' />
            <TextInput
                placeholder='Pesquisar'
                style={styles.placeholder}
                value={searchQuery}
                onChangeText={onSearch} // Chama a função de busca ao digitar
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerSearchBar: {
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
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    placeholder: {
        width: '100%',
    }
});
