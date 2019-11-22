import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QREet from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('<QREet /> shallow rendering', () => {
  it('has 441 children', () => {
    const wrapper = shallow(<QREet value="hey" />);
    expect(wrapper.children()).to.have.length(441);
  });
});
