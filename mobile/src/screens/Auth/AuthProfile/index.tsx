import React from "react";
import { View, Text } from "react-native";
import { AuthNavProps } from "../../../params";

const AuthProfile: React.FC<AuthNavProps<"AuthProfile">> = ({
  navigation,
  route,
}) => {
  return (
    <View>
      <Text>AuthProfile</Text>
    </View>
  );
};

export default AuthProfile;
