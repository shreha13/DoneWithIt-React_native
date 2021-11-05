import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Button, Image, SafeAreaView, View } from 'react-native';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import AppTextInput from './app/components/AppTextInput';
import ListItem from './app/components/listitems/ListItem';
import colors from './app/config/colors';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessageScreen from './app/screens/MessageScreen';
import Screen from './app/screens/Screen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import AppText from './app/components/AppText';
import AppImagePicker from './app/components/AppImagePicker';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

export default function App() {
  const [imageURI, setImageURI] = useState()
  return (
    <Screen>
      <ImageInput imageURI={imageURI} onChangeImage={(uri) => setImageURI(uri)} />
      {/* <ImageInputList imagesURIs={imageURIs} onRemoveImage={(uri) => setImageURI(uri)} /> */}
    </Screen>

  );
}
