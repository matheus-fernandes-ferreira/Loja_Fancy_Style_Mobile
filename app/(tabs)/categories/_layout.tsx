import { Stack } from "expo-router";

export default function CategoryLayout(){
    return(
        <Stack>
            <Stack.Screen name="list" 
            options={{
                title: 'Categorias',
                headerStyle: { backgroundColor: 'purple' }, // Cor do header (Tomato)
                headerTintColor: '#fff', // Cor do texto e ícones (branco)
                }}/>

            <Stack.Screen name="[id]"/>
        </Stack>
    );
}