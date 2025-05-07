import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DetailsScreen({ navigation }) {
  const voltar = () => navigation.goBack();
  const telaContato = () => navigation.navigate('Contact');
  return (
    <View style={styles.app}>
      <Text style={styles.text}>Tela de Detalhes</Text>
      <Text style={styles.text}>Informações sobre a tela de detalhes(DetailsScreen)</Text>

      <View style={styles.btn}>
      <Button title="Inicio" onPress={voltar} />
      </View>

      <View style={styles.btn}>
      <Button title="Tela de Contato" onPress={telaContato} />
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
