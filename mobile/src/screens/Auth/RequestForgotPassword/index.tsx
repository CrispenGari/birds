import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Input from "../../../components/Input/Input";
import { LOGO_MAIN } from "../../../../assets/logos";
import AuthKeyboardAvoidingView from "../../../components/AuthKeyboardAvoidingView/AuthKeyboardAvoidingView";
import { WIDTH, FONTS, COLORS } from "../../../constants";
import { AuthNavProps } from "../../../params";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const RequestForgotPassword: React.FC<
  AuthNavProps<"RequestForgotPassword">
> = ({ navigation, route }) => {
  const [email, setEmail] = React.useState("");
  const requestForgotPasswordEmail = async () => {
    navigation.navigate("ResetPassword");
  };
  return (
    <AuthKeyboardAvoidingView>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 50,
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: WIDTH,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: Image.resolveAssetSource(LOGO_MAIN).uri }}
            style={{
              width: 90,
              height: 90,
              marginBottom: 20,
              tintColor: COLORS.main,
            }}
          />
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: 25,
              marginBottom: 10,
            }}
          >
            Forgot Password
          </Text>
          <Text
            style={{
              marginHorizontal: 10,
              fontFamily: FONTS.regular,
              alignSelf: "center",
              textAlign: "center",
              color: COLORS.main,
              marginVertical: 10,
            }}
          >
            the password reset code will be sent to this email.
          </Text>
          <Input
            placeholder="email address"
            value={email}
            errorMessage={""}
            onChangeText={(text) => setEmail(text)}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                borderBottomColor: COLORS.main,
                borderBottomWidth: 1,
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.regular,
                marginHorizontal: 10,
                color: COLORS.main,
              }}
            >
              controls
            </Text>
            <View
              style={{
                flex: 1,
                borderBottomColor: COLORS.main,
                borderBottomWidth: 1,
              }}
            />
          </View>
          <Button
            type="outline"
            title="request"
            containerStyle={{
              width: "90%",
              borderRadius: 999,
              marginVertical: 20,
            }}
            buttonStyle={{
              backgroundColor: "white",
              width: "100%",
              alignItems: "center",
              borderColor: COLORS.main,
              borderRadius: 999,
              borderWidth: 1,
            }}
            titleStyle={{
              fontSize: 16,
              fontFamily: FONTS.regular,
              color: COLORS.main,
            }}
            onPress={requestForgotPasswordEmail}
          />
          <View
            style={{
              marginVertical: 20,
              borderTopWidth: 1,
              borderTopColor: "lightgray",
              width: "90%",
            }}
          />
          <Text
            style={{
              fontSize: 15,
              fontFamily: FONTS.regular,
              color: "black",
            }}
          >
            already have an account?
          </Text>
          <Button
            type="outline"
            title="login"
            onPress={() => navigation.navigate("Login")}
            containerStyle={{
              width: "90%",
              borderRadius: 999,
              marginVertical: 20,
            }}
            buttonStyle={{
              width: "100%",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 999,
              borderColor: COLORS.main,
            }}
            titleStyle={{
              fontSize: 16,
              fontFamily: FONTS.regular,
              color: COLORS.main,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              fontFamily: FONTS.regular,
              color: "black",
            }}
          >
            new to birds app?
          </Text>
          <Button
            type="outline"
            title="register"
            onPress={() => navigation.navigate("Register")}
            containerStyle={{
              width: "90%",
              borderRadius: 999,
              marginVertical: 20,
            }}
            buttonStyle={{
              width: "100%",
              alignItems: "center",
              backgroundColor: COLORS.main,
              borderRadius: 999,
              borderColor: "transparent",
            }}
            titleStyle={{
              fontSize: 16,
              fontFamily: FONTS.regular,
              color: "white",
            }}
          />
        </View>
      </ScrollView>
    </AuthKeyboardAvoidingView>
  );
};

export default RequestForgotPassword;
