import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Authentication Param Lists
export type AuthParamList = {
  Login: undefined;
  Register: undefined;
  Landing: undefined;
  PersonalInfo: undefined;
  Pictures: undefined;
  TermsAndConditions: undefined;
  ResetPassword: undefined;
  RequestForgotPassword: undefined;
  VerifyEmail: {
    username: string;
  };
};
export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};

//  Application Param Lists
export type AppParamList = {
  Home: undefined;
  Notifications: undefined;
  Chats: undefined;
};

export type AppNavProps<T extends keyof AppParamList> = {
  navigation: BottomTabNavigationProp<AppParamList, T>;
  route: RouteProp<AppParamList, T>;
};

// Home Param List

export type HomeStackParamList = {
  Cards: undefined;
  Profile: undefined;
  EditProfile: undefined;
};

export type HomeStackNavProps<T extends keyof HomeStackParamList> = {
  navigation: BottomTabNavigationProp<HomeStackParamList, T>;
  route: RouteProp<HomeStackParamList, T>;
};

// Chats Param List

export type ChatsStackParamList = {
  ChatsMain: undefined;
  Profile: undefined;
  Chat: undefined;
};

export type ChatsStackNavProps<T extends keyof ChatsStackParamList> = {
  navigation: BottomTabNavigationProp<ChatsStackParamList, T>;
  route: RouteProp<ChatsStackParamList, T>;
};
// Notification stack
export type NotificationsStackParamList = {
  NotificationsMain: undefined;
  Profile: undefined;
};

export type NotificationsStackNavProps<
  T extends keyof NotificationsStackParamList
> = {
  navigation: BottomTabNavigationProp<NotificationsStackParamList, T>;
  route: RouteProp<NotificationsStackParamList, T>;
};
