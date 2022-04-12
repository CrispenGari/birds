import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatsStackNavProps, ChatsStackParamList } from "../../../params";
import Chats from "./Chats";
import Profile from "./Profile";
import Chat from "./Chat";

const Stack = createStackNavigator<ChatsStackParamList>();
const C: React.FC<ChatsStackNavProps<"ChatsMain">> = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName="ChatsMain"
    >
      <Stack.Screen name="ChatsMain" component={Chats} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default C;
