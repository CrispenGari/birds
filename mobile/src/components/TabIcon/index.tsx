import React from "react";
import { View, Text, Image } from "react-native";
import { FONTS } from "../../constants";

interface IconI {
  IconComponent: any;
  name: string;
}
interface Props {
  dot?: boolean;
  title?: string;
  Icon?: IconI;
  avatar?: any;
  focused: boolean;
  color?: string;
  size?: number;
  isCreate?: boolean;
}
const TabIcon: React.FC<Props> = ({
  title,
  focused,
  Icon,
  avatar,
  dot,
  isCreate,
}) => {
  const Badge = () => {
    return (
      <View
        style={{
          position: "absolute",
          width: 15,
          height: 15,
          backgroundColor: "cornflowerblue",
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
          size={!isCreate ? 30 : 40}
          color={focused ? "cornflowerblue" : "gray"}
        />
      ) : (
        <Image
          source={{ uri: avatar }}
          style={{
            width: 45,
            height: 45,
            borderRadius: 50,
          }}
        />
      )}
    </View>
  );
};

export default TabIcon;
