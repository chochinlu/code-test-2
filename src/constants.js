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
    text: 'Early Morning (5-7a)',
    fromHour: 5,
    hourDuration: 2
  },
  MORNING: {
    value: 3,
    text: 'Morning (7-10a)',
    fromHour: 7,
    hourDuration: 3
  },
  NOON: {
    value: 4,
    text: 'Noon (10a-2p)',
    fromHour: 10,
    hourDuration: 4
  },
  AFTERNOON: {
    value: 5,
    text: 'Afternoon (2-6p)',
    fromHour: 14,
    hourDuration: 4
  },
  EVENING: {
    value: 6,
    text: 'Evening (6-10p)',
    fromHour: 16,
    hourDuration: 4
  },
  NIGHT: {
    value: 7,
    text: 'Night (10-5a)',
    fromHour: 22,
    hourDuration: 7
  }
};
