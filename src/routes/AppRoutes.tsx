import { Button, useTheme, Text, Center } from "native-base";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Home } from "../screen/Home";
import { Sell } from "../screen/Sell";
import { TouchableOpacity } from "react-native";

import { House,  } from "phosphor-react-native";

type AppRoutes = {
  home: undefined;
  sell: undefined;
  logout: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[6];

  function LogoutComponent() {
    return null;
  }

  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { width: "100%" },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: () => <House color="black" size={10} />,
        }}
      />

      <Screen name="sell" component={Sell} options={{}} />

      <Screen
        name="logout"
        component={LogoutComponent}
        options={{
          tabBarButton: () => (
            <TouchableOpacity
              style={{ width: "28%" }}
              onPress={() => console.log("Deslogado")}
            >
              <Center>
                <Text>Sair</Text>
              </Center>
            </TouchableOpacity>
          ),
        }}
      />
    </Navigator>
  );
}
