import { classes, createClass } from '../classes'
describe("classes测试", () => {
    it('is a function', () => {
        expect(classes).toBeInstanceOf(Function);
    });
    it('generate class names', () => {
        expect(classes()).toEqual('');
        expect(classes('a')).toEqual('a');
        expect(classes('a', 'b')).toEqual('a b');
        expect(classes('a', undefined)).toEqual('a');
        expect(classes('a', undefined, '中文', null, false)).toEqual('a 中文');
    });
});

describe("scopeClass", () => {
    it('is a function', () => {
        expect(createClass).toBeInstanceOf(Function);
    });
    it('generate class names', () => {
        const sc = createClass('my-layout')
        expect(sc("")).toEqual('my-layout');
        expect(sc('a')).toEqual('my-layout-a');
        expect(sc({ '': true })).toEqual('my-layout');
        expect(sc({ hasClass: true })).toEqual('my-layout-hasClass');
        // expect(classes('a', undefined, '中文', null, false)).toEqual('a 中文');
    });
});