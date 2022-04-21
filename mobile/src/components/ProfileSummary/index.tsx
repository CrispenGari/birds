import { View, Text } from "react-native";
import React from "react";
import ProfileSummaryItem from "../ProfileSummaryItem";
import { WIDTH } from "../../constants";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";

const ProfileSummary = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: WIDTH,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
      }}
    >
      <ProfileSummaryItem
        title={"matches"}
        value={3}
        Icon={{ family: MaterialCommunityIcons, name: "clover" }}
      />
      <ProfileSummaryItem
        title={"likes"}
        value={2}
        Icon={{ family: FontAwesome, name: "heartbeat" }}
      />
      <ProfileSummaryItem
        title={"dislikes"}
        value={2}
        Icon={{ family: FontAwesome5, name: "heart-broken" }}
      />
      <ProfileSummaryItem
        title={"liked"}
        value={19}
        Icon={{ family: AntDesign, name: "heart" }}
      />
    </View>
  );
};

export default ProfileSummary;
