import { View, StatusBar, SafeAreaView } from "react-native";
import React from "react";

const Container: React.FC<{
  hidden?: boolean;
  safeAreaView?: boolean;
}> = ({ children, hidden, safeAreaView }) => {
  if (safeAreaView) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <StatusBar hidden={hidden ?? false} animated />
        {children}
      </SafeAreaView>
    );
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar hidden={hidden ?? false} animated />
      {children}
    </View>
  );
};

export default Container;
