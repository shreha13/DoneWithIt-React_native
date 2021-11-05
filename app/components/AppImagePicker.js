import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Screen from '../screens/Screen';
import colors from '../config/colors';
import { useFormikContext } from 'formik';
import ErrorMessage from './forms/ErrorMessage';

const AppImagePicker = ({ name }) => {
    const { handleChange, touched, errors } = useFormikContext();
    const [images, setImages] = useState([])

    const requestPermission = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
                return false;
            }
        }
        return true;
    }

    const selectImage = async () => {
        try {
            const response = await requestPermission();
            if (!response) {
                alert('Sorry, we need camera roll permissions to make this work!');
                return;
            }
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                quality: 1,
            });
            if (!result.cancelled) {
                setImages([...images, result.uri]);
                handleChange(name);
            }
        } catch (error) {
            console.log(error)
        }

    }

    const deleteImage = (ind) => {
        console.log(images, ind)
        var data = images.slice(ind + 1, 1);
        setImages(data)
    }

    return (
        <Screen style={styles.container}>
            <View style={styles.imagesContainer}>
                {images.map((i, idx) => (
                    <TouchableWithoutFeedback onPress={() => deleteImage(idx)}>
                        <Image key={i} style={styles.image} source={{ uri: i, width: 100, height: 100 }} />
                    </TouchableWithoutFeedback>
                ))}
                <TouchableWithoutFeedback onPress={selectImage}>
                    <MaterialCommunityIcons style={styles.image} name="camera" size={70} />
                </TouchableWithoutFeedback>
            </View>
            <ErrorMessage message={errors[name]} visible={touched[name]} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        margin: 20,
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    image: {
        padding: 15,
        backgroundColor: colors.lightGray,
        borderRadius: 25,
        overflow: "hidden",
        margin: "auto",
        margin: 5,
    }
})

export default AppImagePicker;