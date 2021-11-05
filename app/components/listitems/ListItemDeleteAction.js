import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../config/colors';
import { StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ListItemDeleteAction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.delete}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={40} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    delete: {
        backgroundColor: colors.danger,
        width: 70,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ListItemDeleteAction;