import { View, Text } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { HEIGHT } from "../../constants";
import Center from "../Center/Center";

const AuthKeyboardAvoidingView: React.FC = ({ children }) => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      keyboardDismissMode="none"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          height: HEIGHT,
        }}
      >
        <Center>{children}</Center>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AuthKeyboardAvoidingView;
