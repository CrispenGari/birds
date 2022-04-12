import React from "react";
import { Animated, Image, Text, View, TouchableOpacity } from "react-native";
import { COLORS, FONTS, HEIGHT, WIDTH } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const VISIBLE_ITEMS: number = 3;
const ITEM_WIDTH = WIDTH * 0.9;
const ITEM_HEIGHT = HEIGHT * 0.6;

interface Props {
  scrollXAnimated: any;
  index: number;
  item: {
    id: number;
    name: string;
    image: any;
  };
}

const Card: React.FC<Props> = ({ item, scrollXAnimated, index }) => {
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
      <View
        style={{
          backgroundColor: "white",
          shadowColor: "black",

          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          padding: 10,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          shadowRadius: 0,
          elevation: 10,
          shadowOpacity: 1,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regularBold,
            fontSize: 15,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            color: "gray",
            fontSize: 12,
          }}
        >
          31 years
        </Text>
      </View>
      <Image
        style={{
          width: ITEM_WIDTH,
          height: ITEM_HEIGHT * 0.8,
          resizeMode: "cover",
        }}
        source={{ uri: Image.resolveAssetSource(item.image).uri }}
      />
      <View
        style={{
          backgroundColor: "white",
          shadowColor: "black",
          borderBottomLeftRadius: 14,
          borderBottomRightRadius: 14,
          padding: 10,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          shadowRadius: 0,
          elevation: 10,
          shadowOpacity: 1,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regular,
            color: "gray",
          }}
        >
          location (2km away)
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            color: "gray",
          }}
        >
          status
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
          }}
        >
          <TouchableOpacity activeOpacity={0.7}>
            <Ionicons name="heart-outline" size={28} color={COLORS.main} />
            {/* <Ionicons name="heart-sharp" size={28} color={COLORS.main} /> */}
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Ionicons
              name="ios-heart-dislike-outline"
              size={28}
              color={COLORS.main}
            />
            {/* <Ionicons name="ios-heart-dislike-sharp" size={28} color={COLORS.main} /> */}
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default Card;
