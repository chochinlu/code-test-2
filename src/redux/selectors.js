import { cabin, timeFilter } from '../constants';
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

export const getFilteredFlights = ({ flights, filter }) => {
  let filteredFlights = filterCabin(flights, filter.cabin);

  filteredFlights = fliterFrom(filteredFlights, filter.from);
  filteredFlights = fliterTo(filteredFlights, filter.to);
  filteredFlights = filterDepartureTime(filteredFlights, filter.departureTime);
  filteredFlights = filterArrivalTime(filteredFlights, filter.arrivalTime);

  return filteredFlights;
};
