import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ImageInput from './ImageInput'

const ImageInputList = ({ imagesURIs = [], onRemoveImage, onAddImage }) => {
    return (
        <View style={styles.container}>
            {imagesURIs.map(i => <ImageInput imageURI={i} key={i} onChangeImage={() => onRemoveImage(i)} />)}
            <MaterialCommunityIcons name="camera" size={50} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default ImageInputList
