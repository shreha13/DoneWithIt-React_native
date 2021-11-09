import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';
import routes from './routes';

const Stack = createStackNavigator();

const FeedNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Listings" component={ListingsScreen} />
            <Stack.Screen name={routes.LISTING_DETAIL} component={ListingDetailScreen} />
        </Stack.Navigator>
    )
}

export default FeedNavigator;