import { cheapFlightData, businessFlightData } from '../data';
import { cabin } from '../constants';
import {
  convertCheapClassData,
  convertBusinessClassData,
  convertMillisecondsToTime,
  duration
} from './converters';

describe('converters', () => {
  describe('convert cheap class data', () => {
    it('should be converted to regular data', () => {
      const ori = cheapFlightData[0];
      const result = convertCheapClassData(ori);
      expect(result).toMatchObject({
        id: expect.any(String),
        cabin: cabin.CHEAP,
        from: ori.departure,
        to: ori.arrival,
        departureTime: ori.departureTime,
        arrivalTime: ori.arrivalTime
      });
    });
  });

  describe('convert business class data', () => {
    it('should be converted to regular data', () => {
      const ori = businessFlightData[0];
      const result = convertBusinessClassData(ori);

      expect(Date.parse(result.from)).toBeNaN();
      expect(Date.parse(result.to)).toBeNaN();

      expect(result).toMatchObject({
        id: expect.any(String),
        cabin: cabin.BUSINESS,
        departureTime: expect.any(Number),
        arrivalTime: expect.any(Number)
      });
    });
  });

  describe('convert milliseconds to Time', () => {
    it('should convert milliseconds (current TimeZone)', () => {
      const ms = 1555557778905;
      const result = convertMillisecondsToTime(ms);
      expect(result).toBe('11:22:58 AM');
    });
  });

  describe('duration', () => {
    it.only('should return duration', () => {
      const ms1 = 1555557778905;
      const ms2 = ms1 + 11000;
      const result = duration(ms2, ms1);
      expect(result).toBe('11 seconds');
    });
  });
});
