import { Dimensions } from "react-native";

// Fonts for the app
export const FONTS = {
  regular: "Epilogue",
  italic: "EpilogueItalic",
  italicBold: "EpilogueBoldItalic",
  italicExtraBold: "EpilogueExtraBoldItalic",
  regularBold: "EpilogueBold",
  regularExtraBold: "EpilogueExtraBold",
};

// Dimensions
const { width, height } = Dimensions.get("screen");
export const WIDTH: number = width;
export const HEIGHT: number = height;

export const constants = {
  SET_USER: "SET_USER",
};

export const COLORS = {
  main: "#42B883",
};
