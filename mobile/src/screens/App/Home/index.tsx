import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { LOGO_MAIN } from "../../../../assets/logos";
import { FONTS, COLORS } from "../../../constants";
import { AppNavProps, HomeStackParamList } from "../../../params";
import { PersonalInfo, Pictures } from "../../Common";
import Cards from "./Cards";
import Profile from "./Profile";

const Stack = createStackNavigator<HomeStackParamList>();
const Home: React.FC<AppNavProps<"Home">> = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "Matches",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: FONTS.regular,
          color: COLORS.main,
        },
        // headerLeft: () => (
        //   <Image
        //     source={{ uri: Image.resolveAssetSource(LOGO_MAIN).uri }}
        //     style={{
        //       width: 45,
        //       height: 45,
        //       tintColor: COLORS.main,
        //     }}
        //   />
        // ),
        headerStyle: {
          elevation: 0,
          borderBottomColor: "transparent",
          borderWidth: 0,
        },
        headerBackTitleStyle: {
          fontSize: 12,
          fontFamily: FONTS.regular,
        },
        headerRightContainerStyle: {
          paddingHorizontal: 5,
        },
      }}
      initialRouteName="Profile"
    >
      <Stack.Screen name="Cards" component={Cards} />
      <Stack.Screen name="AppEditPersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AppEditPictures" component={Pictures} />
    </Stack.Navigator>
  );
};

export default Home;
