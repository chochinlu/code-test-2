import { convertCheapClass, convertBusinessClass } from './utils/converters';

export const cheapFlightData = [
  {
    id: 4062210288638936064,
    departure: 'Hurlingham',
    arrival: 'Villa Angela',
    departureTime: 1555557778905,
    arrivalTime: 1555565815929
  },
  {
    id: 400693609694203904,
    departure: 'Castillo',
    arrival: 'La Pampa',
    departureTime: 1555560290714,
    arrivalTime: 1555560697883
  },
  {
    id: 4951917585271791616,
    departure: 'Lujan de Cuyo',
    arrival: 'Necochea',
    departureTime: 1555561251772,
    arrivalTime: 1555568925486
  },
  {
    id: 7018906451426450432,
    departure: 'Huinca Renanco',
    arrival: 'Merlo',
    departureTime: 1555558986048,
    arrivalTime: 1555560403093
  },
  {
    id: 2283691310581039104,
    departure: 'Victoria',
    arrival: 'Avellaneda',
    departureTime: 1555561041943,
    arrivalTime: 1555562454842
  },
  {
    id: 4753934302051480576,
    departure: 'Palmira',
    arrival: 'Villa Carlos Paz',
    departureTime: 1555554496115,
    arrivalTime: 1555557135690
  },
  {
    id: 2403164375464137728,
    departure: 'Ouargla',
    arrival: 'Tupungato',
    departureTime: 1555560595696,
    arrivalTime: 1555564075224
  },
  {
    id: 5837517472900086784,
    departure: 'Arroyito',
    arrival: 'Tlemcen',
    departureTime: 1555555455499,
    arrivalTime: 1555556157857
  },
  {
    id: 2966028103103604736,
    departure: 'Chivilcoy',
    arrival: 'San Justo',
    departureTime: 1555556505371,
    arrivalTime: 1555564909307
  },
  {
    id: 4477712780066877440,
    departure: 'La Lucila',
    arrival: 'Ibicuy',
    departureTime: 1555555173813,
    arrivalTime: 1555562218488
  },
  {
    id: 6090874114895803392,
    departure: 'Santa Teresita',
    arrival: 'Pinamar',
    departureTime: 1555559897544,
    arrivalTime: 1555560356440
  },
  {
    id: 5990790119655572480,
    departure: 'Balcarce',
    arrival: 'Santo Tome',
    departureTime: 1555559962669,
    arrivalTime: 1555569459437
  },
  {
    id: 572869652184487936,
    departure: 'Oncativo',
    arrival: 'La Para',
    departureTime: 1555559911662,
    arrivalTime: 1555563822177
  },
  {
    id: 5556423228559984640,
    departure: 'Capitan Bermudez',
    arrival: 'Veronica',
    departureTime: 1555556291361,
    arrivalTime: 1555558318706
  },
  {
    id: 3986863947709145088,
    departure: 'General San Martin',
    arrival: 'James Craik',
    departureTime: 1555553370690,
    arrivalTime: 1555559133695
  },
  {
    id: 8577699470194030592,
    departure: 'Las Heras',
    arrival: 'General Martin Miguel de Guemes',
    departureTime: 1555562122867,
    arrivalTime: 1555567164772
  },
  {
    id: 8783320072222063616,
    departure: 'Villa Bosch',
    arrival: 'Bordj',
    departureTime: 1555557245337,
    arrivalTime: 1555559887782
  },
  {
    id: 2465865070823619584,
    departure: 'Henderson',
    arrival: 'Ingeniero Beaugey',
    departureTime: 1555560281699,
    arrivalTime: 1555561381150
  },
  {
    id: 1604333076802961408,
    departure: 'Cutral-Co',
    arrival: 'General Guido',
    departureTime: 1555553013429,
    arrivalTime: 1555561483022
  },
  {
    id: 4113130094845860864,
    departure: 'Magdalena',
    arrival: 'Matheu',
    departureTime: 1555554205177,
    arrivalTime: 1555555865343
  },
  {
    id: 5991907898630321152,
    departure: 'Rancul',
    arrival: 'Manantial',
    departureTime: 1555554515979,
    arrivalTime: 1555555732804
  },
  {
    id: 5251417227412919296,
    departure: 'Minacar',
    arrival: 'San Martin',
    departureTime: 1555558929694,
    arrivalTime: 1555564651335
  },
  {
    id: 8732791523726801920,
    departure: 'El Palomar',
    arrival: 'Necochea',
    departureTime: 1555553411530,
    arrivalTime: 1555561620821
  },
  {
    id: 9135667623486699520,
    departure: 'Sierra de la Ventana',
    arrival: 'Rio Grande',
    departureTime: 1555562663521,
    arrivalTime: 1555564009747
  },
  {
    id: 1324883365762918400,
    departure: 'General Rodriguez',
    arrival: 'Valle Hermoso',
    departureTime: 1555558830321,
    arrivalTime: 1555563925679
  },
  {
    id: 3808019152089747456,
    departure: 'Castelar',
    arrival: 'Villa Mercedes',
    departureTime: 1555556797730,
    arrivalTime: 1555561324812
  },
  {
    id: 1421204716461126656,
    departure: 'Chajari',
    arrival: 'Vicente Lopez',
    departureTime: 1555560329849,
    arrivalTime: 1555562226262
  },
  {
    id: 5429550887051398144,
    departure: 'San Bernardo',
    arrival: 'Aldo Bonzi',
    departureTime: 1555554706788,
    arrivalTime: 1555557812301
  },
  {
    id: 4423598673775164416,
    departure: 'Ucacha',
    arrival: 'Pontevedra',
    departureTime: 1555555753386,
    arrivalTime: 1555561924509
  },
  {
    id: 3100852835719299072,
    departure: 'Germania',
    arrival: 'Grand Bourg',
    departureTime: 1555562190378,
    arrivalTime: 1555566147537
  },
  {
    id: 2171623293830892544,
    departure: 'Tapalque',
    arrival: 'Munro',
    departureTime: 1555558093005,
    arrivalTime: 1555561207206
  },
  {
    id: 7833401803530773504,
    departure: 'La Leonesa',
    arrival: 'Boulogne',
    departureTime: 1555554908032,
    arrivalTime: 1555561337654
  },
  {
    id: 5063748225144853504,
    departure: 'Eldorado',
    arrival: 'Franck',
    departureTime: 1555557958698,
    arrivalTime: 1555563393491
  },
  {
    id: 4811204586249461760,
    departure: 'Rafael Obligado',
    arrival: 'San Andres de Giles',
    departureTime: 1555560658111,
    arrivalTime: 1555566477225
  },
  {
    id: 6253817610498011136,
    departure: 'Funes',
    arrival: 'Burzaco',
    departureTime: 1555560755120,
    arrivalTime: 1555570419642
  }
];

export const businessFlightData = [
  {
    uuid: '0a286e4e-03c8-4961-ac0c-67bbc4564553',
    flight: 'Bariloche -> Portena',
    departure: '2019-04-18T04:26:43.419Z',
    arrival: '2019-04-18T06:05:35.675Z'
  },
  {
    uuid: '5f665546-4198-436d-a0a1-9e93820363a7',
    flight: 'Todd -> Sunchales',
    departure: '2019-04-18T03:43:21.169Z',
    arrival: '2019-04-18T05:12:10.997Z'
  },
  {
    uuid: 'bee29022-9f6d-4516-a84a-709c89f25107',
    flight: 'Ayacucho -> Navarro',
    departure: '2019-04-18T03:46:41.832Z',
    arrival: '2019-04-18T04:17:02.989Z'
  },
  {
    uuid: 'a993d4f2-2a7a-455b-a84b-db892ba573e2',
    flight: 'Laguna Alsina -> Bosch',
    departure: '2019-04-18T03:56:53.611Z',
    arrival: '2019-04-18T06:24:19.961Z'
  },
  {
    uuid: '12d24e25-fd4e-4860-834e-eadaf5649386',
    flight: 'San Pedro -> Despenaderos',
    departure: '2019-04-18T04:49:49.089Z',
    arrival: '2019-04-18T06:17:26.974Z'
  },
  {
    uuid: '96649a05-34f8-4b17-83a7-0af0d98e9d48',
    flight: 'San Genaro -> Batan',
    departure: '2019-04-18T04:10:54.742Z',
    arrival: '2019-04-18T04:16:56.544Z'
  },
  {
    uuid: '98487c3b-e31c-4926-8dca-4d3c29c623ed',
    flight: 'Sierra de los Padres -> Villa General Belgrano',
    departure: '2019-04-18T02:37:02.357Z',
    arrival: '2019-04-18T03:07:23.707Z'
  },
  {
    uuid: 'bc7bf66e-1afd-41cf-a3aa-c8a465b96a01',
    flight: 'Crespo -> Villa Aberastain',
    departure: '2019-04-18T03:12:19.844Z',
    arrival: '2019-04-18T04:58:16.149Z'
  },
  {
    uuid: '5911e464-02b8-453e-8f45-7e2433b09133',
    flight: 'San Miguel -> Belen de Escobar',
    departure: '2019-04-18T02:52:02.985Z',
    arrival: '2019-04-18T04:41:11.584Z'
  },
  {
    uuid: '4f3b6d23-d259-4e7e-a8d1-fcaa530f0594',
    flight: 'Caleta Olivia -> Ayacucho',
    departure: '2019-04-18T05:00:03.510Z',
    arrival: '2019-04-18T06:30:32.597Z'
  },
  {
    uuid: 'de7aba36-c920-45b5-809f-283f6c28a019',
    flight: 'Bell Ville -> Caseros',
    departure: '2019-04-18T03:30:22.492Z',
    arrival: '2019-04-18T05:56:37.855Z'
  },
  {
    uuid: 'e0576ceb-d5bc-4e89-8886-0e52ee38bfab',
    flight: 'Villa Las Rosas -> La Banda',
    departure: '2019-04-18T04:00:13.011Z',
    arrival: '2019-04-18T06:43:41.656Z'
  },
  {
    uuid: '8bbfd956-c92f-4c04-be61-01540c060b3f',
    flight: 'San Rafael -> Oran',
    departure: '2019-04-18T03:54:05.474Z',
    arrival: '2019-04-18T05:25:38.371Z'
  },
  {
    uuid: 'c28a4e8e-2ee6-4627-bc63-e8f0ba39ca26',
    flight: 'Vera -> Abasto',
    departure: '2019-04-18T03:44:49.206Z',
    arrival: '2019-04-18T03:54:44.786Z'
  },
  {
    uuid: '7588ebb9-7266-41fb-913c-d34b68f76a25',
    flight: 'Flores -> Los Cardales',
    departure: '2019-04-18T03:55:03.027Z',
    arrival: '2019-04-18T06:35:08.611Z'
  },
  {
    uuid: '22fd8550-560b-4793-a721-f1b90ad64cb2',
    flight: 'Remedios de Escalada -> Villa Regina',
    departure: '2019-04-18T02:37:14.342Z',
    arrival: '2019-04-18T05:09:15.008Z'
  }
];

export const convertedFligts = [
  ...convertCheapClass(cheapFlightData),
  ...convertBusinessClass(businessFlightData)
];

export const smallConvertedFligts = [
  ...convertCheapClass(cheapFlightData.slice(0, 1)),
  ...convertBusinessClass(businessFlightData.slice(0, 2))
];
