import { TextInput, TextInputProps, StyleSheet } from "react-native";

export function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput style={styles.input} {...rest} />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 54,
        borderBottomWidth: 3,
        borderColor: '#590159',
        borderRadius: 7,
        paddingHorizontal: 16,
    },
});