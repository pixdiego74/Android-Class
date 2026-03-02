import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

const GeneradorSaludos = () => {
  //State definition
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  //Function to trigger the action btn
  const handleBtnHello = () => {
    //Empty space validation
    if (name.trim() === '' || age.trim() === ''){
      Alert.alert('Error', 'Please, all fields are required');
      return;
    }
    //Show alert with hello message
    Alert.alert('Welcome', `Hello, ${name} you are ${age} years old.`);

    //Clean
    setName('');
    setAge('');
  }
  //Structure
  return (
    <View style={styles.container}></View>
  )
}

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

  const styles =  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: '#F5F5F5'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#333'
    },
    input: {
      height: 50,
      borderColor: '#cccccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 15,
      marginBottom: 15,
      backgroundColor: '#ffffff',
      fontSize: 16
    }
  });