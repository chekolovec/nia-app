import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import StartScreen from "../screens/StartScreen";
import SurveyScreen from "../screens/SurveyScreen";
import HistoryScreen from "../screens/HistoryScreen";
import styles from "./styles";

const BottomTab = createBottomTabNavigator();

export const getStartHeader = (hours: number) => {
  if (hours <= 5 && hours >= 0) {
    return "Good night";
  }
  if (hours <= 11 && hours >= 6) {
    return "Good morning";
  }
  if (hours <= 17 && hours >= 12) {
    return "Good afternoon";
  }
  if (hours <= 23 && hours >= 18) {
    return "Good evening";
  }
  return "Hello";
};

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ labelStyle: styles.label }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{ tabBarLabel: "Survey" }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{ tabBarLabel: "History" }}
      />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  const hours = new Date().getHours();
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{ headerTitle: getStartHeader(hours) }}
      />
      <TabOneStack.Screen
        name="SurveyScreen"
        component={SurveyScreen}
        options={{ headerTitle: "Survey", headerBackTitleVisible: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ headerTitle: "History" }}
      />
    </TabTwoStack.Navigator>
  );
}
