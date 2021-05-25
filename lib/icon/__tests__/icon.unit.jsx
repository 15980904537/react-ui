import renderer from 'react-test-renderer'
import React from 'react'
import {
    Icon
} from '../Icon'
describe("icon测试", () => {
            it('render successify', () => {
                    const json = renderer.create( < Icon name = { 'wechat' }
                        / > ).toJSON()
                        expect(json).toMatchSnapshot()
                    })
            });