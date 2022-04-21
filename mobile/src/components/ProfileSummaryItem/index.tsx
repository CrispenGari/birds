import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants";

interface Props {
  Icon: {
    family: any;
    name: string;
  };
  value: number;
  title: string;
}
const ProfileSummaryItem: React.FC<Props> = ({ Icon, title, value }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
      activeOpacity={0.7}
    >
      <Icon.family name={Icon.name} size={24} color={"gray"} />
      <Text
        style={{
          fontFamily: FONTS.regularBold,
          color: COLORS.main,
        }}
      >
        {value}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          color: "gray",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ProfileSummaryItem;
