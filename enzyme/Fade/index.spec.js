import React from 'react';
import { shallow } from 'enzyme';
import { HiddenMessage } from '../../src/components/HiddenMessage';

test('shallow', () => {
  const wrapper = shallow(<HiddenMessage initialShow />);
  expect(wrapper.find('Fade').props()).toEqual({
    in: true,
    children: <div>Hello World</div>
  });
  wrapper.find('button').simulate('click');
  expect(wrapper.find('Fade').props()).toEqual({
    in: false,
    children: <div>Hello World</div>
  });
  //console.log(wrapper.debug());
});

test('toggle toggles the state of show', () => {
  const wrapper = shallow(<HiddenMessage initialShow />);
  //expect(wrapper.state().show).toBe(true);
});
