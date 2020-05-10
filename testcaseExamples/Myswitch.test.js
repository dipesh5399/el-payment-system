import React from "react";
import { shallow } from "enzyme";

import Myswitch from "./Myswitchwithpropsandclass";



describe('Test HP component ', () => {
    it('should render properly', () => {
        const component = shallow(<Myswitch />);
        expect(component).toMatchSnapshot();
    });  
    it('Get message of h1 ' , () => {
        const component = shallow(<Myswitch />);
        expect(component.find('h1').text()).toEqual('Click to on bulb');
    });
    it('Value of current state on load page. ' , () => {
        const component = shallow(<Myswitch isOn={true}/>);
        expect(component.state('currentstate')).toEqual(true);
    });
    it('Which image is loaded. ' , () => {
        const component = shallow(<Myswitch isOn={true}/>);
        expect(component.find("img").prop("src")).toEqual("onbulb.jpg");
    });
  it('should update the isLoading status when invoked by default', () => {
    const wrapper = shallow(<Myswitch isOn={true}/>);
    expect(wrapper.state('currentstate')).toBe(true);
    wrapper.instance().handleClick();
    expect(wrapper.state('currentstate')).toBe(true);
  });
  it('should update the isLoading status when invoked by default', () => {
    const wrapper = shallow(<Myswitch />);
    wrapper.setProps({isOn: false});
     wrapper.find('img').simulate('click');
    expect(wrapper.find("img").prop("src")).toEqual("onbulb.jpg");
  });
    
    it('Test click event', () => {
        const mockCallBack = jest.fn();
    
        const button = shallow((<Myswitch onClick={mockCallBack} />));
        button.find('img').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
      });
});
