import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Carousel from "./Carousel";

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

// smoke test
it('Carousel renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Carousel />, div); // Using defaultProps for simplicity
  ReactDOM.unmountComponentAtNode(div);
});

// snapshot test
it('Carousel renders correctly according to snapshot', () => {
  const tree = renderer
    .create(<Carousel />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
