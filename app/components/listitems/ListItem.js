import React from 'react';
import { Image, View, StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../config/colors';
import AppText from '../AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from '../Icon';

const ListItem = ({ image, title, subTitle, onPress, renderRightActions, IconComponent }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
                <View style={styles.container}>
                    {image && (<Image style={styles.image} source={image} />)}
                    {IconComponent}
                    <View style={styles.textContainer}>
                        <AppText numberOfLines={1} style={styles.name}>{title}</AppText>
                        {subTitle && <AppText numberOfLines={2} style={styles.totalListing}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons style={styles.chevron} name="chevron-right" size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        flexDirection: 'row',
        marginVertical: 5,
        paddingVertical: 10
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
        overflow: 'hidden'
    },
    textContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1
    },
    name: {
        fontWeight: "500",
        fontSize: 16
    },
    totalListing: {
        color: colors.gray,
        fontSize: 14,
        //marginVertical: 1
    },
    chevron: {
        color: colors.gray,
        alignSelf: 'center',
        marginRight: 5
    }
})

export default ListItem;