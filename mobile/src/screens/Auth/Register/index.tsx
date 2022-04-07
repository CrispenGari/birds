import React from "react";
import { View, Text } from "react-native";
import { AuthNavProps } from "../../../params";

const Register: React.FC<AuthNavProps<"Register">> = ({
  navigation,
  route,
}) => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  );
};

export default Register;
