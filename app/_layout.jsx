import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function RootLayout() {
  const [flexDirection, setflexDirection] = useState('column');

  const BasicLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue
  }) => (
    <View style={{ padding: 10, flex: 1 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[styles.button, selectedValue === value && styles.selected]}
          >
            <Text
              style={[styles.buttonLabel, selectedValue === value && styles.selectedLabel]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.container, { [label]: selectedValue }]} >
          {children}
        </View>
    </View>
  )
  return (
    <View style={styles.container}>
      <BasicLayout
      label="flexDirection"
      values={['column','row','column-reverse','row-reverse']}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
      >
        <View style={[styles.box, {backgroundColor: '#ffff'}]} />
        <View style={[styles.box, {backgroundColor: 'rgb(255,0,0)'}]} />
        <View style={[styles.box, {backgroundColor: 'rgb(0, 0, 255)'}]} />

      </BasicLayout>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#030000",
    marginTop: 8,
    flex: 1
  },
  blue: {
    color: "#2A27F5",
    fontWeight: "bold",
    fontSize: 50
  },
  red: {
    color: "#F59127",
    fontWeight: "bold",
    fontSize: 25
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",

  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "white",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: "6%",
    minWidth: "48%",
    textAlign: "center"
  },
  selected: {
    backgroundColor: "#13de2e",
    borderWidth: 0
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: 500,
    color: "#FFFF"
  },
  selectedLabel: {
    backgroundColor: "#0000"
  },
  box:{
    width:50,
    height:50
  }



})