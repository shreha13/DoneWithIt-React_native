import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Screen from '../../screens/Screen';
import colors from '../../config/colors';
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';

const FormImagePicker = ({ name }) => {
    const { setFieldValue, touched, errors, values } = useFormikContext();

    const handleAddImage = (uri) => {
        setFieldValue(name, [...values[name], uri]);
    }

    const handleRemoveImage = (uri) => {
        setFieldValue(name, values[name].filter(i => i != uri));
    }

    return (
        <>
            <ImageInputList imageURIs={values[name]} onAddImage={(uri) => handleAddImage(uri)} onRemoveImage={handleRemoveImage} />
            <ErrorMessage message={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormImagePicker;