import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AuthParamList } from "../../params";
import {
  Landing,
  Login,
  Register,
  ResetPassword,
  TermsAndConditions,
  VerifyEmail,
  RequestForgotPassword,
} from "../../screens/Auth";
import { Pictures, PersonalInfo } from "../../screens/Common";

const Stack = createStackNavigator<AuthParamList | any>();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Landing"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="Pictures" component={Pictures} />
      <Stack.Screen
        name="RequestForgotPassword"
        component={RequestForgotPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
