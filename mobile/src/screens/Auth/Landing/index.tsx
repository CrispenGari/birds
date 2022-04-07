import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS, WIDTH } from "../../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { AuthNavProps } from "../../../params";
import { LOGO_MAIN } from "../../../../assets/logos";
import useDevice from "../../../hooks";
import Container from "../../../components/Container/Container";
const Landing: React.FC<AuthNavProps<"Landing">> = ({ navigation }) => {
  const { osName } = useDevice();
  console.log(osName);
  return (
    <Container hidden>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.main,
        }}
      >
        <View
          style={{
            flex: 0.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: Image.resolveAssetSource(LOGO_MAIN).uri }}
            style={{
              width: 100,
              height: 100,
              tintColor: "white",
              marginBottom: 10,
            }}
          />

          <Text
            style={{
              fontFamily: FONTS.regularBold,
              fontSize: 40,
              textShadowRadius: 5,
              textShadowColor: "lightseagreen",
              textShadowOffset: {
                height: 2,
                width: 2,
              },
              color: "white",
              zIndex: 1,
              marginBottom: 40,
            }}
          >
            birds
          </Text>
          <LinearGradient
            colors={["black", "rgba(0, 0, 0, .0)"]}
            style={{
              position: "absolute",
              bottom: 0,
              height: 150,
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
              Welcome to birds! This is an amazing free dating application for
              adults.
            </Text>
          </LinearGradient>
        </View>
        <View
          style={{
            flex: 0.5,
            backgroundColor: "#f5f5f5",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: osName === "ios" ? 15 : 0,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: WIDTH,
              flex: 1,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Login")}
              style={[
                styles.button,
                {
                  backgroundColor: "#f5f5f5",
                  borderWidth: 1,
                  borderColor: COLORS.main,
                },
              ]}
            >
              <Text
                style={[
                  styles.button__text,
                  {
                    color: COLORS.main,
                  },
                ]}
              >
                login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button]}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={[styles.button__text]}>register</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.regular,
                textAlign: "center",
              }}
            >
              By using this application you are automatically accepting Terms
              and Conditions.
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                marginVertical: 10,
              }}
              onPress={() => navigation.navigate("TermsAndConditions")}
            >
              <Text
                style={{
                  color: COLORS.main,
                  fontFamily: FONTS.regular,
                }}
              >
                Terms and Conditions.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Landing;

const styles = StyleSheet.create({
  button__text: {
    color: "white",
    fontSize: 15,
    fontFamily: FONTS.regular,
  },
  button: {
    width: "80%",
    marginVertical: 10,
    backgroundColor: COLORS.main,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 999,
    padding: 10,
  },
});
