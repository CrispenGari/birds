import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  SafeAreaView,
  FlatList,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS, HEIGHT, WIDTH } from "../../constants";
import {
  Directions,
  FlingGestureHandler,
  State,
} from "react-native-gesture-handler";
import DATA from "../../../assets/images";
import ProfileImage from "../ProfileImage";
const ProfileAvatar = () => {
  const [data, setData] = React.useState(DATA);
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState<number>(0);

  const setActiveIndex = React.useCallback((activeIndex) => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  }, []);

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  }, []);

  React.useEffect(() => {
    if (index === data.length) {
      setIndex(0);
    }
  }, [index]);
  return (
    <View
      style={{
        height: HEIGHT * 0.45,
        paddingTop: 5,
        alignItems: "center",
        backgroundColor: COLORS.main,
        width: WIDTH,
      }}
    >
      <FlingGestureHandler
        key="left"
        direction={Directions.LEFT}
        onHandlerStateChange={(event) => {
          if (event.nativeEvent.state === State.END) {
            if (index === data.length - 1) {
              return;
            }
            setActiveIndex(index + 1);
          }
        }}
      >
        <FlingGestureHandler
          key="right"
          direction={Directions.RIGHT}
          onHandlerStateChange={(event) => {
            if (event.nativeEvent.state === State.END) {
              if (index === 0) {
                return;
              }
              setActiveIndex(index - 1);
            }
          }}
        >
          <SafeAreaView
            style={{
              flex: 1,
            }}
          >
            <FlatList
              data={data}
              horizontal
              pagingEnabled
              bounces={false}
              style={{
                width: 300,
              }}
              scrollEnabled={false}
              inverted
              removeClippedSubviews={false}
              contentContainerStyle={{
                justifyContent: "center",
                padding: 20,
                flex: 1,
                width: WIDTH,
              }}
              CellRendererComponent={({
                item,
                style,
                index,
                children,
                ...props
              }) => {
                const styles = [style, { zIndex: data.length - index }];
                return (
                  <View index={index} style={styles} {...props}>
                    {children}
                  </View>
                );
              }}
              keyExtractor={(_, index) => String(index)}
              renderItem={({ item, index }) => (
                <ProfileImage
                  item={item}
                  index={index}
                  scrollXAnimated={scrollXAnimated}
                />
              )}
            />
          </SafeAreaView>
        </FlingGestureHandler>
      </FlingGestureHandler>
      <LinearGradient
        colors={["black", "rgba(0, 0, 0, .0)"]}
        style={{
          position: "absolute",
          bottom: 0,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        start={{
          x: 0,
          y: 1,
        }}
        end={{
          x: 0,
          y: 0,
        }}
      >
        <Text
          style={{
            marginVertical: 10,
            width: "90%",
            textAlign: "center",
            fontFamily: FONTS.regular,
            color: "white",
          }}
        >
          {`${index + 1} / ${DATA.length}`}
        </Text>
      </LinearGradient>
    </View>
  );
};

export default ProfileAvatar;
