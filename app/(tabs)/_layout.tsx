import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from '@expo/vector-icons/Entypo';
import { Feather } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#a53e41', // Cor de fundo da Tab Bar
                },
                tabBarActiveTintColor: '#f2d8cb', // Cor dos ícones ativos
                tabBarInactiveTintColor: 'white', // Cor dos ícones inativos
            }}
        >
            <Tabs.Screen

                name="(home)"
                options={{
                    title: 'Início',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="(categories)"
                options={{
                    title: 'Categorias',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Feather size={28} name="grid" color={color} />,
                }}
            />
            <Tabs.Screen
                name="(menu)"
                options={{
                    title: 'Menu',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="bars" color={color} />
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name="(about)"
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="info" color={color} />
                }}
            />
        </Tabs>
    );
}