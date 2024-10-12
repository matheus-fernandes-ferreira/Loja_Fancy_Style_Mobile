import { View, Text, Image, StyleSheet, Pressable } from "react-native"
import PagerView from "react-native-pager-view"

export default function Banner() {
    return (
        <View style={styles.containerBanner}>
            <PagerView style={{flex: 1}} initialPage={0} pageMargin={14}>
            <Pressable style={styles.imgContainerBannew} key={1}>
                <Image
                style={styles.imgSlide}
                source={require('../../assets/1.png')}
                resizeMode="cover"
                />
            </Pressable >

            <Pressable style={styles.imgContainerBannew} key={2}>
                <Image
                style={styles.imgSlide}
                source={require('../../assets/2.png')}
                resizeMode="cover"
                />
            </Pressable >

            <Pressable style={styles.imgContainerBannew} key={3}>
                <Image
                style={styles.imgSlide}
                source={require('../../assets/3.png')}
                resizeMode="cover"
                />
            </Pressable >

            </PagerView>
        </View>
    )
}
const styles = StyleSheet.create({
    containerBanner: {
        width: '100%',
        height: 144,
        borderRadius: 16,
        marginTop: 20,
        marginBottom: 16,
    },
    imgContainerBannew:{
        flex: 1,
        borderRadius: 16,
        
    },
    imgSlide:{
        width: '100%',
        height: '100%',
        borderRadius: 16,
    }

})