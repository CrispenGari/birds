import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NotificationsStackNavProps,
  NotificationsStackParamList,
} from "../../../params";
import Notifications from "./Notifications";
import Profile from "./Profile";

const Stack = createStackNavigator<NotificationsStackParamList>();
const N: React.FC<NotificationsStackNavProps<"NotificationsMain">> = ({
  navigation,
}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName="NotificationsMain"
    >
      <Stack.Screen name="NotificationsMain" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default N;
