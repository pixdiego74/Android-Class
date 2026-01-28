import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const COLORS = {
  column: "red",
  row: "blue",
  "column-reverse": "yellow",
  "row-reverse": "green"
};

const { width, height } = Dimensions.get("window");

export default function RootLayout() {
  const [flexDirection, setflexDirection] = useState('column');

  const selectedColor = COLORS[flexDirection];

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
        {values.map(value => {
          const isSelected = selectedValue === value;

          return (
            <TouchableOpacity
              key={value}
              onPress={() => setSelectedValue(value)}
              style={[
                styles.button,
                {
                  backgroundColor: isSelected ? COLORS[value] : "white",
                  borderColor: isSelected ? "transparent" : "#ccc"
                }
              ]}
            >
              <Text
                style={[
                  styles.buttonLabel,
                  { color: isSelected ? "white" : "black" }
                ]}
              >
                {value}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* CONTENEDOR FLEX */}
      <View style={[styles.container, { [label]: selectedValue }]}>
        {children}
      </View>

      {/* CONTENEDOR CENTRADOR */}
      <View style={styles.centerContainer}>
        <View
          style={[
            styles.halfScreenBox,
            { backgroundColor: selectedColor }
          ]}
        >
          <Text style={styles.halfScreenText}>
            Soy el color {selectedColor}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <BasicLayout
        label="flexDirection"
        values={['column','row','column-reverse','row-reverse']}
        selectedValue={flexDirection}
        setSelectedValue={setflexDirection}
      >
        <View style={[styles.box, { backgroundColor: '#fff' }]} />
        <View style={[styles.box, { backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
      </BasicLayout>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4b2d2d",
    marginTop: 8,
    flex: 1
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
    color: "white"
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: "white",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: "6%",
    minWidth: "48%",
    textAlign: "center",
    borderWidth: 2,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
  },
  box:{
    width:50,
    height:50,
    margin: 5
  },

  /* CENTRADOR REAL */
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  /* DIV GRANDE */
  halfScreenBox: {
    width: width * 0.7,   // 70% de la pantalla
    height: height * 0.2, // 20% del alto
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6 // sombra android
  },
  halfScreenText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  }
});
