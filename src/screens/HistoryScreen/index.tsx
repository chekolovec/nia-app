import * as React from "react";
import moment from "moment";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { ISurvey } from "../../redux/Surveys/reducer";
import { getSurveys } from "../../redux/Surveys/selectors";

import styles from "./styles";

export default () => {
  // surveys are stored locally on the user's device
  const surveys = useSelector(getSurveys);

  const renderItem = React.useCallback(
    ({ item }: { item: ISurvey }) => (
      <View style={styles.itemContainer}>
        <Text>{`How good sleep was: ${item.sleepScore}`}</Text>
        <Text>{`How good skin was: ${item.skinScore}`}</Text>
        <Text style={styles.dateText}>
          {moment(item?.date).format("DD.MM.YY HH:mm")}
        </Text>
      </View>
    ),
    []
  );

  const renderEmptyList = React.useCallback(
    () => <Text style={styles.emptyText}>No surveys have been saved</Text>,
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={surveys}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        style={styles.flatList}
        keyExtractor={(item) => item?.date?.toString()}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  );
};
