import { useCallback, useState, useEffect } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function useFont() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
          "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
          "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
        });
        setIsFontLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        setIsFontLoaded(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isFontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isFontLoaded]);

  return { isFontLoaded, onLayoutRootView };
}
