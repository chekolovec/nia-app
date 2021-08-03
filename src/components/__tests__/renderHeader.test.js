import { getStartHeader } from "../../navigation/BottomTabNavigator";

it("given evening hour should return 'Good evening'", () => {
  expect(getStartHeader(18)).toBe("Good evening");
});

it("given morning hour should return 'Good morning'", () => {
  expect(getStartHeader(9)).toBe("Good morning");
});

it("given afternoon hour should return 'Good afternoon'", () => {
  expect(getStartHeader(14)).toBe("Good afternoon");
});
