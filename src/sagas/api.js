import axios from 'axios';

const cors = 'https://cors-anywhere.herokuapp.com/';

const base = 'https://obscure-caverns-79008.herokuapp.com/';

export const getFlightAsync = cabinType =>
  axios.get(`${cors}${base}${cabinType}`);
