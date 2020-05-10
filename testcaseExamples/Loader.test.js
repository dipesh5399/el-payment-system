// const Loader = require('./Loader');

// test('adds 1 + 2 to equal 3', () => {
    
//             component.setProps({loadingStatus: true});
//             expect(component.find('button').text()).toEqual('isLoading: true');
// });

import React from "react";
import { mount, shallow, ReactWrapper } from "enzyme";
import Loader from "./Loader";

describe('Test Loader component ', () => {
    it('should render properly', () => {
        const component = shallow(<Loader />);
        component.setProps({loadingStatus: true});
        expect(component.find('button').text()).toEqual('isLoading: true');
    });
    it('', () => {
        const component = shallow(<Loader />);
        component.setProps({loadingStatus: true});
        component.find('button').simulate('click');
        expect(component.find('button').text()).toEqual('isLoading: false');
    });
    // it('returns true when called', () => {
    //     const component = shallow(<App />);
    //     spyOn(App.prototype, 'isToggleLoadingHandler').and.callThrough();
    
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.instance().isToggleLoadingHandler()).toBe(undefined);
    //     expect(App.prototype.isToggleLoadingHandler).toHaveBeenCalled();
    //   });
    
});
