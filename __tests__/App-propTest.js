import 'react-native';
import React from 'react';
import Dashboard from '../src/screens/DashboardScreen';
import renderer from 'react-test-renderer';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.fetch = jest.fn(() => new Promise((resolve) => resolve()));
jest.mock('react-native-device-info', () => {});

configure({adapter: new Adapter()});

it('Testing props', () => {
  const wrapper = shallow(<Dashboard data="hello" />).props();
  console.log(wrapper);
//   expect(wrapper.children.props.children).toEqual('Hello');
});
