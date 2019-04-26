import {
  getTodayStartYearMonthDate,
  getFromHourAndDuration,
  inDuration
} from './date';

describe('getTodayStartYearMonthDate', () => {
  const source = 1555557778905;

  expect(getTodayStartYearMonthDate(source)).toMatchObject({
    year: 2019,
    month: 3, //zero based!
    date: 18
  });
});

describe('getFromHourAndDuration', () => {
  it('should return fromHour and hourDuration', () => {
    const value = 2;
    const result = getFromHourAndDuration(value);
    expect(result).toMatchObject({
      fromHour: 5,
      hourDuration: 2
    });
  });
});

describe('inDuration', () => {
  const today = 1555557778905; //Thu Apr 18 2019 11:22:58 GMT+0800
  const value = 2; // Early Morning (5-7a)

  it('should return false', () => {
    const target = today;
    const result = inDuration(value, target);
    expect(result).toBeFalsy();
  });

  it('should return true', () => {
    const target = 1555536178000; // Thu Apr 18 2019 5:22:58 GMT+0800
    const result = inDuration(value, target);
    expect(result).toBeTruthy();
  });

  it('should return false', () => {
    const target = 1555542060000; // Thu Apr 18 2019 7:01:00 GMT+0800
    const result = inDuration(value, target);
    expect(result).toBeFalsy();
  });

  it('should return true', () => {
    const target = 1555542000000; // Thu Apr 18 2019 7:00:00 GMT+0800
    const result = inDuration(value, target);
    expect(result).toBeTruthy();
  });

  it('should return true', () => {
    const value = 4; //Noon (10a-2p)
    const target = 1555563600000; // Thu Apr 18 2019 13:00:00 GMT+0800
    const result = inDuration(value, target);
    expect(result).toBeTruthy();
  });
});
