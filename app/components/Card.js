import React from 'react'
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

const Card = ({ title, price, image }) => {
    return (
        <TouchableOpacity style={styles.cardContainer}>
            <Image style={styles.image} source={image} />
            <View style={styles.textContainer}>
                <AppText style={{ fontWeight: "bold", color: colors.black }}>{title}</AppText>
                <AppText style={{ fontWeight: "bold", marginTop: 10, color: colors.secondary }}>{price}</AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        margin: 10,
        borderRadius: 15,
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
    textContainer: {
        borderRadius: 15,
        paddingLeft: 25,
        paddingVertical: 20
    },
    image: {
        height: 200,
        width: '100%'
    },
})

export default Card
