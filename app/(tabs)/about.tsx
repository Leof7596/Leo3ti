import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O Rio de Janeiro é uma das cidades mais icônicas do Brasil, conhecida mundialmente 
        por suas praias deslumbrantes, seu povo acolhedor e sua energia contagiante. 
        Fundada em 1565, a cidade é um verdadeiro cartão-postal, com o Cristo Redentor 
        abençoando a paisagem e o Pão de Açúcar emoldurando o mar. O Rio é samba, é carnaval, 
        é alegria. Um lugar onde a natureza e a cultura se encontram em perfeita harmonia. 
        Viver o Rio é sentir o coração do Brasil pulsar em cada esquina.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37ddfa',
    justifyContent: "center",
    alignItems: "center",
    padding: 30, // Espaçamento nas bordas
  },
  text: {
    color: 'black',
    fontSize: 35,
    textAlign: 'justify',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
