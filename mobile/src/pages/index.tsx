import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppTabs from "./AppTabs";

const Routes = () => {
  const user: any = null;
  return (
    <NavigationContainer>
      {!user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
