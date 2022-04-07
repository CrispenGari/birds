import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import { WaveIndicator } from "react-native-indicators";
import Center from "./src/components/Center/Center";
import Routes from "./src/pages";
import ReduxProvider from "./src/providers/ReduxProvider";
import Container from "./src/components/Container/Container";

const App = () => {
  const [loaded] = useFonts({
    EpilogueItalic: require("./assets/fonts/Epilogue-Italic-VariableFont_wght.ttf"),
    Epilogue: require("./assets/fonts/Epilogue-VariableFont_wght.ttf"),
    EpilogueBold: require("./assets/fonts/static/Epilogue-Bold.ttf"),
    EpilogueBoldItalic: require("./assets/fonts/static/Epilogue-BoldItalic.ttf"),
    EpilogueExtraBold: require("./assets/fonts/static/Epilogue-ExtraBold.ttf"),
    EpilogueExtraBoldItalic: require("./assets/fonts/static/Epilogue-ExtraBoldItalic.ttf"),
  });
  LogBox.ignoreLogs;
  if (!loaded) {
    console.log("Not Loaded");
    return (
      <Center>
        <WaveIndicator color="cornflowerblue" size={50} />
      </Center>
    );
  }

  return (
    <ReduxProvider>
      <Routes />
    </ReduxProvider>
  );
};

export default App;
