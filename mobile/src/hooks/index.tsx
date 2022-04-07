import React from "react";
import { Platform } from "react-native";
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
