import { View, Text, Image } from "react-native";
import React from "react";
import { HomeStackNavProps } from "../../../../params";
import { LOGO_MAIN } from "../../../../../assets/logos";

const Profile: React.FC<HomeStackNavProps<"Profile">> = ({ navigation }) => {
  React.useLayoutEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      navigation.setOptions({
        title: "Profile",
        headerRight: () => (
          <Image
            source={{ uri: Image.resolveAssetSource(LOGO_MAIN).uri }}
            style={{
              width: 45,
              height: 45,
              borderRadius: 45,
            }}
          />
        ),
      });
    }
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
