interface Params {
	a: boolean;
	b: boolean;
	c: boolean;
	d: number;
	e: number;
	f: number;
}

const enum KEYS {
	M = 'M',
	P = 'P',
	T = 'T',
}

let CONDITIONS = {
	[KEYS.M]: (data: Params) => data.a && data.b && !data.c,
	[KEYS.P]: (data: Params) => data.a && data.b && data.c,
	[KEYS.T]: (data: Params) => !data.a && data.b && data.c,
};

let CALCULATIONS = {
	[KEYS.M]: (data: Params) => data.d + (data.d * data.e) / 10,
	[KEYS.P]: (data: Params) => data.d + (data.d * (data.e - data.f)) / 25.5,
	[KEYS.T]: (data: Params) => data.d - (data.d * data.f) / 30,
};

const CUSTOM1_CALCULATIONS = {
	[KEYS.P]: (data: Params) => 2 * data.d + (data.d * data.e) / 100,
};

const CUSTOM2_CONDITIONS = {
    [KEYS.M]: (data: Params) => data.a && !data.b && data.c,
	[KEYS.T]: (data: Params) => data.a && data.b && !data.c
};

const CUSTOM2_CALCULATIONS = {
	[KEYS.M]: (data: Params) => data.f + data.d + (data.d * data.e) / 100,
};

export const therapyAssignment = (data: Params, isCustom1?: boolean, isCustom2?: boolean) => {
    if (isCustom1) {
        CALCULATIONS = {
            ...CALCULATIONS,
            ...CUSTOM1_CALCULATIONS,
        };
    }

    if (isCustom2) {
        CONDITIONS = {
            ...CONDITIONS,
            ...CUSTOM2_CONDITIONS
        };
        CALCULATIONS = {
            ...CALCULATIONS,
            ...CUSTOM2_CALCULATIONS
        };
    }
	switch (true) {
		case CONDITIONS.M(data):
			return CALCULATIONS.M(data);
		case CONDITIONS.P(data):
			return CALCULATIONS.P(data);
		case CONDITIONS.T(data):
			return CALCULATIONS.T(data);
	}
};
