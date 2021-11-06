import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppFormPicker from '../components/forms/AppFormPicker';
import FormImagePicker from '../components/forms/FormImagePicker';
import SubmitButton from '../components/forms/SubmitButton';
import colors from '../config/colors';
import useLocation from '../hooks/useLocation';
import Screen from './Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(4).label("Title"),
    description: Yup.string().label("Description"),
    price: Yup.number().required().min(1).max(100000).label("Price"),
    category: Yup.string().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least an image").label("Images")
})

const categories = [
    {
        label: 'Furniture',
        id: 1,
        name: 'table-furniture',
        backgroundColor: 'red'
    },
    {
        label: 'Cars',
        id: 2,
        name: 'car',
        backgroundColor: 'dodgerblue'
    },
    {
        label: 'Cameras',
        id: 3,
        name: 'camera',
        backgroundColor: 'green'
    },
    {
        label: 'Clothing',
        id: 4,
        name: 'hanger',
        backgroundColor: 'gold'
    },
    {
        label: 'Games',
        id: 5,
        name: 'gamepad-variant',
        backgroundColor: 'orange'
    },
    {
        label: 'Sports',
        id: 6,
        name: 'cricket',
        backgroundColor: colors.primarary
    },
    {
        label: 'Movies & Music',
        id: 7,
        name: 'music',
        backgroundColor: 'pink'
    },
    {
        label: 'Books',
        id: 8,
        name: 'book',
        backgroundColor: colors.secondary
    },
    {
        label: 'Others',
        id: 9,
        name: 'tools',
        backgroundColor: colors.black
    },
]

const ListingEditScreen = (props) => {
    const location = useLocation();

    return (
        <Screen style={styles.screen}>
            <AppForm initialValues={{ category: '', title: '', price: 0, description: '', images: [] }} validationSchema={validationSchema} onSubmit={(values) => console.log(values, location)}>
                <FormImagePicker name="images" />
                <AppFormField maxLength={255} placeholder="Title" autoCorrect={false} name="title" autoCapitalize="sentences" />
                <AppFormField maxLength={9} placeholder="Price" keyboardType="numeric" autoCorrect={false} name="price" autoCapitalize="sentences" />
                <AppFormPicker PickerItemComponent={CategoryPickerItem} numOfColumns={3} items={categories} name="category" placeholder="Category" />
                <AppFormField multiline maxLength={1000} numberOfLines={3} placeholder="Description" autoCorrect={false} name="description" autoCapitalize="sentences" />
                <SubmitButton title="POST" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 10
    },
})

export default ListingEditScreen;