import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { initializeDatabase } from "../data/initializeDataBase";

export default function RootLayout() {
    return (
        <SQLiteProvider databaseName="myDataBase.db" onInit={initializeDatabase}>

            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="(tabs)" />
            </Stack>
        </SQLiteProvider>
    );
}