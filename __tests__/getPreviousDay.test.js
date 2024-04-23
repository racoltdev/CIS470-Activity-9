const getNextDate = require('../modules/getPreviousDay');

test('Previous day test', () => {
    expect(getNextDate(4, 15, 2024)).toEqual({ month: 4, day: 14, year: 2024 });
    expect(getNextDate(2, 1, 2023)).toEqual({ month: 1, day: 31, year: 2023 });
    expect(getNextDate(1, 1, 2021)).toEqual({ month: 12, day: 31, year: 2020 });
});

