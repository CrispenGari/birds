import React from "react";
import { Animated, Image } from "react-native";
import { HEIGHT } from "../../constants";
const ITEM_WIDTH = 300;
const ITEM_HEIGHT = 400;

const VISIBLE_ITEMS: number = 3;
interface Props {
  scrollXAnimated: any;
  index: number;
  item: {
    id: number;
    name: string;
    image: any;
  };
}

const ProfileImage: React.FC<Props> = ({ item, scrollXAnimated, index }) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [40, 0, -90],
  });
  const scale = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [0.8, 1, 1.3],
  });
  const opacity = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
  });
  return (
    <Animated.View
      style={{
        position: "absolute",
        left: -ITEM_WIDTH / 2,
        shadowColor: "black",
        backgroundColor: "white",
        borderRadius: 14,
        shadowOffset: {
          height: 0,
          width: 0,
        },
        shadowRadius: 0,
        elevation: 10,
        shadowOpacity: 1,
        opacity,
        transform: [
          {
            translateX,
          },
          { scale },
        ],
      }}
    >
      <Image
        style={{
          width: ITEM_WIDTH,
          height: HEIGHT * 0.8 * 0.45,
          resizeMode: "cover",
        }}
        source={{ uri: Image.resolveAssetSource(item.image).uri }}
      />
    </Animated.View>
  );
};

export default ProfileImage;
