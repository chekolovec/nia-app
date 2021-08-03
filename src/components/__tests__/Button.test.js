import * as React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";

import { Button } from "../Button";

describe("test", () => {
  it(`snapshots match`, () => {
    const tree = renderer.create(<Button title={"Test title"} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

it("given a title Button component should render it", () => {
  const { getByTestId } = render(
    <Button title="Test title" onPress={() => {}} />
  );
  const title = getByTestId("titleText");

  expect(title).toBeDefined();
  expect(title.props.children).toBe("Test title");
});

it("when Button pushed onPress should be called", () => {
  const mockFunc = jest.fn();
  const { getByTestId } = render(
    <Button title="Test title" onPress={mockFunc} />
  );

  fireEvent.press(getByTestId("pressHandler"));

  expect(mockFunc).toHaveBeenCalled();
});
