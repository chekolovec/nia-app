import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { Action } from "redux";

import AsyncStorage from "@react-native-async-storage/async-storage";

import surveysReducer from "./Surveys/reducer";
import { ISurvey } from "./Surveys/reducer";

export interface AppState {
  surveys: ISurvey[];
}

export type ReduxAction<P = any> = Action<string> & { payload?: P };

export default () => {
  const rootReducer = combineReducers({
    surveys: surveysReducer,
  });
  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return { store, persistor };
};
