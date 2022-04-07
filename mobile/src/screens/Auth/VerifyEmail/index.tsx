import React from "react";
import { View, Text } from "react-native";
import { AuthNavProps } from "../../../params";

const VerifyEmail: React.FC<AuthNavProps<"VerifyEmail">> = ({
  navigation,
  route,
}) => {
  return (
    <View>
      <Text>VerifyEmail</Text>
    </View>
  );
};

export default VerifyEmail;
