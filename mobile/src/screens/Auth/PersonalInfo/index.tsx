import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { LOGO_MAIN } from "../../../../assets/logos";
import { WIDTH, FONTS, COLORS } from "../../../constants";
import { AuthNavProps } from "../../../params";
import { Button } from "react-native-elements";
import Select from "../../../Select";
import DateTimePicker from "../../../components/DateTimePicker";
const PersonalInfo: React.FC<AuthNavProps<"PersonalInfo">> = ({
  navigation,
  route,
}) => {
  const [gender, setGender] = React.useState("male");
  const [date, setDate] = React.useState<any>({});
  const [showMe, setShowMe] = React.useState(
    gender === "male" ? "girls" : "boys"
  );

  console.log(date);

  const saveInfo = async () => {
    navigation.replace("Pictures");
  };
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 50,
      }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
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
          Personal Information
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
          Please provide us with the following information so that we can be
          able to find best matches for you.
        </Text>
        {/* Gender */}

        <SelectWrapper title="What is your Gender?">
          <Select
            data={["male", "female"]}
            defaultValue={gender}
            width={200}
            setValue={setGender}
          />
        </SelectWrapper>

        {/* Show me (girls | boys) */}
        <SelectWrapper title="What are you interested in?">
          <Select
            data={["girls", "boys"]}
            defaultValue={showMe}
            width={200}
            setValue={setShowMe}
          />
        </SelectWrapper>

        {/* DOB */}
        <SelectWrapper title="What is your birthday?">
          <DateTimePicker setDate={setDate} />
        </SelectWrapper>

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
    </ScrollView>
  );
};

export default PersonalInfo;

const SelectWrapper: React.FC<{
  title: string;
}> = ({ title, children }) => (
  <View
    style={{
      alignItems: "center",
      marginBottom: 10,
    }}
  >
    <Text
      style={{
        fontFamily: FONTS.regular,
        marginBottom: 5,
      }}
    >
      {title}
    </Text>
    {children}
  </View>
);
