export const SAVE_SURVEY = "SAVE_SURVEY";

export const saveSurvey = (payload: {
  sleepScore: number;
  skinScore: number;
}) => ({
  type: SAVE_SURVEY,
  payload,
});
