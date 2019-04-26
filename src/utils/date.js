import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import getDate from 'date-fns/getDate';
import { timeFilter } from '../constants';

export const getTodayStartYearMonthDate = milliseconds => {
  const today = new Date(milliseconds);
  const year = getYear(today);
  const month = getMonth(today);
  const date = getDate(today);

  return { year, month, date };
};

export const getFromHourAndDuration = timeFilterValue => {
  const index = Object.keys(timeFilter).filter(
    t => timeFilter[t].value === timeFilterValue
  );

  const { fromHour, hourDuration } = timeFilter[index];
  return { fromHour, hourDuration };
};

export const inDuration = (timeFilterValue, targetDateTime) => {
  const { year, month, date } = getTodayStartYearMonthDate(targetDateTime);
  const { fromHour, hourDuration } = getFromHourAndDuration(timeFilterValue);

  const from = new Date(year, month, date, fromHour);
  const to = new Date(year, month, date, fromHour + hourDuration);
  const target = new Date(targetDateTime);

  return from <= target && target <= to;
};
