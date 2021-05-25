import { classes } from '../classes'
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