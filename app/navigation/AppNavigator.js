import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedNavigator} options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" size={size} color={color} />
            }} />
            <Tab.Screen name="ListingEdit" component={ListingEditScreen} options={({ navigation, route }) => ({
                tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("ListingEdit")} />
            })} />
            <Tab.Screen name="Account" component={AccountNavigator} options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" size={size} color={color} />
            }} />
        </Tab.Navigator>
    )
}

export default AppNavigator;