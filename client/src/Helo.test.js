import React from 'react';
import ReactDOM from 'react-dom';
import Helo from './Helo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Helo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
