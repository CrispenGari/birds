import React from "react";
import { View, Text } from "react-native";
import { AuthNavProps } from "../../../params";

const ForgotPassword: React.FC<AuthNavProps<"ForgotPassword">> = ({
  navigation,
  route,
}) => {
  return (
    <View>
      <Text>ForgotPassword</Text>
    </View>
  );
};

export default ForgotPassword;
