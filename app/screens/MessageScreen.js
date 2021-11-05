
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/listitems/ListItem';
import ListItemDeleteAction from '../components/listitems/ListItemDeleteAction';
import ListItemSeparator from '../components/listitems/ListItemSeparator';
import Screen from './Screen';

const msgs = [
    {
        id: 1,
        title: 'title1',
        description: 'description1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'title2',
        description: 'description2',
        image: require('../assets/mosh.jpg')
    },
]

const MessageScreen = (props) => {
    const [messages, setMessages] = useState(msgs);
    const [refreshing, setRefreshing] = useState(false);
    return (
        <Screen>
            <FlatList data={messages}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => setMessages([{
                    id: 2,
                    title: 'title2',
                    description: 'description2',
                    image: require('../assets/mosh.jpg')
                }])}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem renderRightActions={() => <ListItemDeleteAction onPress={() => setMessages(messages.filter(i => i.id != item.id))} />}
                        image={item.image} onPress={() => console.log()} title={item.title} subTitle={item.description} />

                } />
        </Screen>
    );
}


export default MessageScreen;