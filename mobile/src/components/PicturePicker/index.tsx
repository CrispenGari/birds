import { View, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { COLORS } from "../../constants";
import * as ImagePicker from "expo-image-picker";
import { usePermission } from "../../hooks";

interface Props {
  setImage: React.SetStateAction<React.Dispatch<any>>;
}
const PicturePicker: React.FC<Props> = () => {
  const [image, setImage] = React.useState<any>(null);
  const { permission } = usePermission();
  const pickImage = async () => {
    if (permission) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [5, 7],
        quality: 1,
        allowsMultipleSelection: false,
      });
      if (result.cancelled) {
        return;
      }
      return setImage(result);
    } else {
      return;
    }
  };

  React.useEffect(() => {
    let mounted: boolean = true;

    if (mounted) {
      setImage(image);
    }
    return () => {
      mounted = false;
    };
  }, [image]);
  return (
    <View
      style={{
        borderWidth: 1,
        flex: 1,
        margin: 10,

        borderStyle: "dashed",
        borderColor: COLORS.main,
        borderRadius: 5,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {image ? (
        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 5,
          }}
          onPress={pickImage}
        >
          <Image
            source={image}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 5,
            }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={pickImage}
          style={{
            backgroundColor: COLORS.main,
            borderRadius: 100,
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="add-a-photo" size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PicturePicker;
