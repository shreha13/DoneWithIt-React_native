import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from './Screen';
import * as Yup from 'yup';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    //confirmPassword: Yup.string().required().min(4).label("Confirm Password")
})

const RegisterScreen = (props) => {

    return (
        <Screen style={styles.screen}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo} />
            <AppForm initialValues={{ password: '', email: '' }} onSubmit={(values) => console.log(values)} validationSchema={validationSchema}>
                <AppFormField placeholder="Name" icon="account" size={25} autoCorrect={false} name="name" />
                <AppFormField placeholder="Email" icon="email" size={25} autoCorrect={false} name="email"
                    autoCapitalize="none" keyboardType="email-address" textContentType="emailAddress" />
                <AppFormField placeholder="Password" icon="lock" size={25} name="password"
                    autoCorrect={false} autoCapitalize="none" secureTextEntry textContentType="password" />
                {/* <AppFormField placeholder="Confirm Password" icon="lock" size={25} name="confirmPassword"
                    autoCorrect={false} autoCapitalize="none" secureTextEntry textContentType="password" /> */}
                <SubmitButton title="Register" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 10
    },
    logo: {
        marginBottom: 20,
        alignSelf: 'center',
        height: 70,
        width: 70,
        marginTop: '20%'
    },
})

export default RegisterScreen;