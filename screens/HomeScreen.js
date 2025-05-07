import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  const telaDetalhes = () => navigation.goBack();
  const telaContato = () => navigation.goBack();
  return (
    <View style={styles.app}>
      <Text style={styles.text}>Tela Inicial</Text>
      <Text style={styles.texto}>Informações sobre a Tela inicial</Text>

      <View style={styles.btn}>
      <Button
        title="Detalhes"
        onPress={() => navigation.navigate("Details")}
      />
      </View>

      <View style={styles.btn}>
      <Button
        title="Contatos"
        onPress={() => navigation.navigate("Contact")}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        padding:10
    },
    texto: {
      padding: 15
    },
    btn: {
      padding: 10
    }
});
