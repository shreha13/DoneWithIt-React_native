import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors'

const ViewImageScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
            </View>
            <Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'black',
        flex: 1
    },
    closeIcon: {
        position: 'absolute',
        top: '10%',
        left: '10%',
    },
    deleteIcon: {
        position: 'absolute',
        top: '10%',
        right: '10%',
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default ViewImageScreen
