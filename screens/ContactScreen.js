import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ContactScreen({ navigation }) {
    const voltar = () => navigation.goBack();
    const telaDetalhes = () => navigation.navigate('Detalhes');
  return (
    <View style={styles.app}>
      <Text style={styles.text}>Tela de Contato</Text>
      <Text style={styles.texto}>Informações sobre a tela de contato(ContactScreen)</Text>

      <View style={styles.btn}>
      <Button
        title="Ir para detalhes"
        onPress={telaDetalhes}
      />
      </View>

      <View style={styles.btn}>
      <Button
        title="Ir para tela inicial"
        onPress={voltar}
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
