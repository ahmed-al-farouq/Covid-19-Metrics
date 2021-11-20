import React from 'react';
import { Provider } from 'react-redux';
import { render as rltRender } from '@testing-library/react';
import Home from '../components/Home';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/reduxConfig';

const render = (component) => rltRender(
  <Provider store={store}>
    {component}
  </Provider>,
);
describe('test Home component', () => {
  let component;
  beforeEach(() => {
    component = render(<Home />);
  });

  it('test image alt', () => {
    const image = component.getByTestId('img');
    expect(image.alt).toBe('World');
  });

  it('test continent name', () => {
    const name = component.getByTestId('continent');
    expect(name.textContent).toBe('The whole world');
  });
});
