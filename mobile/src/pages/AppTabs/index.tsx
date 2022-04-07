import React from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { AppParamList } from "../../params";
import { RouteProp } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { FONTS } from "../../constants";
import { Home } from "../../screens/App";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import TabIcon from "../../components/TabIcon";
const Tabs = createBottomTabNavigator<AppParamList>();

export const tabBarStyles: any = {
  elevation: 0,
  borderWidth: 0,
  borderColor: "transparent",
  backgroundColor: "white",
  paddingVertical: 10,
  position: "absolute",
  bottom: 0,
};
const screenOptions:
  | BottomTabNavigationOptions
  | ((props: {
      route: RouteProp<AppParamList, keyof AppParamList>;
      navigation: any;
    }) => BottomTabNavigationOptions)
  | undefined = {
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    elevation: 0,
    borderWidth: 0,
    borderColor: "transparent",
    backgroundColor: "white",
    paddingVertical: 10,
    height: 60,
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
};
const AppTabs = () => {
  const theme = useSelector((state: any) => state.theme);
  const showTabBar = useSelector((state: any) => state.tabBar);
  return (
    <Tabs.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Tabs.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          tabBarVisible: getFocusedRouteNameFromRoute(route) !== "CreatePost",
          tabBarStyle:
            showTabBar === false
              ? {
                  display: "none",
                }
              : {
                  ...tabBarStyles,
                  backgroundColor: theme === "dark" ? "#333" : "white",
                },
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
    </Tabs.Navigator>
  );
};

export default AppTabs;
