import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { COLORS, FONTS } from "../../constants";

interface Props {
  data: string[] | number[];
  defaultValue: string | number;
  setValue: React.SetStateAction<React.Dispatch<string>>;

  width: number;
}
const Select: React.FC<Props> = ({ data, defaultValue, setValue, width }) => {
  const selectDropdownRef = React.useRef<SelectDropdown | any>();

  return (
    <SelectDropdown
      ref={selectDropdownRef}
      data={data}
      onSelect={(selectedItem) => {
        setValue(selectedItem);
      }}
      defaultValue={defaultValue}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
      renderCustomizedButtonChild={(item) => (
        <TouchableOpacity
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 0,
          }}
          activeOpacity={0.7}
          onPress={() => selectDropdownRef?.current?.openDropdown()}
        >
          <Text
            style={{
              fontFamily: FONTS.regular,
              color: "#333",
            }}
          >
            {item}
          </Text>
          <Entypo name="chevron-small-down" size={24} color={"#333"} />
        </TouchableOpacity>
      )}
      buttonStyle={{
        backgroundColor: "#fff",
        borderRadius: 5,
        height: 35,
        borderWidth: 1,
        borderColor: COLORS.main,
        width: width,
      }}
      rowStyle={{
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#333",
      }}
      rowTextStyle={{}}
      renderCustomizedRowChild={(item, index) => (
        <Text
          style={{
            color: "#333",
            fontFamily: FONTS.regular,
            fontSize: 12,
            textAlign: "center",
          }}
        >
          {item}
        </Text>
      )}
    />
  );
};

export default Select;
