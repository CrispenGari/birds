import { View, Text } from "react-native";
import React from "react";

const Center: React.FC = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
};

export default Center;
