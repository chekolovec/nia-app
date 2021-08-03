import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { saveSurvey } from "../../redux/Surveys/actions";

import styles from "./styles";

export default () => {
  const [sleepScore, setSleepValue] = React.useState(0);
  const [skinScore, setSkinValue] = React.useState(0);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = React.useCallback(() => {
    dispatch(saveSurvey({ sleepScore, skinScore }));
    navigation.goBack();
  }, [sleepScore, skinScore]);

  return (
    <View style={styles.container}>
      <Input
        title="How was your sleep last night?"
        value={sleepScore}
        onChange={setSleepValue}
      />
      <Input
        title="How good is your skin condition?"
        value={skinScore}
        onChange={setSkinValue}
      />
      <Button title="Save" onPress={handleSubmit} />
    </View>
  );
};
