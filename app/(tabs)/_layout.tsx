import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from '@expo/vector-icons/Entypo';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="(home)"
                options={{
                    title: 'Início',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
                }}
            />
            <Tabs.Screen
                name="(categories)"
                options={{
                    title: 'Categorias',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Entypo name="grid" size={24} color="black" />
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