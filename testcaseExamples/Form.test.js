import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";
import App from '../App';

describe('Test form component ', () => {
    it('check value of input', () => {
        const component = shallow(<Form />);
        expect(component.find('input').prop('value')).toEqual();
    });
    it('check placeholder of input', () => {
        const component = shallow(<Form />);
        expect(component.find('input').prop('placeholder')).toEqual('Enter Name');
    });
    it('', () => {
        const component = shallow(<Form />);
        component.setProps({personName:"1233"});
        expect(component.find('input').prop('placeholder')).toEqual('Enter Name');
        expect(component.find('input').prop('value')).toEqual('1233');
    });
    it('should render properly', () => {
        const component = shallow(<Form />);
        component.find('input').simulate('change', {target: {value: 'New title'}});
        expect(component.find('input').prop('value')).toBe('New title');
    });
    // it('', () => {
    //     const component = shallow(<Form />);
    //    component.find('input').simulate('change',{
    //        target: {value:"hello"}
    //    });
    //    expect(component.find('input').props().value).toEqual('hello');
    // });
});
