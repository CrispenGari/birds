import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AuthParamList } from "../../params";
import {
  AuthProfile,
  Landing,
  Login,
  Register,
  ResetPassword,
  TermsAndConditions,
  VerifyEmail,
  ForgotPassword,
  Pictures,
  PersonalInfo,
} from "../../screens/Auth";

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
      <Stack.Screen name="AuthProfile" component={AuthProfile} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="Pictures" component={Pictures} />
    </Stack.Navigator>
  );
};

export default AuthStack;
