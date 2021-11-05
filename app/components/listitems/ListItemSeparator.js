import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../config/colors';

const ListItemSeparator = (props) => {
    return (
        <View style={styles.itemSeparator} />
    );
}

const styles = StyleSheet.create({
    itemSeparator: {
        width: '100%',
        backgroundColor: colors.lightGray,
        height: 1
    }
})

export default ListItemSeparator;