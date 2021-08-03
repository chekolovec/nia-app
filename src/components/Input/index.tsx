import React from "react";
import Slider from "@react-native-community/slider";
import { Text, View } from "react-native";

import styles from "./styles";

interface IProps {
  title: string;
  onChange: (value: number) => void;
  value: number;
}

export const Input = ({ title, onChange, value }: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.sliderContainer}>
        <View style={styles.badgeContainer}>
          <Text>0</Text>
          <Text>Bad</Text>
        </View>
        <View style={styles.sliderWrapper}>
          <Text testID="valueText">{value}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={10}
            step={1}
            onValueChange={onChange}
            value={value}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>
        <View style={styles.badgeContainer}>
          <Text>10</Text>
          <Text>Good</Text>
        </View>
      </View>
    </View>
  );
};
