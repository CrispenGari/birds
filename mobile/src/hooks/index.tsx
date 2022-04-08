import React from "react";
import { Platform } from "react-native";

import * as ImagePicker from "expo-image-picker";
export const usePermission = () => {
  const [permission, setPermission] = React.useState(true);

  React.useEffect(() => {
    let mounted: boolean = true;
    (async () => {
      if (mounted) {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (granted) {
          return;
        }
      }
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (granted && status === "granted") {
        return setPermission(true);
      } else {
        return setPermission(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return { permission };
};

export default function useDevice() {
  const [osName, setOsName] = React.useState<string | null>(null);
  React.useEffect(() => {
    let mounted: boolean = !false;
    if (mounted) {
      setOsName(Platform.OS);
    }
    return () => {
      mounted = false;
    };
  }, []);
  return {
    osName,
  };
}
