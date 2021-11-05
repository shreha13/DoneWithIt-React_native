import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import colors from '../config/colors'

const ImageInput = ({ imageURI, onChangeImage }) => {
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
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.cancelled) {

                onChangeImage(result.uri);
                //handleChange(name);
            }
        } catch (error) {
            console.log(error)
        }

    }

    const deleteImage = () => {
        Alert.alert("Delete Image?", "Are you sure, you want to delete this image?", [
            {
                text: 'Yes',
                onPress: () => onChangeImage(null)
            },
            { text: 'No' }
        ])
    }

    return (
        <TouchableWithoutFeedback onPress={imageURI ? deleteImage : selectImage}>
            <View style={styles.container}>
                {imageURI && <Image source={{ uri: imageURI }} style={styles.image} />}
                {!imageURI && <MaterialCommunityIcons name="camera" size={50} />}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray,
        borderRadius: 15,
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default ImageInput
