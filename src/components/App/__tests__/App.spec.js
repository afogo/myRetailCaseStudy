import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App.jsx';

configure({ adapter: new Adapter() });
let mockApp;

describe("App", () => {
  beforeEach(() => {
    mockApp = shallow(
      <App productName="Foo Clock" />
    );
  });

  it('should render provided title', () => {
    expect(mockApp.find('.product-title').text()).toEqual('Foo Clock');
  });
});
