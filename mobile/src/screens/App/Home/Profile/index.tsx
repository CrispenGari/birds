import { View, Text, Image } from "react-native";
import React from "react";
import { HomeStackNavProps } from "../../../../params";
import { LOGO_MAIN } from "../../../../../assets/logos";
import ProfileAvatar from "../../../../components/ProfileAvatar";
import { ScrollView } from "react-native-gesture-handler";
import ProfileSummary from "../../../../components/ProfileSummary";

const Profile: React.FC<HomeStackNavProps<"Profile">> = ({ navigation }) => {
  React.useLayoutEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      navigation.setOptions({
        title: "Profile",
        headerRight: () => <></>,
      });
    }
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <ScrollView contentContainerStyle={{}} bounces={false} bouncesZoom={false}>
      <ProfileAvatar navigation={navigation} />
      <ProfileSummary />
      {/* Names */}
      {/* Additional Info  */}
      {/* Changing passwords */}
    </ScrollView>
  );
};

export default Profile;
