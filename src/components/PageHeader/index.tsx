import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/theme";
import { styles } from "./styles";

type Props = {
  title: string;
  subtitle?: string;
  rightButton?: {
    onPress: () => void;
    icon: keyof typeof MaterialIcons.glyphMap;
  };
};

export function PageHeader({ title, subtitle, rightButton }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} onPress={router.back}>
          <MaterialIcons name="arrow-back" size={24} color={colors.black} />
        </TouchableOpacity>

        {rightButton && (
          <TouchableOpacity onPress={rightButton.onPress}>
            <MaterialIcons
              name={rightButton.icon}
              size={24}
              color={colors.gray[500]}
            />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}
