import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { View } from "react-native";

import { Button } from "../../components/Button";
import styles from "./styles";

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Take a survey"
        onPress={() => navigation.navigate("SurveyScreen")}
      />
      <View style={styles.separator} />
    </View>
  );
};
