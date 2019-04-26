export const cabin = {
  CHEAP: 'cheap',
  BUSINESS: 'business'
};

export const cabinFilter = {
  ALL: 'all',
  ...cabin
};

export const timeInput = {
  departureTime: {
    name: 'departureTime',
    title: 'Departure Time'
  },
  arrivalTime: {
    name: 'arrivalTime',
    title: 'Arrival Time'
  }
};

export const timeFilter = {
  ANY_TIME: {
    value: 1,
    text: 'Any Time'
  },
  EARLY_MORNING: {
    value: 2,
    text: 'Early Morning (5-7a)'
  },
  MORNING: {
    value: 3,
    text: 'Morning (7-10a)'
  },
  NOON: {
    value: 4,
    text: 'Noon (10a-2p)'
  },
  AFTERNOON: {
    value: 5,
    text: 'Afternoon (2-6p)'
  },
  EVENING: {
    value: 6,
    text: 'Evening (6-10p)'
  },
  NIGHT: {
    value: 7,
    text: 'Night (10-5a)'
  }
};
