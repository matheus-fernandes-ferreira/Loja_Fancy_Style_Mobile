// src/components/ImageDisplay.tsx

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface ImageDisplayProps {
    source: any; // Mudando para 'any' para aceitar tanto URL quanto require
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ source }) => {
    return (
        <View style={styles.container}>
            <Image source={source} style={styles.image} resizeMode="cover" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 320,
        height: 640,
    },
    image: {
        width: 320,
        height: 640,
        borderRadius: 8, // Opcional: para bordas arredondadas
    },
});

export default ImageDisplay;
