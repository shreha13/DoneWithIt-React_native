import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import ListItem from '../components/listitems/ListItem';
import ListItemSeparator from '../components/listitems/ListItemSeparator';
import listingApi from '../api/listings';
import colors from '../config/colors';
import routes from '../navigation/routes';
import Screen from './Screen';

const ListingsScreen = ({ navigation }) => {
    const [listings, setListings] = useState();
    const [loading, setLoading] = useState(false);

    const getListings = async () => {
        setLoading(true);
        const response = await listingApi.getListings();
        setLoading(false);
        if (response.ok) {
            setListings(response.data);
        } else {
            console.log(response.problem);
        }
    }

    useEffect(() => {
        getListings()
    }, [])
    return (
        <Screen style={styles.screen}>
            <ActivityIndicator animating={loading} size="large" />
            <FlatList ItemSeparatorComponent={ListItemSeparator} data={listings} keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <Card onPress={() => navigation.navigate(routes.LISTING_DETAIL, { item: { ...item, image: item.images[0].url } })} title={item.title} image={item.images[0].url} price={item.price} />} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.lightGray
    }
})

export default ListingsScreen;