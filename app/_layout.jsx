import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  const [mood, setMood] = useState('Neutral 😐');

  return (
    <View style={styles.container} >
      <Text style={styles.title} >Hoy me siento: {mood}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Feliz 😊" onPress={() => setMood("Feliz 😊")}/>
        <Button title="Cansado 🥱" onPress={() => setMood("Cansado 🥱")}/>
        <Button title="Productivo 🫡" onPress={() => setMood("Productivo 🫡")}/>
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    felx: 1, //Abarca toda la pantalla
    justifyContent: 'center' ,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  buttonContainer: {
    gap: 10
  }
});
