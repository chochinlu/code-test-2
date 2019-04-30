import { cabin, timeFilter, orderType } from '../constants';
import { inDuration } from '../utils/date';

const filterCabin = (flights, classCabin) => {
  switch (classCabin) {
    case cabin.CHEAP:
      return flights.filter(f => f.cabin === cabin.CHEAP);
    case cabin.BUSINESS:
      return flights.filter(f => f.cabin === cabin.BUSINESS);
    default:
      return flights;
  }
};

const fliterFrom = (flights, from) => {
  const re = new RegExp(from);
  return flights.filter(f => re.test(f.from.toLowerCase()));
};

const fliterTo = (flights, to) => {
  const re = new RegExp(to);
  return flights.filter(f => re.test(f.to.toLowerCase()));
};

const filterDepartureTime = (flights, timeFilterValue) => {
  if (timeFilterValue === timeFilter.ANY_TIME.value) {
    return flights;
  }
  return flights.filter(f => inDuration(timeFilterValue, f.departureTime));
};

const filterArrivalTime = (flights, timeFilterValue) => {
  if (timeFilterValue === timeFilter.ANY_TIME.value) {
    return flights;
  }
  return flights.filter(f => inDuration(timeFilterValue, f.arrivalTime));
};

export const getFilteredFlights = (flights, filter) => {
  let filteredFlights = filterCabin(flights, filter.cabin);

  filteredFlights = fliterFrom(filteredFlights, filter.from);
  filteredFlights = fliterTo(filteredFlights, filter.to);
  filteredFlights = filterDepartureTime(filteredFlights, filter.departureTime);
  filteredFlights = filterArrivalTime(filteredFlights, filter.arrivalTime);

  return filteredFlights;
};

const cabinCompareFunction = order => (a, b) => {
  const nameA = a.cabin.toLowerCase();
  const nameB = b.cabin.toLowerCase();

  if (order === 'asc') {
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
  } else {
    if (nameA < nameB) return 1;
    if (nameA > nameB) return -1;
  }

  return 0;
};

export const timeCompareFunction = timeType => order => (a, b) => {
  let _a =
    timeType === orderType.DEPARTURE_TIME.name
      ? a[orderType.DEPARTURE_TIME.name]
      : a[orderType.ARRIVAL_TIME.name];

  let _b =
    timeType === orderType.DEPARTURE_TIME.name
      ? b[orderType.DEPARTURE_TIME.name]
      : b[orderType.ARRIVAL_TIME.name];

  return order === 'asc' ? _a - _b : _b - _a;
};

const compareFunction = ({ orderBy, order }) => {
  switch (orderBy) {
    case orderType.CABIN.name:
      return cabinCompareFunction(order);
    case orderType.DEPARTURE_TIME.name:
      return timeCompareFunction(orderType.DEPARTURE_TIME.name)(order);
    case orderType.ARRIVAL_TIME.name:
      return timeCompareFunction(orderType.ARRIVAL_TIME.name)(order);
    default:
      return cabinCompareFunction(order);
  }
};

export const getSortedFlights = (flights, sort) =>
  flights.sort(compareFunction(sort));

export const getTargetFlights = ({ flights, filter, sort }) => {
  let targetFlights = getFilteredFlights(flights, filter);
  targetFlights = getSortedFlights(targetFlights, sort);
  return targetFlights;
};
