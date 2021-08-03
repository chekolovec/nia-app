import { ReduxAction } from "..";
import { SAVE_SURVEY } from "./actions";

export interface ISurvey {
  sleepScore: number;
  skinScore: number;
  date: Date;
}

const initialState: ISurvey[] = [];

export default (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case SAVE_SURVEY:
      return [
        ...state,
        {
          skinScore: action?.payload?.skinScore,
          sleepScore: action?.payload?.sleepScore,
          date: new Date(),
        },
      ];

    default:
      return state;
  }
};
