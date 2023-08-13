import { classNames } from 'shared/lib/classNames/classNames';
describe('classNames', function () {
    test('with only first param', function () {
        var expected = 'someClass';
        expect(classNames('someClass')).toBe(expected);
    });
    test('with additional classes', function () {
        var expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });
    test('with mods', function () {
        var expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected);
    });
});
