import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import { HomeStackNavProps } from "../../../../params";
import useDevice from "../../../../hooks";
import { LOGO_MAIN } from "../../../../../assets/logos";
import {
  Directions,
  FlingGestureHandler,
  State,
} from "react-native-gesture-handler";
import DATA from "../../../../../assets/images";
import Card from "../../../../components/Card";

import data from "../../../../../assets/images";
const Cards: React.FC<HomeStackNavProps<"Cards">> = ({ navigation, route }) => {
  const { osName } = useDevice();
  React.useLayoutEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      navigation.setOptions({
        title: "Matches",
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Image
              source={{ uri: Image.resolveAssetSource(data[0].image).uri }}
              style={{
                width: 45,
                height: 45,
                borderRadius: 45,
              }}
            />
          </TouchableOpacity>
        ),
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

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
    if (index === data.length - 2) {
      setData([...data, ...data]);
    }
  }, [index]);
  return (
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
          <StatusBar />
          <FlatList
            data={data}
            horizontal
            pagingEnabled
            bounces={false}
            scrollEnabled={false}
            inverted
            removeClippedSubviews={false}
            contentContainerStyle={{
              justifyContent: "center",
              padding: 20,
              flex: 1,
              // marginTop: 50,
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
              <Card
                item={item}
                index={index}
                scrollXAnimated={scrollXAnimated}
              />
            )}
          />
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default Cards;
