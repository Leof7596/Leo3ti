import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useBuscaCep } from '@/hooks/useBuscaCep';

export default function BuscaCEP() {
  const { cep, setCep, endereco, buscarCEP } = useBuscaCep();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Consulte seu CEP</Text>

      <TextInput
        style={styles.textInput}
        value={cep}
        onChangeText={setCep}
        placeholder="Digite o CEP"
        placeholderTextColor="black"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={buscarCEP}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {endereco.logradouro !== '' && (
        <View style={styles.result}>
          <Text style={styles.text}>Logradouro: {endereco.logradouro}</Text>
          <Text style={styles.text}>Bairro: {endereco.bairro}</Text>
          <Text style={styles.text}>Cidade: {endereco.localidade}</Text>
          <Text style={styles.text}>Estado: {endereco.uf}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37ddfa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    color: 'black',
    fontSize: 21,
    fontFamily: 'Arial',
  },
  textInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 10,
    color: 'black',
    fontSize: 21,
    fontFamily: 'Arial',
  },
  button: {
    backgroundColor: 'white', // Fundo branco
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'black', // Texto preto
    fontSize: 21,
    fontFamily: 'Arial',
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
});