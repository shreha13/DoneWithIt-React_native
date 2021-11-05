import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../config/colors'

const AppButton = ({ title, onPress, color = "primary", ...props }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 25,
        padding: 15,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    text: {
        color: '#fff',
        fontSize: 18
    }
})

export default AppButton
