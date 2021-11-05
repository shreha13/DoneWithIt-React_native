import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native';

const Icon = ({ name, iconColor = '#fff', backgroundColor = '#000', size = 40 }) => {
    return (
        <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor, alignItems: 'center', justifyContent: 'center' }}>
            <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
        </View>
    );
}

export default Icon;