import { Stack } from "expo-router";

export default function AboutLauout(){
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"/>
        </Stack>
    );
}