import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS } from "../../constants";

interface IconI {
  IconComponent: any;
  name: string;
}
interface Props {
  dot?: boolean;
  title?: string;
  Icon?: IconI;
  focused: boolean;
  color?: string;
  size?: number;
}
const TabIcon: React.FC<Props> = ({ title, focused, Icon, dot }) => {
  const Badge = () => {
    return (
      <View
        style={{
          position: "absolute",
          width: 15,
          height: 15,
          backgroundColor: COLORS.main,
          top: -2,
          right: 3,
          borderRadius: 15,
          zIndex: 10,
        }}
      ></View>
    );
  };
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        },
      ]}
    >
      {dot ? <Badge /> : null}

      {Icon ? (
        <Icon.IconComponent
          name={Icon.name}
          size={30}
          color={focused ? COLORS.main : "gray"}
        />
      ) : null}
      <Text
        style={{
          fontFamily: FONTS.regular,
          color: focused ? COLORS.main : "gray",
        }}
      >
        {title?.toLowerCase()}
      </Text>
    </View>
  );
};

export default TabIcon;
