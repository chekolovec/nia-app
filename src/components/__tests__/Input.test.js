import * as React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";

import { Input } from "../Input";

it(`snapshots match`, () => {
  const tree = renderer
    .create(<Input title="Test Input title" onPress={() => {}} value={0} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("given a value Input should render it", () => {
  const mockFunc = jest.fn();
  const { getByTestId } = render(
    <Input title="Test Input title" onPress={mockFunc} value={5} />
  );
  const valueText = getByTestId("valueText");

  expect(valueText.props.children).toBe(5);
});
