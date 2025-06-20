import {Text, View, StyleSheet} from"react-native";
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';


const PlaceholderImage = require('@/assets/images/oi.png');

export default function Index() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);


    const pickImageAsync = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Você não selecionou nenhuma imagem.');
    }
  };
    const onReset = () => {
  setShowAppOptions(false);
};

const onAddSticker = () => {
};

const onSaveImageAsync = async () => {

};


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>      
      <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
  <View style={styles.optionsContainer}>
    <View style={styles.optionsRow}>
      <IconButton icon="refresh" label="Recarregar" onPress={onReset} />
      <CircleButton onPress={onAddSticker} />
      <IconButton icon="save-alt" label="Salvar" onPress={onSaveImageAsync} />
    </View>
  </View>
    ) : (

      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha uma foto" onPress={pickImageAsync}/>
        <Button label="Use esta foto" onPress={() => setShowAppOptions(true)} />
      </View>
      )}
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
    optionsContainer: {
  position: 'absolute',
  bottom: 80,
},
optionsRow: {
  alignItems: 'center',
  flexDirection: 'row',
},
});