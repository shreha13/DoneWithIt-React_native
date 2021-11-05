import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';
import AppText from './AppText';
import Screen from '../screens/Screen'
import ListItemSeparator from './listitems/ListItemSeparator';
import PickerItem from './PickerItem';

const AppPicker = ({ icon, size, setSelectedItem, numOfColumns = 1, PickerItemComponent = PickerItem, width = "100%", placeholder, selectedItem, items, ...props }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handlePickerSelect = (item) => {
        setSelectedItem(item);
        setModalVisible(false);
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={{ ...styles.container, width: width }}>
                    {icon && <MaterialCommunityIcons name={icon} size={size} color={colors.gray} />}
                    <AppText style={{ ...styles.input, color: selectedItem ? colors.darkGray : colors.gray }}>{selectedItem || placeholder}</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={size} color={colors.gray} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <FlatList numColumns={numOfColumns} keyExtractor={(item) => item.id.toString()} ItemSeparatorComponent={ListItemSeparator} data={items}
                        renderItem={({ item }) => <PickerItemComponent item={item} onPress={() => handlePickerSelect(item)} />} />
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                </Screen>
            </Modal>
        </>
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
    },
    input: {
        paddingLeft: 10,
        color: colors.darkGray,
        flex: 1
    }
})

export default AppPicker;