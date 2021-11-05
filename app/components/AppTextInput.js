import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';
import defaultStyles from '../config/styles';

const AppTextInput = ({ icon, size, width = '100%', placeholder, ...props }) => {
    return (
        <View style={{ ...styles.container, width: width }}>
            {icon && <MaterialCommunityIcons name={icon} size={size} color={colors.gray} />}
            <TextInput placeholderTextColor={colors.gray} style={[defaultStyles.text, styles.input]} placeholder={placeholder} {...props} />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        padding: 10,
        backgroundColor: colors.lightGray,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 10
    },
    input: {
        paddingLeft: 10,
        color: colors.darkGray,
        flex: 1
    }
})

export default AppTextInput;