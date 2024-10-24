import { View, Text, StyleSheet, Pressable } from "react-native"
import { Link } from "expo-router";

type Title = {
    title: string,
    actionText: string,
    href: string
}

export function TitleBar(Props: Title) {
    return (
        <View style={styles.containerTitle}>
            <Text style={styles.titulo}>
                {Props.title}
            </Text>

            <Link href={Props.href} asChild>
                <Pressable style={styles.containerAction}>
                    <View >
                        <Text style={styles.action}>
                            {Props.actionText}
                        </Text>
                    </View>
                </Pressable>
            </Link>
        </View>
    );
}
const styles = StyleSheet.create({
    containerTitle: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    containerAction: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
        borderRadius: 6,


    },
    action: {
        color: 'yellow'
    }
})