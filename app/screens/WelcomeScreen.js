import React from 'react'
import { Button, ImageBackground, StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import AppButton from '../components/AppButton'
import colors from '../config/colors'

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground blurRadius={5} source={require('../assets/background.jpg')} style={styles.background}>
            <View style={styles.banner}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttons}>

                <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate("Register")} />
            </View>
            <View style={styles.registerButton} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end'

    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    },
    buttons: {
        margin: 'auto',
        padding: 20,
        width: '100%'
    },
    banner: {
        position: 'absolute',
        top: '10%',
        alignSelf: 'center'
    },
    logo: {
        alignSelf: 'center',
        height: 70,
        width: 70,
    },
})

export default WelcomeScreen

