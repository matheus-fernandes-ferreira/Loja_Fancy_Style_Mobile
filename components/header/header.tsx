import { View, Text, Pressable, StyleSheet } from "react-native"
import { Ionicons, Feather } from '@expo/vector-icons';

export function Header() {
    return (
        <View style={styles.containerHeader}>
            <Pressable style={styles.iconMenu}>
                <Ionicons name="menu" size={24} color='#ffffff' />
            </Pressable>

            <Text style={styles.nameStore}>
                FancyStyle
            </Text>

            <Pressable style={styles.iconMenu}>
                <Feather name="bell" size={24} color='#ffffff' />
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: '#800080',
        width: '100%',
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        
    },
    iconMenu: {
        width: 40,
        height: 40,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameStore:{
        color: '#ffff00',
        fontSize: 16,
    }
})