import {Text, View, StyleSheet} from"react-native";
import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceholderImage = require('@/assets/images/oi.png');

export default function Index() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

    const pickImageAsync = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('Você não selecionou nenhuma imagem.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>      
      <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha uma foto" onPress={pickImageAsync}/>
        <Button label="Use esta foto" />
      </View>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: "center",
    alignItems: "center",
  },
    imageContainer:{
      flex: 1,
    },
    footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },
});