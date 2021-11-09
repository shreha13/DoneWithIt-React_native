import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import MessageScreen from '../screens/MessageScreen';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';

const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accounts" component={AccountScreen} />
            <Stack.Screen name="Listings" component={FeedNavigator} />
            <Stack.Screen name="Messages" component={MessageScreen} />
        </Stack.Navigator>
    )
}

export default AccountNavigator;