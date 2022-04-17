import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from "../../params";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { FONTS } from "../../constants";
import { Home } from "../../screens/App";

import TabIcon from "../../components/TabIcon";
import Notifications from "../../screens/App/Notifications";
import Chats from "../../screens/App/Chats";
import useDevice from "../../hooks";
const Tabs = createBottomTabNavigator<AppParamList>();
const AppTabs = () => {
  const { osName } = useDevice();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          elevation: 0,
          borderWidth: 0,
          borderColor: "transparent",
          backgroundColor: "white",
          paddingVertical: 10,
          height: osName === "ios" ? 100 : 60,
          position: "absolute",
          bottom: 0,
        },
        tabBarShowLabel: false,
        tabBarBadgeStyle: {
          backgroundColor: "cornflowerblue",
          color: "white",
          fontSize: 10,
          fontFamily: FONTS.regular,
          maxHeight: 20,
          maxWidth: 20,
          marginLeft: 3,
        },
        tabBarVisibilityAnimationConfig: {
          hide: {
            animation: "timing",
          },
          show: {
            animation: "spring",
          },
        },
      }}
      initialRouteName="Home"
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          tabBarIcon: (props) => (
            <TabIcon
              {...props}
              title="Home"
              Icon={{
                name: "home",
                IconComponent: AntDesign,
              }}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="Notifications"
        component={Notifications}
        options={({ route }) => ({
          tabBarIcon: (props) => (
            <TabIcon
              {...props}
              title="Notifications"
              Icon={{
                name: "notifications-outline",
                IconComponent: Ionicons,
              }}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="Chats"
        component={Chats}
        options={({ route }) => ({
          tabBarIcon: (props) => (
            <TabIcon
              {...props}
              title="Chats"
              Icon={{
                name: "chatbubble-ellipses-outline",
                IconComponent: Ionicons,
              }}
            />
          ),
        })}
      />
    </Tabs.Navigator>
  );
};

export default AppTabs;
