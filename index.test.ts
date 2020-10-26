import { therapyAssignment } from './index';

test('H=M, a = true, b = true, c = false, d = 1.5, e = 10, f = 20', () => {
	expect(
		therapyAssignment({
			a: true,
			b: true,
			c: false,
			d: 1.5,
			e: 10,
			f: 20,
		})
	).toBe(3);
});

test('H=P, a = true, b = true, c = true, d = 2, e = 10, f = 20H=P', () => {
	expect(
		therapyAssignment({
			a: true,
			b: true,
			c: true,
			d: 2,
			e: 10,
			f: 20,
		})
	).toBe(1.215686274509804);
});

test('H=T, a = false, b = true, c = true, d = 3, e = 10, f = 10', () => {
	expect(
		therapyAssignment({
			a: false,
			b: true,
			c: true,
			d: 3,
			e: 10,
			f: 10,
		})
	).toBe(2);
});

test('Custom 1, H=P, a = false, b = true, c = true, d = 3, e = 10, f = 10', () => {
	expect(
		therapyAssignment(
			{
				a: true,
				b: true,
				c: true,
				d: 3,
				e: 10,
				f: 10,
			},
			true
		)
	).toBe(6.3);
});

test('a = false, b = true, c = true, d = 3, e = 10, f = 10, H=T, Custom 2', () => {
	expect(
		therapyAssignment(
			{
				a: true,
				b: true,
				c: false,
				d: 3,
				e: 10,
				f: 10,
			},
			false,
			true
		)
	).toBe(2);
});

test('Custom 2, H=M, a = false, b = true, c = true, d = 3, e = 10, f = 10', () => {
	expect(
		therapyAssignment(
			{
				a: true,
				b: false,
				c: true,
				d: 3,
				e: 10,
				f: 10,
			},
			false,
			true
		)
	).toBe(13.3);
});

test('Error, a = false, b = false, c = false, d = 3, e = 10, f = 10', () => {
	expect(() => {
        therapyAssignment(
            {
                a: false,
                b: false,
                c: false,
                d: 3,
                e: 10,
                f: 10,
            },
            false,
            true
        )
    }).toThrow('inappropriate data');
});
