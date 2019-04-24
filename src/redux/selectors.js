import { cabin } from '../constants';

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

export const getFilteredFlights = ({ flights, filter }) => {
  let filteredFlights = filterCabin(flights, filter.cabin);
  filteredFlights = fliterFrom(filteredFlights, filter.from);
  filteredFlights = fliterTo(filteredFlights, filter.to);

  // filter to
  // filter time
  return filteredFlights;
};
