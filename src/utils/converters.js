import { cabin } from '../constants';
import { format } from 'date-fns';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';

// regular flight data
// {
//   id, //string
//   cabin, //string
//   from,
//   to,
//   departureTime, // ms
//   arrivalTime // ms
// }

// cheap flight data:
// {
//   id: 4062210288638936064,
//   departure: 'Hurlingham',
//   arrival: 'Villa Angela',
//   departureTime: 1555557778905,
//   arrivalTime: 1555565815929
// }

export const convertCheapClassData = data => ({
  id: data.id.toString(),
  cabin: cabin.CHEAP,
  from: data.departure,
  to: data.arrival,
  departureTime: data.departureTime,
  arrivalTime: data.arrivalTime
});

export const convertCheapClass = sourceArr =>
  sourceArr.map(data => convertCheapClassData(data));

// {
//   uuid: '0a286e4e-03c8-4961-ac0c-67bbc4564553',
//   flight: 'Bariloche -> Portena',
//   departure: '2019-04-18T04:26:43.419Z',
//   arrival: '2019-04-18T06:05:35.675Z'
// }

export const getTime = utcStr => new Date(utcStr).getTime();

export const convertBusinessClassData = data => {
  const [from, to] = data.flight.split('->').map(e => e.trim());

  return {
    id: data.uuid,
    cabin: cabin.BUSINESS,
    from,
    to,
    departureTime: getTime(data.departure),
    arrivalTime: getTime(data.arrival)
  };
};

export const convertBusinessClass = sourceArr =>
  sourceArr.map(data => convertBusinessClassData(data));

export const convertMillisecondsToTime = milliseconds =>
  format(new Date(milliseconds), 'HH:mm:ss a');

export const duration = (time1, time2) => formatDistanceStrict(time2, time1);
