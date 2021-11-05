import React, { useState } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedbackBase } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from './Screen';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ErrorMessage from '../components/forms/ErrorMessage';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

const LoginScreen = (props) => {

    return (
        <Screen style={styles.screen}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo} />
            <AppForm initialValues={{ password: '', email: '' }} onSubmit={(values) => console.log(values)} validationSchema={validationSchema}>
                <AppFormField placeholder="Email" icon="email" size={25} autoCorrect={false} name="email"
                    autoCapitalize="none" keyboardType="email-address" textContentType="emailAddress" />
                <AppFormField placeholder="Password" icon="lock" size={25} name="password"
                    autoCorrect={false} autoCapitalize="none" secureTextEntry textContentType="password" />
                <SubmitButton title="Login" />
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

export default LoginScreen;