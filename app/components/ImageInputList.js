import React, { useRef } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ImageInput from './ImageInput'

const ImageInputList = ({ imageURIs = [], onRemoveImage, onAddImage }) => {
    const scrollView = useRef();

    return (
        <View>
            <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>
                <View style={styles.container}>
                    {imageURIs.map(i => <ImageInput imageURI={i} key={i} onChangeImage={() => onRemoveImage(i)} />)}
                    <ImageInput onChangeImage={uri => onAddImage(uri)} />
                    {/* <MaterialCommunityIcons name="camera" size={50} /> */}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
})

export default ImageInputList
