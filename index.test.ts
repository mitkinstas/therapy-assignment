import {therapyAssignment} from './index';

test('a = true, b = true, c = false, d = 1.5, e = 10, f = 20, H=M', () => {
    expect(therapyAssignment({
        a: true,
        b: true,
        c: false,
        d: 1.5,
        e: 10,
        f: 20
    })).toBe(3);
});

test('a = true, b = true, c = true, d = 2, e = 10, f = 20, H=P', () => {
    expect(therapyAssignment({
        a: true,
        b: true,
        c: true,
        d: 2,
        e: 10,
        f: 20
    })).toBe(1.215686274509804);
});

test('a = false, b = true, c = true, d = 3, e = 10, f = 10, H=T', () => {
    expect(therapyAssignment({
        a: false,
        b: true,
        c: true,
        d: 3,
        e: 10,
        f: 10
    })).toBe(2);
});

test('a = false, b = true, c = true, d = 3, e = 10, f = 10, H=P, Custom 1', () => {
    expect(therapyAssignment({
        a: true,
        b: true,
        c: true,
        d: 3,
        e: 10,
        f: 10
    }, true)).toBe(6.3);
});

test('a = false, b = true, c = true, d = 3, e = 10, f = 10, H=T, Custom 2', () => {
    expect(therapyAssignment({
        a: true,
        b: true,
        c: false,
        d: 3,
        e: 10,
        f: 10
    }, false, true)).toBe(2);
});

test('a = false, b = true, c = true, d = 3, e = 10, f = 10, H=M, Custom 2', () => {
    expect(therapyAssignment({
        a: true,
        b: false,
        c: true,
        d: 3,
        e: 10,
        f: 10
    }, false, true)).toBe(13.3);
});