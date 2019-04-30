import { smallConvertedFligts } from '../data';
import { getSortedFlights } from './selectors';
import { cabin, orderType } from '../constants';

const genSort = (orderBy, order = 'asc') => ({
  orderBy,
  order
});

const sortA = genSort(orderType.CABIN.name);
const sortB = genSort(orderType.CABIN.name, 'desc');
const sortC = genSort('departureTime');
const sortD = genSort('departureTime', 'desc');

describe('getSortedFlights', () => {
  it('should return asc sorted result by cabin name', () => {
    const result = getSortedFlights(smallConvertedFligts, sortA);
    // console.log(JSON.stringify(result, null, 2));
    expect(result.length).toBe(3);
    expect(result[0].cabin).toBe(cabin.BUSINESS);
    expect(result[1].cabin).toBe(cabin.BUSINESS);
    expect(result[2].cabin).toBe(cabin.CHEAP);
  });

  it('should return desc sorted result by cabin name', () => {
    const result = getSortedFlights(smallConvertedFligts, sortB);
    // console.log(JSON.stringify(result, null, 2));
    expect(result[0].cabin).toBe(cabin.CHEAP);
    expect(result[1].cabin).toBe(cabin.BUSINESS);
    expect(result[2].cabin).toBe(cabin.BUSINESS);
  });

  it('should return asc sorted time', () => {
    const result = getSortedFlights(smallConvertedFligts, sortC);
    expect(result[0].departureTime).toBe(1555557778905);
    expect(result[1].departureTime).toBe(1555559001169);
    expect(result[2].departureTime).toBe(1555561603419);
  });

  it('should return desc sorted time', () => {
    const result = getSortedFlights(smallConvertedFligts, sortD);
    console.log(JSON.stringify(result, null, 2));
    expect(result[0].departureTime).toBe(1555561603419);
    expect(result[1].departureTime).toBe(1555559001169);
    expect(result[2].departureTime).toBe(1555557778905);
  });
});
