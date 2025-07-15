import { ColorValue, View } from "react-native";

import { styles } from "./styles";

type SeparatorProps = { color: ColorValue };

export function Separator({ color }: SeparatorProps) {
  return <View style={[styles.container, { backgroundColor: color }]} />;
}
