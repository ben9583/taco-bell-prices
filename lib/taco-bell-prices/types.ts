import type { TacoBellHours } from '../taco-bell/types';

export interface TacoBellPricesLocation {
  geometry: {
    lat: number;
    lng: number;
  };
  success: boolean;
}

export interface TacoBellPricesStore {
  storeStatus: string;
  address: {
    country: {
      isocode: string;
    };
    line1: string;
    line2: string;
    postalCode: string;
    region: {
      isocode: string;
    };
    town: string;
  };
  geoPoint: {
    latitude: number;
    longitude: number;
  };
  name: string;
  storeNumber: string;
  formattedDistance: string;
  todayBusinessHours: TacoBellHours;
  openingHours: {
    code: string;
    isBreakFastAvailable: boolean;
    weekDayOpeningList: TacoBellHours[];
  };
}

export interface TacoBellPricesStores {
  latitude: number;
  longitude: number;
  nearByStores: TacoBellPricesStore[];
}