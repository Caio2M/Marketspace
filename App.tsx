import React from "react";
import { NativeBaseProvider, View } from "native-base";
import { THEME } from "./src/theme";
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from "@expo-google-fonts/karla";
import { StatusBar } from "expo-status-bar";

import { Loading } from "./src/components/Loading";
import { AppRoutes } from "./src/routes/AppRoutes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <NavigationContainer>
        {fontsLoaded ? <AppRoutes /> : <Loading />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
