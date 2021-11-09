import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

export default theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.white
    }
}