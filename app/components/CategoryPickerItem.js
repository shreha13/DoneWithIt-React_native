import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Icon from './Icon';

const CategoryPickerItem = ({ label, onPress, item }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon backgroundColor={item.backgroundColor} name={item.name} size={80} />
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        paddingTop: 10,
        color: colors.gray,
        fontWeight: "bold",
        textAlign: 'center'
    },
    container: {
        paddingHorizontal: 15,
        paddingVertical: 30,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',

    }
})
export default CategoryPickerItem;