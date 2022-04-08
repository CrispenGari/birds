import {
  View,
  Text,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInput,
  TextInputSubmitEditingEventData,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants";
import { Input as I } from "react-native-elements";
import { IconNode } from "react-native-elements/dist/icons/Icon";
interface Props {
  placeholder: string;
  type?: string;
  errorMessage?: string;
  onChangeText?: ((text: string) => void) | undefined;
  value?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  inputStyles?: any;
  maxLength?: number;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  applyPad?: boolean;
  rightIcon?: IconNode | undefined;
  ref?: React.Ref<TextInput> | undefined;
  textAlign?: "left" | "center" | "right" | undefined;
}
const Input: React.FC<Props> = ({
  placeholder,
  type,
  onChangeText,
  value,
  keyboardType,
  errorMessage,
  inputStyles,
  maxLength,
  onSubmitEditing,
  rightIcon,
  ref,
  applyPad,
  textAlign,
}) => {
  return (
    <View
      style={{
        width: "90%",
        marginVertical: 5,
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 10,
      }}
    >
      <I
        placeholder={placeholder}
        numberOfLines={1}
        inputContainerStyle={{
          borderColor: "transparent",
          borderRadius: 5,
          paddingRight: 10,
          backgroundColor: "lightgray",
        }}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        rightIcon={rightIcon}
        ref={ref}
        textAlign={textAlign}
        maxLength={maxLength}
        label={errorMessage}
        labelStyle={{
          fontFamily: FONTS.regular,
          color: "#E44753",
          fontSize: 12,
          fontWeight: "normal",
        }}
        inputStyle={{
          paddingHorizontal: 10,
          flex: 1,
          margin: 0,
          fontSize: 15,
          fontFamily: FONTS.regular,
          width: 20,
          ...inputStyles,
        }}
        containerStyle={{
          margin: 0,
          paddingHorizontal: 0,
          maxHeight: 40,
          borderRadius: 5,
          marginBottom: applyPad ? 17 : 0,
        }}
        style={{
          flex: 1,

          borderRadius: 5,
        }}
        errorStyle={{
          fontFamily: FONTS.regular,
        }}
        secureTextEntry={type === "password"}
      />
    </View>
  );
};

export default Input;
