import React from "react";
import { Pressable, Text } from "react-native";

import styles from "./styles";

interface IProps {
  title: string;
  onPress: () => void;
}

export const Button = ({ title, onPress }: IProps) => {
  return (
    <Pressable
      testID="pressHandler"
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Text testID="titleText" style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
};
