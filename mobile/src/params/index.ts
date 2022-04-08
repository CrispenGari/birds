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
  ForgotPassword: undefined;
  ResetPassword: undefined;
  AuthProfile: {
    userId: number;
  };
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
  Profile: {
    userId: number;
  };
  Notifications: undefined;
  Settings: undefined;
};

export type AppNavProps<T extends keyof AppParamList> = {
  navigation: BottomTabNavigationProp<AppParamList, T>;
  route: RouteProp<AppParamList, T>;
};

// Home Param List

export type HomeStackParamList = {
  Feed: undefined;
};

export type HomeStackNavProps<T extends keyof HomeStackParamList> = {
  navigation: BottomTabNavigationProp<HomeStackParamList, T>;
  route: RouteProp<HomeStackParamList, T>;
};

// Feed Stack
export type FeedStackParamList = {
  Posts: undefined;
  Profile: {
    userId: number;
  };
  CreatePost: undefined;
  Comments: {
    posts: any;
  };
};

export type FeedStackNavProps<T extends keyof FeedStackParamList> = {
  navigation: StackNavigationProp<FeedStackParamList, T>;
  route: RouteProp<FeedStackParamList, T>;
};

// Settings Stack
export type SettingsStackParamList = {
  Main: undefined;
  EditProfile: undefined;
  Profile: {
    userId: number;
  };
  ChangeField: {
    field: string;
  };
};

export type SettingsStackNavProps<T extends keyof SettingsStackParamList> = {
  navigation: StackNavigationProp<SettingsStackParamList, T>;
  route: RouteProp<SettingsStackParamList, T>;
};

// Notification stack
// Settings Stack
export type NotificationStackParamList = {
  Main: undefined;
};

export type NotificationStackNavProps<
  T extends keyof NotificationStackParamList
> = {
  navigation: StackNavigationProp<NotificationStackParamList, T>;
  route: RouteProp<SettingsStackParamList, T>;
};
