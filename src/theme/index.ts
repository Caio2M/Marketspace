import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    produto: { 
        blue: "#364D9D", 
        blueLight: "#647AC7", 
        redLight: "#EE7979" 
    },
    base: { 
        gray_1: "#1A181B", 
        gray_2: "#3E3A40", 
        gray_3: "#5F5B62", 
        gray_4: "#9F9BA1",
        grat_5: "#D9D8DA",
        grat_6: "#EDECEE",
        grat_7: "#F7F7F8",
    },
  },
  fonts: {
    bold: "Karla_700Bold",
    regular: "Karla_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
});
