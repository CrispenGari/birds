import React from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";
import Input from "../../../components/Input/Input";
import { LOGO_MAIN } from "../../../../assets/logos";
import AuthKeyboardAvoidingView from "../../../components/AuthKeyboardAvoidingView/AuthKeyboardAvoidingView";
import { WIDTH, FONTS, COLORS } from "../../../constants";
import { AuthNavProps } from "../../../params";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native-elements";

const VerifyEmail: React.FC<AuthNavProps<"VerifyEmail">> = ({
  navigation,
  route,
}) => {
  const [password, setPassword] = React.useState<string>();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const saveInfo = async () => {
    navigation.navigate("PersonalInfo");
  };
  return (
    <AuthKeyboardAvoidingView>
      <View
        style={{ width: WIDTH, justifyContent: "center", alignItems: "center" }}
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
          Verify your Email
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
          please open your emails you will see a 6 digit verification code for
          your account creation.
        </Text>
        <Input
          placeholder="000-000"
          value={username}
          errorMessage={""}
          textAlign={"center"}
          keyboardType={"phone-pad"}
          onChangeText={(text) => setUsername(text)}
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
          title="next"
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
          onPress={saveInfo}
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
    </AuthKeyboardAvoidingView>
  );
};

export default VerifyEmail;
