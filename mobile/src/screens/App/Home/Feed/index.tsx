import React from "react";
import { FeedStackParamList, HomeStackNavProps } from "../../../../params";

import { createStackNavigator } from "@react-navigation/stack";
import Posts from "./Posts/Posts";
const Stack = createStackNavigator<FeedStackParamList>();

const Feed: React.FC<HomeStackNavProps<"Feed">> = ({ navigation, route }) => {
  return (
    <Stack.Navigator initialRouteName={"Posts"}>
      <Stack.Screen name="Posts" component={Posts} />
    </Stack.Navigator>
  );
};
export default Feed;
