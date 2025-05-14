import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

export default function AboutScreen({ navigation }) {
  const voltar = () => navigation.navigate("Home");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}> Caio Cesar</Text>
      <Text style={styles.role}>Desenvolvedor Full Stack</Text>

      <Text style={styles.sectionTitle}>📍 Localização</Text>
      <Text style={styles.sectionContent}>São Paulo, SP - Brasil</Text>

      <Text style={styles.sectionTitle}> Sobre Mim</Text>
      <Text style={styles.sectionContent}>
        Sou um desenvolvedor apaixonado por criar soluções web e mobile que impactam positivamente o dia a dia das pessoas. Gosto de aprender novas tecnologias e estou sempre em busca de desafios.
      </Text>

      <Text style={styles.sectionTitle}> Tecnologias Favoritas</Text>
      <Text style={styles.sectionContent}>
        React, React Native, Node.js, TypeScript, Firebase, Tailwind CSS
      </Text>

      <Text style={styles.sectionTitle}>🎯 Objetivo</Text>
      <Text style={styles.sectionContent}>
        Evoluir como desenvolvedor e contribuir com projetos que fazem a diferença na sociedade.
      </Text>

      <TouchableOpacity style={styles.button} onPress={voltar}>
        <Text style={styles.buttonText}>⬅ Voltar para a Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 25,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 5,
    textAlign: "center",
  },
  role: {
    fontSize: 18,
    color: "#555",
    marginBottom: 25,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 15,
    alignSelf: "center",
  },
  sectionContent: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 22,
    maxWidth: 300,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
