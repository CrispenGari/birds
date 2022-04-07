import React from "react";
import { View, Text } from "react-native";
import { AuthNavProps } from "../../../params";

const Login: React.FC<AuthNavProps<"Login">> = ({ navigation, route }) => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
