import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/listitems/ListItem';
import ListItemSeparator from '../components/listitems/ListItemSeparator';
import colors from '../config/colors';
import Screen from './Screen';

const tabs = [
    {
        icon: "format-list-bulleted",
        color: "primary",
        title: "My Listings",
        screen: "Listings"
    },
    {
        icon: "email",
        color: "secondary",
        title: "Messages",
        screen: "Messages"
    }
]

const AccountScreen = ({ navigation }) => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem image={require('../assets/mosh.jpg')} title="Irfan Pathak" subTitle="irfan@gmail.com" />
            </View>
            <View style={styles.container}>
                <FlatList ItemSeparatorComponent={ListItemSeparator} keyExtractor={(item) => item.title} data={tabs}
                    renderItem={({ item }) => <ListItem onPress={() => navigation.navigate(item.screen)} title={item.title} IconComponent={<Icon backgroundColor={colors[item.color]} name={item.icon} />} />} />
            </View>
            <View style={styles.container}>
                <ListItem title="Logout" IconComponent={<Icon backgroundColor={colors.danger} name="logout" />} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        backgroundColor: colors.white
    },
    screen: {
        backgroundColor: colors.lightGray
    }
})

export default AccountScreen;