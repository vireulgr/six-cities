import { Location } from '../utils/types';

export type City = {
  name: string;
  location: Location;
};

export const CITIES: City[] = [
  {
    name: "Johannesburg",
    location: {
      latitude: -26.206886,
      longitude: 28.042428,
      zoom: 8,
    }
  },
  {
    name: "Manila",
    location: {
      latitude: 14.583266,
      longitude: 120.979633,
      zoom: 8,
    }
  },
  {
    name: "Jakarta",
    location: {
      latitude: -6.175,
      longitude: 106.8275,
      zoom: 8,
    }
  },
  {
    name: "Kolkata",
    location: {
      latitude: 22.5675,
      longitude: 88.37,
      zoom: 8,
    }
  },
  {
    name: "Mumbai",
    location: {
      latitude: 19.076111,
      longitude: 72.8775,
      zoom: 8,
    }
  },
  {
    name: "Budapest",
    location: {
      latitude: 47.4925,
      longitude: 19.051389,
      zoom: 8,
    }
  },
  {
    name: "Bordeaux",
    location: {
      latitude: 44.84,
      longitude:  -0.58,
      zoom: 8,
    }
  },
  {
    name: "Oslo",
    location: {
      latitude: 59.913333,
      longitude: 10.738889,
      zoom: 8,
    }
  },
  {
    name: "Baghdad",
    location: {
      latitude: 33.315278,
      longitude: 44.366111,
      zoom: 8,
    }
  },
  {
    name: "Porto",
    location: {
      latitude: 41.162142,
      longitude: -8.621953,
      zoom: 8,
    }
  },
  {
    name: "Amsterdam",
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  {
    name: "Reykjavík",
    location: {
      latitude: 64.146667,
      longitude: -21.94,
      zoom: 8
    }
  },
  {
    name: 'Istanbul',
    location: {
      latitude: 41.013611,
      longitude: 28.955,
      zoom: 4
    }
  },
  {
    name: 'Beijing',
    location: {
      latitude: 39.906667,
      longitude: 116.397,
      zoom: 4
    }
  },
];

