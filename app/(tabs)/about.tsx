import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O Corinthians é o maior clube do Brasil, fundado em 1910 em São Paulo.
        Conhecido como “Timão”, tem uma torcida apaixonada e uma história
        marcada por conquistas, como a Libertadores e o Mundial em 2012, além
        de vários campeonatos Brasileiros e Paulistas. O clube representa o
        povo, a luta e a paixão. Ser corinthiano é viver o futebol com o coração.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: "center",
    alignItems: "center",
    padding: 30, // Espaçamento nas bordas
  },
  text: {
    color: '#FFFFFF',
    fontSize: 35,
    textAlign: 'justify',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
