import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { LOGO_MAIN } from "../../../../assets/logos";
import Container from "../../../components/Container/Container";
import { COLORS, FONTS } from "../../../constants";
import useDevice from "../../../hooks";
import { AuthNavProps } from "../../../params";

const TermsAndConditions: React.FC<AuthNavProps<"TermsAndConditions">> = ({
  navigation,
}) => {
  const { osName } = useDevice();
  return (
    <Container safeAreaView={osName === "ios"}>
      <View
        style={{
          flex: 1,

          padding: 10,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regularBold,
            textAlign: "center",
            fontSize: 20,
            color: COLORS.main,
            paddingBottom: 10,
            borderBottomColor: COLORS.main,
            borderBottomWidth: 1,
            marginBottom: 5,
          }}
        >
          Terms and Conditions
        </Text>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Image
              source={{ uri: Image.resolveAssetSource(LOGO_MAIN).uri }}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.regularBold,
                fontSize: 20,
                textShadowRadius: 5,
                textShadowColor: "lightseagreen",
                textShadowOffset: {
                  height: 2,
                  width: 2,
                },
                color: "white",
                zIndex: 1,
              }}
            >
              birds
            </Text>
            <Text
              style={{
                color: "gray",
                fontFamily: FONTS.regular,
              }}
            >
              ~ by crispengari
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              marginVertical: 10,
              fontFamily: FONTS.regular,
            }}
          >
            Welcome to birds an online free dating application. By using this
            application you are required to go with our Terms and Conditions.
            Violations of the TnC's that are going to be listed bellow may
            result in an your account being blocked.
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginVertical: 5,
              fontFamily: FONTS.regular,
            }}
          >
            To use this application you must have at least 18 years of age.
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginVertical: 5,
              fontFamily: FONTS.regular,
            }}
          >
            Any violence actions such as insults, scam messages, etc may result
            in your account being either banned or blocked forever.
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginVertical: 5,
              fontFamily: FONTS.regular,
            }}
          >
            By using this application you allow us to access the data that you
            shared through this app.
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginVertical: 5,
              fontFamily: FONTS.regular,
            }}
          >
            Your credentials will be secured so that no one can access your
            birds account privacy without your concern.
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginVertical: 5,
              fontFamily: FONTS.regular,
            }}
          >
            No nude content will be publicly displayed to friends, they will be
            managed by birds bots and displayed blurry. Note that these bots are
            powered by AI sometimes they miss-classify nude content.
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginVertical: 5,
              fontFamily: FONTS.regular,
            }}
          >
            Your private direct messages will be only private to you and the
            person you are chatting with.
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginVertical: 5,
              fontFamily: FONTS.regular,
            }}
          >
            We don't allow multiple device to use birds with the same
            credentials at the same time.
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginVertical: 5,
              fontFamily: FONTS.regular,
            }}
          >
            Posting something that promotes racism, bigotry, hatred or physical
            harm of any kind against any group or individual is an act of
            violence and is prohibited.
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginVertical: 5,
              fontFamily: FONTS.regular,
            }}
          >
            Create another account if we have already terminated your account,
            unless you have our permission.
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#f5f5f5",
              borderWidth: 1,
              borderColor: COLORS.main,
              width: "80%",
              marginVertical: 10,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 999,
              padding: 10,
              alignSelf: "center",
            }}
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text
              style={{
                color: COLORS.main,

                fontSize: 15,
                fontFamily: FONTS.regular,
              }}
            >
              Accept
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "80%",
              marginVertical: 10,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 999,
              padding: 10,
              alignSelf: "center",
              backgroundColor: COLORS.main,
            }}
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate("Landing");
            }}
          >
            <Text
              style={{
                color: "#f5f5f5",
                fontSize: 15,
                fontFamily: FONTS.regular,
              }}
            >
              Decline
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Container>
  );
};

export default TermsAndConditions;
