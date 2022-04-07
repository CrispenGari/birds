import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AppNavProps, HomeStackParamList } from "../../../params";

import Feed from "./Feed";
const Stack = createStackNavigator<HomeStackParamList>();
const Home: React.FC<AppNavProps<"Home">> = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Feed"
    >
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};

export default Home;
