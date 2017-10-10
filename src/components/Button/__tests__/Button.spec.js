import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button.jsx';

configure({ adapter: new Adapter() });
let mockButton;

describe("Button", () => {
  beforeEach(() => {
    mockButton = shallow(
      <Button>Click Here</Button>
    );
  });

  it('should render provided text', () => {
    expect(mockButton.text()).toEqual('Click Here');
  });

  it("should not have either primary or flat class by default", () => {
    expect(mockButton.hasClass('flat')).toEqual(false);
    expect(mockButton.hasClass('primary')).toEqual(false);
  });

  it('should add primary class if primary property is given', () => {
    const mockPrimaryButton = shallow(
      <Button primary>Click Here</Button>
    );

    expect(mockPrimaryButton.hasClass('primary')).toEqual(true);
  });

  it('should add flat class if flat property is given', () => {
    const mockFlatButton = shallow(
      <Button flat>Click Here</Button>
    );

    expect(mockFlatButton.hasClass('flat')).toEqual(true);
  });
});
