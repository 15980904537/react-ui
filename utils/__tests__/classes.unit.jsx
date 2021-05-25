import { classes } from '../classes'
describe("我的第一个测试用例", () => {
    it("class是否合并", () => {
        expect(1).toEqual(1);
    });
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