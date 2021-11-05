import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import ListItem from '../components/listitems/ListItem';
import ListItemSeparator from '../components/listitems/ListItemSeparator';
import colors from '../config/colors';
import Screen from './Screen';

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        image: require('../assets/jacket.jpg'),
        subTitle: '$100'
    },
    {
        id: 2,
        title: 'Couch in great condition',
        image: require('../assets/couch.jpg'),
        subTitle: '$1000'
    }
]

const ListingsScreen = (props) => {
    return (
        <Screen style={styles.screen}>
            <FlatList ItemSeparatorComponent={ListItemSeparator} data={listings} keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Card title={item.title} image={item.image} price={item.subTitle} />} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.lightGray
    }
})

export default ListingsScreen;