export interface TacoBellHours {
  closingTime: {
    formattedHour: string;
    hour: number;
    minute: number;
  };
  openingTime: {
    formattedHour: string;
    hour: number;
    minute: number;
  };
  weekDay: string;
  dayparts: {
    allDay: boolean;
    closed: boolean;
    daypart: {
      allDay: boolean;
      closed: boolean;
      showWarning: boolean;
      afterMessageDetail: string;
      afterMessageTitle: string;
      name: string;
      beforeEndTimeMinutes: number;
      closedMessageDetail: string;
      closedMessageTitle: string;
      endMessageDetail: string;
      endMessageTitle: string;
      presetMinutes: number;
      startMessageDetail: string;
      startMessageTitle: string;
      warningPriority: number;
    };
    endTime: {
      formattedHour: string;
      hour: number;
      minute: number;
    };
    startTime: {
      formattedHour: string;
      hour: number;
      minute: number;
    };
  }[];
}

export interface TacoBellStore {
  storeStatus: string;
  pickupStoreStatusForLocation: string;
  pickupStoreStatusForCheckout: string;
  phoneNumber: string;
  pickupShelves: boolean;
  storeNumber: string;
  timeZone: string;
  roundUpFlag: boolean;
  qrCodeEnabled: boolean;
  cupChargeParticipation: boolean;
  previouslyOrdered: boolean;
  todayBusinessHours: TacoBellHours;
  delivery: boolean;
  autoCheckIn: boolean;
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
  capabilities: {
    breakfast: boolean;
    deliveryEnabled: boolean;
    driveThru: boolean;
    driveThruPriorityPickupLane: boolean;
    isPickRestaurant: boolean;
    mobileEnabled: boolean;
    online: boolean;
    openLate: boolean;
    pickupShelves: boolean;
  };
  currentOnlineAvailable: boolean;
  driveThruPriorityPickupLane: boolean;
  geoPoint: {
    latitude: number;
    longitude: number;
  };
  geofencingEnabled: boolean;
  geofencingRadius: number;
  name: string;
  openingHours: {
    code: string;
    isBreakFastAvailable: boolean;
    weekDayOpeningList: TacoBellHours[];
  };
  formattedDistance: string;
};

export interface TacoBellStoresResponse {
  pagination: {
    currentPage: number;
    totalResults: number;
    pageSize: number;
    totalPages: number;
  };
  sourceLatitude: number;
  sourceLongitude: number;
  boundNorthLatitude: "unused";
  boundSouthLatitude: "unused";
  boundEastLongitude: "unused";
  boundWestLongitude: "unused";
  cartIsEmpty: boolean;
  favoriteStores: [];
  nearByStores: TacoBellStore[];
};

export interface TacoBellProductGroup {
  groupID: string;
  title: string;
  subtitle: string;
  defaultQuantity: number;
  minimumQuantity: number;
  maximumQuantity: number;
  customizable: boolean;
  drinkSwap: boolean;
  image: {
    format: string;
    url: string;
  };
  defaultVariantProduct?: {
    code: string;
    stock: {
      stockLevel: number;
    };
    url: string;
    variantOptionQualifiers: [];
    name: string;
    groupDefaultItem: boolean;
    drinkSize: string;
    calories: string;
    accurateCalorie: string;
    availableInStore: boolean;
    purchasable: boolean;
    priority: number;
    picture: {
      format: string;
      url: string;
    };
    pluralName: string;
    nutritionInfo: {
      url: string;
      calorieCount: string;
      accurateCalorie: string;
    };
    productImageUrl: string;
  };
  defaultBaseProduct?: {
    code: string;
    name: string;
    url: string;
    description: string;
    purchaseable: boolean;
    images: {
      imageType: string;
      format: string;
      url: string;
    }[];
    productType: string;
    itemType: string;
    foodType: string;
    calories: string;
    accurateCalorie: string;
    maxOrderQuantity: number;
    maxProductCount: number;
    modifiable: boolean;
    sodiumIndication: boolean;
    productCount: number;
    thumbnailImageUrl: string;
    isFountain: boolean;
    isHasDefaultItem: boolean;
    isAvailableInStore: boolean;
    showAddedIngredientCalories: boolean;
    defaultProtein: boolean;
    primaryCategory: string;
    primaryCategoryCode: string;
    productImageUrl: string;
    isDigitalProduct: boolean;
    searchable: boolean;
    pdpMastHead: {
      type: string;
    }
    showOnDelivery: boolean;
  };
  productImageUrl: string;
}

export interface TacoBellProduct {
  code: string;
  name: string;
  url: string;
  purchasable: boolean;
  price: {
    currencyIso: string;
    formattedValue: string;
    priceType: string;
    value: number;
  };
  images: {
    imageType: string;
    format: string;
    url: string;
  }[];
  categories: {
    code: string;
  }[];
  priceRange: {};
  productType: string;
  itemType: string;
  foodType: string;
  calories: string;
  caloriesDisplayedText: string;
  warningType: string;
  accurateCalorie: string;
  maxOrderQuantity: number;
  maxProductCount: number;
  modifiable: boolean;
  nutritionInfo: {
    calorieCount: string;
    accurateCalorie: string;
    sodiumIndication: boolean;
  };
  sodiumIndication: boolean;
  productCount: number;
  productGroups: TacoBellProductGroup[];
  isFountain: boolean;
  isHasDefaultItem: boolean;
  preconfigured: boolean;
  isAvailableInStore: boolean;
  showAddedIngredientCalories: boolean;
  defaultProtein: boolean;
  primaryCategory: string;
  primaryCategoryCode: string;
  hasAVA: boolean;
  hasMeatless: boolean;
  productImageUrl: string;
  isDigitalProduct: boolean;
  searchable: boolean;
  pdpMastHead: {
    type: string;
  };
  showOnDelivery: boolean;
}

export interface TacoBellMenuCategory {
  code: string;
  name: string;
  appClsIconImage: {
    url: string;
  };
  appSortOrder: number;
  hideFromMenu: boolean;
  products: TacoBellProduct[];
}

export interface TacoBellMenuResponse {
  navigationFacets: {
    title: string;
    facets: {
      id: string;
      value: string;
      name: string;
    }[];
  };
  navigationCollections: {
    title: string;
    collections: {
      id: string;
      value: string;
      image: {
        url: string;
      }
    }[];
  };
  menuProductCategories: TacoBellMenuCategory[];
}