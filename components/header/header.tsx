import { View, Image, Pressable, StyleSheet } from "react-native"
import { Ionicons, Feather } from '@expo/vector-icons';

export function Header() {
    return (
        <View style={styles.containerHeader}>
            <Pressable style={styles.iconMenu}>
                <Ionicons name="menu" size={24} color='#ffffff' />
            </Pressable>

            <Image 
            style={styles.imgLogo}
            source={require('../../assets/logoFancy.png')}
            >
                
            </Image>

            <Pressable style={styles.iconMenu}>
                <Feather name="bell" size={24} color='#ffffff' />
            </Pressable>
            <Pressable style={styles.iconMenu}>
                <Feather name="shopping-cart" size={24} color='#ffffff' />
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: 'purple',
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
        color: '#f2d8cb',
        fontSize: 16,
    },
    imgLogo:{
        
    }
})