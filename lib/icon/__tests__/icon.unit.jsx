import renderer from 'react-test-renderer'
import React from 'react'
import { mount, shallow } from "enzyme"
import {
    Icon
} from '../Icon'
describe("icon测试", () => {
            it('render successify', () => {
                const json = renderer.create( < Icon name = { 'wechat' }
                    />
                ).toJSON();
                expect(json).toMatchSnapshot()
            });
            it('onClick event', () => {
                    const fn = jest.fn();
                    console.log(mount)
                    const component = mount( < Icon name = "wechat"
                        onClick = { fn }
                        />);
                        component.find('svg').simulate('click'); expect(fn).toBeCalled();

                    })
            });