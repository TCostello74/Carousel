
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

// Smoke Test
it('Card renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card caption="test" src="test.jpg" currNum={1} totalNum={5} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Snapshot Test
it('Card renders correctly according to snapshot', () => {
  const tree = renderer
    .create(<Card caption="test" src="test.jpg" currNum={1} totalNum={5} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
