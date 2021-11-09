import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import AppText from '../components/AppText'
import ListItem from '../components/listitems/ListItem'
import colors from '../config/colors'

const ListingDetailScreen = ({ route }) => {
    const { image, title, price, listImage, listName, totalListing } = route.params.item;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} resizeMode="cover" />
            <View style={styles.textContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.price}>${price}</AppText>
            </View>
            <ListItem onPress={() => console.log()} image={listImage} title={listName} subTitle={totalListing} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '40%'
    },
    container: {
        flex: 1
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    title: {
        color: colors.primary,
        fontSize: 24,
        fontWeight: "bold"
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        marginTop: 10,
        fontSize: 20
    }

})

export default ListingDetailScreen
