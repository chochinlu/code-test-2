import { cabin, cabinFilter } from '../constants';

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

export const getFilteredFlights = ({ flights, filter }) => {
  let filteredFlights = filterCabin(flights, filter.cabin);

  // filter from
  // filter to
  // filter time
  return filteredFlights;
};
