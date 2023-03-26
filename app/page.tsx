'use client';

import styles from './page.module.css'

import { useState } from 'react';
import TacoBellStoreBox from '../components/TacoBellStoreBox';
import type { TacoBellPricesLocation, TacoBellPricesStores } from '../lib/taco-bell-prices/types';

export default function Page() {
  const [storesInput, setStoresInput] = useState('')
  const [stores, setStores] = useState<TacoBellPricesStores>({
    "latitude": 33.5386523,
    "longitude": -112.1859866,
    "nearByStores": [
      {
        "storeStatus": "openNow",
        "address": {
          "country": {
            "isocode": "US"
          },
          "line1": " 7795 North 59th Ave.",
          "line2": null,
          "postalCode": "85301",
          "region": {
            "isocode": "US-AZ"
          },
          "town": "Glendale"
        },
        "geoPoint": {
          "latitude": 33.550324,
          "longitude": -112.185995
        },
        "name": "022346",
        "storeNumber": "022346",
        "formattedDistance": "0.80 Miles",
        "todayBusinessHours": {
          "closingTime": {
            "formattedHour": "12am",
            "hour": 12,
            "minute": 0
          },
          "openingTime": {
            "hour": 7,
            "minute": 0,
            "formattedHour": "7am"
          },
          "weekDay": "Sunday",
          "dayparts": [
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "name": "Balance Of Day",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "warningPriority": 60
              },
              "endTime": {
                "formattedHour": "12:00 AM",
                "hour": 12,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "afterMessageTitle": "Breakfast is currently unavailable online",
                "name": "Breakfast",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "closedMessageTitle": "Breakfast is currently unavailable online",
                "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "endMessageTitle": "Breakfast is currently unavailable online",
                "presetMinutes": 30,
                "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "startMessageTitle": "Breakfast is currently unavailable online",
                "warningPriority": 10
              },
              "endTime": {
                "formattedHour": "11:00 AM",
                "hour": 11,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Dine In",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 20
              },
              "endTime": {
                "formattedHour": "10:00 PM",
                "hour": 10,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Drive Thru",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 30
              },
              "endTime": {
                "formattedHour": "12:00 AM",
                "hour": 12,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                "name": "Happy Hour",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "Happier hour is from 2pm-5pm.",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                "warningPriority": 50
              },
              "endTime": {
                "formattedHour": "5:00 PM",
                "hour": 5,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "2:00 PM",
                "hour": 2,
                "minute": 0
              }
            }
          ]
        },
        "openingHours": {
          "code": "tacobell-store-hours-Hot Tacos, Inc.",
          "isBreakFastAvailable": true,
          "weekDayOpeningList": [
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Monday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Tuesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Wednesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Thursday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Friday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Saturday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Sunday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "storeStatus": "openNow",
        "address": {
          "country": {
            "isocode": "US"
          },
          "line1": " 4402 W Glendale",
          "line2": null,
          "postalCode": "85301",
          "region": {
            "isocode": "US-AZ"
          },
          "town": "Glendale"
        },
        "geoPoint": {
          "latitude": 33.5386,
          "longitude": -112.153393
        },
        "name": "002703",
        "storeNumber": "002703",
        "formattedDistance": "1.9 Miles",
        "todayBusinessHours": {
          "closingTime": {
            "formattedHour": "1am",
            "hour": 1,
            "minute": 0
          },
          "openingTime": {
            "hour": 8,
            "minute": 0,
            "formattedHour": "8am"
          },
          "weekDay": "Sunday",
          "dayparts": [
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "name": "Balance Of Day",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "warningPriority": 60
              },
              "endTime": {
                "formattedHour": "1:00 AM",
                "hour": 1,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "8:00 AM",
                "hour": 8,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "afterMessageTitle": "Breakfast is currently unavailable online",
                "name": "Breakfast",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "closedMessageTitle": "Breakfast is currently unavailable online",
                "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "endMessageTitle": "Breakfast is currently unavailable online",
                "presetMinutes": 30,
                "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "startMessageTitle": "Breakfast is currently unavailable online",
                "warningPriority": 10
              },
              "endTime": {
                "formattedHour": "11:00 AM",
                "hour": 11,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "8:00 AM",
                "hour": 8,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Dine In",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 20
              },
              "endTime": {
                "formattedHour": "10:00 PM",
                "hour": 10,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "8:00 AM",
                "hour": 8,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Drive Thru",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 30
              },
              "endTime": {
                "formattedHour": "1:00 AM",
                "hour": 1,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "8:00 AM",
                "hour": 8,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                "name": "Happy Hour",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "Happier hour is from 2pm-5pm.",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                "warningPriority": 50
              },
              "endTime": {
                "formattedHour": "5:00 PM",
                "hour": 5,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "2:00 PM",
                "hour": 2,
                "minute": 0
              }
            }
          ]
        },
        "openingHours": {
          "code": "tacobell-store-hours-Hot Tacos, Inc.",
          "isBreakFastAvailable": true,
          "weekDayOpeningList": [
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Monday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Tuesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Wednesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Thursday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Friday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Saturday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Sunday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "storeStatus": "openNow",
        "address": {
          "country": {
            "isocode": "US"
          },
          "line1": " 6606 West Camelback",
          "line2": null,
          "postalCode": "85301",
          "region": {
            "isocode": "US-AZ"
          },
          "town": "Glendale"
        },
        "geoPoint": {
          "latitude": 33.509583,
          "longitude": -112.201342
        },
        "name": "037531",
        "storeNumber": "037531",
        "formattedDistance": "2.2 Miles",
        "todayBusinessHours": {
          "closingTime": {
            "formattedHour": "12am",
            "hour": 12,
            "minute": 0
          },
          "openingTime": {
            "hour": 10,
            "minute": 0,
            "formattedHour": "10am"
          },
          "weekDay": "Sunday",
          "dayparts": [
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "name": "Balance Of Day",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "warningPriority": 60
              },
              "endTime": {
                "formattedHour": "12:00 AM",
                "hour": 12,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "10:00 AM",
                "hour": 10,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": true,
              "daypart": {
                "allDay": false,
                "closed": true,
                "showWarning": true,
                "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "afterMessageTitle": "Breakfast is currently unavailable online",
                "name": "Breakfast",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "closedMessageTitle": "Breakfast is currently unavailable online",
                "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "endMessageTitle": "Breakfast is currently unavailable online",
                "presetMinutes": 30,
                "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "startMessageTitle": "Breakfast is currently unavailable online",
                "warningPriority": 10
              },
              "endTime": {
                "formattedHour": "11:00 AM",
                "hour": 11,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "8:00 AM",
                "hour": 8,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Dine In",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 20
              },
              "endTime": {
                "formattedHour": "8:00 PM",
                "hour": 8,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "10:00 AM",
                "hour": 10,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Drive Thru",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 30
              },
              "endTime": {
                "formattedHour": "12:00 AM",
                "hour": 12,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "10:00 AM",
                "hour": 10,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                "name": "Happy Hour",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "Happier hour is from 2pm-5pm.",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                "warningPriority": 50
              },
              "endTime": {
                "formattedHour": "5:00 PM",
                "hour": 5,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "2:00 PM",
                "hour": 2,
                "minute": 0
              }
            }
          ]
        },
        "openingHours": {
          "code": "tacobell-store-hours-Luihn VantEdge Partners, LLC",
          "isBreakFastAvailable": false,
          "weekDayOpeningList": [
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 9,
                "minute": 0,
                "formattedHour": "9am"
              },
              "weekDay": "Monday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": true,
                  "daypart": {
                    "allDay": false,
                    "closed": true,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "8:00 PM",
                    "hour": 8,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 9,
                "minute": 0,
                "formattedHour": "9am"
              },
              "weekDay": "Tuesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": true,
                  "daypart": {
                    "allDay": false,
                    "closed": true,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "8:00 PM",
                    "hour": 8,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 9,
                "minute": 0,
                "formattedHour": "9am"
              },
              "weekDay": "Wednesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": true,
                  "daypart": {
                    "allDay": false,
                    "closed": true,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "8:00 PM",
                    "hour": 8,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 9,
                "minute": 0,
                "formattedHour": "9am"
              },
              "weekDay": "Thursday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": true,
                  "daypart": {
                    "allDay": false,
                    "closed": true,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "8:00 PM",
                    "hour": 8,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 9,
                "minute": 0,
                "formattedHour": "9am"
              },
              "weekDay": "Friday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": true,
                  "daypart": {
                    "allDay": false,
                    "closed": true,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "8:00 PM",
                    "hour": 8,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "11pm",
                "hour": 11,
                "minute": 0
              },
              "openingTime": {
                "hour": 9,
                "minute": 0,
                "formattedHour": "9am"
              },
              "weekDay": "Saturday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "11:00 PM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": true,
                  "daypart": {
                    "allDay": false,
                    "closed": true,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "8:00 PM",
                    "hour": 8,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "11:00 PM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 10,
                "minute": 0,
                "formattedHour": "10am"
              },
              "weekDay": "Sunday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "10:00 AM",
                    "hour": 10,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": true,
                  "daypart": {
                    "allDay": false,
                    "closed": true,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "8:00 PM",
                    "hour": 8,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "10:00 AM",
                    "hour": 10,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "10:00 AM",
                    "hour": 10,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "storeStatus": "openNow",
        "address": {
          "country": {
            "isocode": "US"
          },
          "line1": " 4351 W. Olive",
          "line2": null,
          "postalCode": "85302",
          "region": {
            "isocode": "US-AZ"
          },
          "town": "Glendale"
        },
        "geoPoint": {
          "latitude": 33.56766,
          "longitude": -112.15148
        },
        "name": "022003",
        "storeNumber": "022003",
        "formattedDistance": "2.8 Miles",
        "todayBusinessHours": {
          "closingTime": {
            "formattedHour": "1am",
            "hour": 1,
            "minute": 0
          },
          "openingTime": {
            "hour": 7,
            "minute": 0,
            "formattedHour": "7am"
          },
          "weekDay": "Sunday",
          "dayparts": [
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "name": "Balance Of Day",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "warningPriority": 60
              },
              "endTime": {
                "formattedHour": "1:00 AM",
                "hour": 1,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "afterMessageTitle": "Breakfast is currently unavailable online",
                "name": "Breakfast",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "closedMessageTitle": "Breakfast is currently unavailable online",
                "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "endMessageTitle": "Breakfast is currently unavailable online",
                "presetMinutes": 30,
                "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "startMessageTitle": "Breakfast is currently unavailable online",
                "warningPriority": 10
              },
              "endTime": {
                "formattedHour": "11:00 AM",
                "hour": 11,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Dine In",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 20
              },
              "endTime": {
                "formattedHour": "10:00 PM",
                "hour": 10,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Drive Thru",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 30
              },
              "endTime": {
                "formattedHour": "1:00 AM",
                "hour": 1,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                "name": "Happy Hour",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "Happier hour is from 2pm-5pm.",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                "warningPriority": 50
              },
              "endTime": {
                "formattedHour": "5:00 PM",
                "hour": 5,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "2:00 PM",
                "hour": 2,
                "minute": 0
              }
            }
          ]
        },
        "openingHours": {
          "code": "tacobell-store-hours-Hot Tacos, Inc.",
          "isBreakFastAvailable": true,
          "weekDayOpeningList": [
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Monday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Tuesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Wednesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Thursday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Friday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Saturday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Sunday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "storeStatus": "openNow",
        "address": {
          "country": {
            "isocode": "US"
          },
          "line1": " 3517 W Glendale Ave",
          "line2": null,
          "postalCode": "85051",
          "region": {
            "isocode": "US-AZ"
          },
          "town": "Phoenix"
        },
        "geoPoint": {
          "latitude": 33.538767,
          "longitude": -112.134228
        },
        "name": "000141",
        "storeNumber": "000141",
        "formattedDistance": "3.0 Miles",
        "todayBusinessHours": {
          "closingTime": {
            "formattedHour": "1am",
            "hour": 1,
            "minute": 0
          },
          "openingTime": {
            "hour": 7,
            "minute": 0,
            "formattedHour": "7am"
          },
          "weekDay": "Sunday",
          "dayparts": [
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "name": "Balance Of Day",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "warningPriority": 60
              },
              "endTime": {
                "formattedHour": "1:00 AM",
                "hour": 1,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "afterMessageTitle": "Breakfast is currently unavailable online",
                "name": "Breakfast",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "closedMessageTitle": "Breakfast is currently unavailable online",
                "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "endMessageTitle": "Breakfast is currently unavailable online",
                "presetMinutes": 30,
                "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "startMessageTitle": "Breakfast is currently unavailable online",
                "warningPriority": 10
              },
              "endTime": {
                "formattedHour": "11:00 AM",
                "hour": 11,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Dine In",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 20
              },
              "endTime": {
                "formattedHour": "10:00 PM",
                "hour": 10,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "8:00 AM",
                "hour": 8,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Drive Thru",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 30
              },
              "endTime": {
                "formattedHour": "1:00 AM",
                "hour": 1,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                "name": "Happy Hour",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "Happier hour is from 2pm-5pm.",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                "warningPriority": 50
              },
              "endTime": {
                "formattedHour": "5:00 PM",
                "hour": 5,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "2:00 PM",
                "hour": 2,
                "minute": 0
              }
            }
          ]
        },
        "openingHours": {
          "code": "tacobell-store-hours-Hot Tacos, Inc.",
          "isBreakFastAvailable": true,
          "weekDayOpeningList": [
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Monday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Tuesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Wednesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "2am",
                "hour": 2,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Thursday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "3am",
                "hour": 3,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Friday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "3:00 AM",
                    "hour": 3,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "3:00 AM",
                    "hour": 3,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "3am",
                "hour": 3,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Saturday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "3:00 AM",
                    "hour": 3,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "3:00 AM",
                    "hour": 3,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Sunday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "storeStatus": "openNow",
        "address": {
          "country": {
            "isocode": "US"
          },
          "line1": " 6745 W Peoria Ave",
          "line2": null,
          "postalCode": "85345",
          "region": {
            "isocode": "US-AZ"
          },
          "town": "Peoria"
        },
        "geoPoint": {
          "latitude": 33.581475,
          "longitude": -112.204305
        },
        "name": "029512",
        "storeNumber": "029512",
        "formattedDistance": "3.1 Miles",
        "todayBusinessHours": {
          "closingTime": {
            "formattedHour": "2am",
            "hour": 2,
            "minute": 0
          },
          "openingTime": {
            "hour": 7,
            "minute": 0,
            "formattedHour": "7am"
          },
          "weekDay": "Sunday",
          "dayparts": [
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "name": "Balance Of Day",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "warningPriority": 60
              },
              "endTime": {
                "formattedHour": "2:00 AM",
                "hour": 2,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "afterMessageTitle": "Breakfast is currently unavailable online",
                "name": "Breakfast",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "closedMessageTitle": "Breakfast is currently unavailable online",
                "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "endMessageTitle": "Breakfast is currently unavailable online",
                "presetMinutes": 30,
                "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "startMessageTitle": "Breakfast is currently unavailable online",
                "warningPriority": 10
              },
              "endTime": {
                "formattedHour": "11:00 AM",
                "hour": 11,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Dine In",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 20
              },
              "endTime": {
                "formattedHour": "10:00 PM",
                "hour": 10,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Drive Thru",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 30
              },
              "endTime": {
                "formattedHour": "2:00 AM",
                "hour": 2,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                "name": "Happy Hour",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "Happier hour is from 2pm-5pm.",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                "warningPriority": 50
              },
              "endTime": {
                "formattedHour": "5:00 PM",
                "hour": 5,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "2:00 PM",
                "hour": 2,
                "minute": 0
              }
            }
          ]
        },
        "openingHours": {
          "code": "tacobell-store-hours-Hot Tacos, Inc.",
          "isBreakFastAvailable": true,
          "weekDayOpeningList": [
            {
              "closingTime": {
                "formattedHour": "2am",
                "hour": 2,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Monday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "2am",
                "hour": 2,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Tuesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "2am",
                "hour": 2,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Wednesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "2am",
                "hour": 2,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Thursday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "3am",
                "hour": 3,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Friday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "3:00 AM",
                    "hour": 3,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "3:00 AM",
                    "hour": 3,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "3am",
                "hour": 3,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Saturday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "3:00 AM",
                    "hour": 3,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "3:00 AM",
                    "hour": 3,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "2am",
                "hour": 2,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Sunday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "storeStatus": "openNow",
        "address": {
          "country": {
            "isocode": "US"
          },
          "line1": " 4304 W Indian School Rd",
          "line2": null,
          "postalCode": "85031",
          "region": {
            "isocode": "US-AZ"
          },
          "town": "Phoenix"
        },
        "geoPoint": {
          "latitude": 33.495972,
          "longitude": -112.151947
        },
        "name": "032728",
        "storeNumber": "032728",
        "formattedDistance": "3.5 Miles",
        "todayBusinessHours": {
          "closingTime": {
            "formattedHour": "1am",
            "hour": 1,
            "minute": 0
          },
          "openingTime": {
            "hour": 7,
            "minute": 0,
            "formattedHour": "7am"
          },
          "weekDay": "Sunday",
          "dayparts": [
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "name": "Balance Of Day",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "warningPriority": 60
              },
              "endTime": {
                "formattedHour": "1:00 AM",
                "hour": 1,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "afterMessageTitle": "Breakfast is currently unavailable online",
                "name": "Breakfast",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "closedMessageTitle": "Breakfast is currently unavailable online",
                "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "endMessageTitle": "Breakfast is currently unavailable online",
                "presetMinutes": 30,
                "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "startMessageTitle": "Breakfast is currently unavailable online",
                "warningPriority": 10
              },
              "endTime": {
                "formattedHour": "11:00 AM",
                "hour": 11,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Dine In",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 20
              },
              "endTime": {
                "formattedHour": "10:00 PM",
                "hour": 10,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Drive Thru",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 30
              },
              "endTime": {
                "formattedHour": "1:00 AM",
                "hour": 1,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                "name": "Happy Hour",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "Happier hour is from 2pm-5pm.",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                "warningPriority": 50
              },
              "endTime": {
                "formattedHour": "5:00 PM",
                "hour": 5,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "2:00 PM",
                "hour": 2,
                "minute": 0
              }
            }
          ]
        },
        "openingHours": {
          "code": "tacobell-store-hours-Hot Tacos, Inc.",
          "isBreakFastAvailable": true,
          "weekDayOpeningList": [
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Monday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Tuesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Wednesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Thursday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Friday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Saturday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Sunday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "storeStatus": "openNow",
        "address": {
          "country": {
            "isocode": "US"
          },
          "line1": " 7449 W Indian School Rd",
          "line2": null,
          "postalCode": "85033",
          "region": {
            "isocode": "US-AZ"
          },
          "town": "Phoenix"
        },
        "geoPoint": {
          "latitude": 33.494522,
          "longitude": -112.219875
        },
        "name": "032735",
        "storeNumber": "032735",
        "formattedDistance": "3.6 Miles",
        "todayBusinessHours": {
          "closingTime": {
            "formattedHour": "12am",
            "hour": 12,
            "minute": 0
          },
          "openingTime": {
            "hour": 7,
            "minute": 0,
            "formattedHour": "7am"
          },
          "weekDay": "Sunday",
          "dayparts": [
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "name": "Balance Of Day",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "warningPriority": 60
              },
              "endTime": {
                "formattedHour": "12:00 AM",
                "hour": 12,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "afterMessageTitle": "Breakfast is currently unavailable online",
                "name": "Breakfast",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "closedMessageTitle": "Breakfast is currently unavailable online",
                "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "endMessageTitle": "Breakfast is currently unavailable online",
                "presetMinutes": 30,
                "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "startMessageTitle": "Breakfast is currently unavailable online",
                "warningPriority": 10
              },
              "endTime": {
                "formattedHour": "11:00 AM",
                "hour": 11,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Dine In",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 20
              },
              "endTime": {
                "formattedHour": "10:00 PM",
                "hour": 10,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Drive Thru",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 30
              },
              "endTime": {
                "formattedHour": "12:00 AM",
                "hour": 12,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                "name": "Happy Hour",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "Happier hour is from 2pm-5pm.",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                "warningPriority": 50
              },
              "endTime": {
                "formattedHour": "5:00 PM",
                "hour": 5,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "2:00 PM",
                "hour": 2,
                "minute": 0
              }
            }
          ]
        },
        "openingHours": {
          "code": "tacobell-store-hours-Hot Tacos, Inc.",
          "isBreakFastAvailable": true,
          "weekDayOpeningList": [
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Monday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Tuesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Wednesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Thursday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Friday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Saturday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Sunday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "storeStatus": "openNow",
        "address": {
          "country": {
            "isocode": "US"
          },
          "line1": " 8301 W Peoria Ave",
          "line2": null,
          "postalCode": "85345",
          "region": {
            "isocode": "US-AZ"
          },
          "town": "Peoria"
        },
        "geoPoint": {
          "latitude": 33.581748,
          "longitude": -112.236503
        },
        "name": "029513",
        "storeNumber": "029513",
        "formattedDistance": "4.2 Miles",
        "todayBusinessHours": {
          "closingTime": {
            "formattedHour": "12am",
            "hour": 12,
            "minute": 0
          },
          "openingTime": {
            "hour": 8,
            "minute": 0,
            "formattedHour": "8am"
          },
          "weekDay": "Sunday",
          "dayparts": [
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "name": "Balance Of Day",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "warningPriority": 60
              },
              "endTime": {
                "formattedHour": "12:00 AM",
                "hour": 12,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "8:00 AM",
                "hour": 8,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "afterMessageTitle": "Breakfast is currently unavailable online",
                "name": "Breakfast",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "closedMessageTitle": "Breakfast is currently unavailable online",
                "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "endMessageTitle": "Breakfast is currently unavailable online",
                "presetMinutes": 30,
                "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "startMessageTitle": "Breakfast is currently unavailable online",
                "warningPriority": 10
              },
              "endTime": {
                "formattedHour": "11:00 AM",
                "hour": 11,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "8:00 AM",
                "hour": 8,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Dine In",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 20
              },
              "endTime": {
                "formattedHour": "10:00 PM",
                "hour": 10,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "8:00 AM",
                "hour": 8,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Drive Thru",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 30
              },
              "endTime": {
                "formattedHour": "12:00 AM",
                "hour": 12,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "8:00 AM",
                "hour": 8,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                "name": "Happy Hour",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "Happier hour is from 2pm-5pm.",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                "warningPriority": 50
              },
              "endTime": {
                "formattedHour": "5:00 PM",
                "hour": 5,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "2:00 PM",
                "hour": 2,
                "minute": 0
              }
            }
          ]
        },
        "openingHours": {
          "code": "tacobell-store-hours-Hot Tacos, Inc.",
          "isBreakFastAvailable": true,
          "weekDayOpeningList": [
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Monday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Tuesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Wednesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Thursday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Friday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Saturday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Sunday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "storeStatus": "openNow",
        "address": {
          "country": {
            "isocode": "US"
          },
          "line1": " 3507 W. Peoria Ave.",
          "line2": null,
          "postalCode": "85029",
          "region": {
            "isocode": "US-AZ"
          },
          "town": "Phoenix"
        },
        "geoPoint": {
          "latitude": 33.58216,
          "longitude": -112.134388
        },
        "name": "037569",
        "storeNumber": "037569",
        "formattedDistance": "4.2 Miles",
        "todayBusinessHours": {
          "closingTime": {
            "formattedHour": "12am",
            "hour": 12,
            "minute": 0
          },
          "openingTime": {
            "hour": 8,
            "minute": 0,
            "formattedHour": "8am"
          },
          "weekDay": "Sunday",
          "dayparts": [
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "name": "Balance Of Day",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "warningPriority": 60
              },
              "endTime": {
                "formattedHour": "12:00 AM",
                "hour": 12,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "9:00 AM",
                "hour": 9,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "afterMessageTitle": "Breakfast is currently unavailable online",
                "name": "Breakfast",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "closedMessageTitle": "Breakfast is currently unavailable online",
                "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "endMessageTitle": "Breakfast is currently unavailable online",
                "presetMinutes": 30,
                "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "startMessageTitle": "Breakfast is currently unavailable online",
                "warningPriority": 10
              },
              "endTime": {
                "formattedHour": "11:00 AM",
                "hour": 11,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "8:00 AM",
                "hour": 8,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Dine In",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 20
              },
              "endTime": {
                "formattedHour": "9:00 PM",
                "hour": 9,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "9:00 AM",
                "hour": 9,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Drive Thru",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 30
              },
              "endTime": {
                "formattedHour": "12:00 AM",
                "hour": 12,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "8:00 AM",
                "hour": 8,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                "name": "Happy Hour",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "Happier hour is from 2pm-5pm.",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                "warningPriority": 50
              },
              "endTime": {
                "formattedHour": "5:00 PM",
                "hour": 5,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "2:00 PM",
                "hour": 2,
                "minute": 0
              }
            }
          ]
        },
        "openingHours": {
          "code": "tacobell-store-hours-Luihn VantEdge Partners, LLC",
          "isBreakFastAvailable": true,
          "weekDayOpeningList": [
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Monday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "9:00 PM",
                    "hour": 9,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Tuesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "9:00 PM",
                    "hour": 9,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Wednesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "9:00 PM",
                    "hour": 9,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Thursday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "9:00 PM",
                    "hour": 9,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Friday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "9:00 PM",
                    "hour": 9,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Saturday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "9:00 PM",
                    "hour": 9,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 8,
                "minute": 0,
                "formattedHour": "8am"
              },
              "weekDay": "Sunday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "9:00 PM",
                    "hour": 9,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "9:00 AM",
                    "hour": 9,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "8:00 AM",
                    "hour": 8,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "storeStatus": "openNow",
        "address": {
          "country": {
            "isocode": "US"
          },
          "line1": " 9380 W. Northern Avenue",
          "line2": null,
          "postalCode": "85305",
          "region": {
            "isocode": "US-AZ"
          },
          "town": "Glendale"
        },
        "geoPoint": {
          "latitude": 33.551983,
          "longitude": -112.26141
        },
        "name": "029517",
        "storeNumber": "029517",
        "formattedDistance": "4.4 Miles",
        "todayBusinessHours": {
          "closingTime": {
            "formattedHour": "12am",
            "hour": 12,
            "minute": 0
          },
          "openingTime": {
            "hour": 7,
            "minute": 0,
            "formattedHour": "7am"
          },
          "weekDay": "Sunday",
          "dayparts": [
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "name": "Balance Of Day",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "warningPriority": 60
              },
              "endTime": {
                "formattedHour": "12:00 AM",
                "hour": 12,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "afterMessageTitle": "Breakfast is currently unavailable online",
                "name": "Breakfast",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "closedMessageTitle": "Breakfast is currently unavailable online",
                "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "endMessageTitle": "Breakfast is currently unavailable online",
                "presetMinutes": 30,
                "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "startMessageTitle": "Breakfast is currently unavailable online",
                "warningPriority": 10
              },
              "endTime": {
                "formattedHour": "11:00 AM",
                "hour": 11,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Dine In",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 20
              },
              "endTime": {
                "formattedHour": "10:00 PM",
                "hour": 10,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Drive Thru",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 30
              },
              "endTime": {
                "formattedHour": "12:00 AM",
                "hour": 12,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                "name": "Happy Hour",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "Happier hour is from 2pm-5pm.",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                "warningPriority": 50
              },
              "endTime": {
                "formattedHour": "5:00 PM",
                "hour": 5,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "2:00 PM",
                "hour": 2,
                "minute": 0
              }
            }
          ]
        },
        "openingHours": {
          "code": "tacobell-store-hours-Hot Tacos, Inc.",
          "isBreakFastAvailable": true,
          "weekDayOpeningList": [
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Monday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Tuesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Wednesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Thursday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Friday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Saturday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "12am",
                "hour": 12,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Sunday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "12:00 AM",
                    "hour": 12,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "storeStatus": "openNow",
        "address": {
          "country": {
            "isocode": "US"
          },
          "line1": " 4950 W. Thunderbird Rd",
          "line2": null,
          "postalCode": "85306",
          "region": {
            "isocode": "US-AZ"
          },
          "town": "Glendale"
        },
        "geoPoint": {
          "latitude": 33.610893,
          "longitude": -112.166671
        },
        "name": "022632",
        "storeNumber": "022632",
        "formattedDistance": "5.1 Miles",
        "todayBusinessHours": {
          "closingTime": {
            "formattedHour": "1am",
            "hour": 1,
            "minute": 0
          },
          "openingTime": {
            "hour": 7,
            "minute": 0,
            "formattedHour": "7am"
          },
          "weekDay": "Sunday",
          "dayparts": [
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "name": "Balance Of Day",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "warningPriority": 60
              },
              "endTime": {
                "formattedHour": "1:00 AM",
                "hour": 1,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "afterMessageTitle": "Breakfast is currently unavailable online",
                "name": "Breakfast",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "closedMessageTitle": "Breakfast is currently unavailable online",
                "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "endMessageTitle": "Breakfast is currently unavailable online",
                "presetMinutes": 30,
                "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "startMessageTitle": "Breakfast is currently unavailable online",
                "warningPriority": 10
              },
              "endTime": {
                "formattedHour": "11:00 AM",
                "hour": 11,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Dine In",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 20
              },
              "endTime": {
                "formattedHour": "10:00 PM",
                "hour": 10,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Drive Thru",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 30
              },
              "endTime": {
                "formattedHour": "1:00 AM",
                "hour": 1,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                "name": "Happy Hour",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "Happier hour is from 2pm-5pm.",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                "warningPriority": 50
              },
              "endTime": {
                "formattedHour": "5:00 PM",
                "hour": 5,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "2:00 PM",
                "hour": 2,
                "minute": 0
              }
            }
          ]
        },
        "openingHours": {
          "code": "tacobell-store-hours-Hot Tacos, Inc.",
          "isBreakFastAvailable": true,
          "weekDayOpeningList": [
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Monday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Tuesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Wednesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Thursday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "2am",
                "hour": 2,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Friday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "2am",
                "hour": 2,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Saturday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Sunday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "storeStatus": "openNow",
        "address": {
          "country": {
            "isocode": "US"
          },
          "line1": " 1860 N 75th Ave",
          "line2": null,
          "postalCode": "85035",
          "region": {
            "isocode": "US-AZ"
          },
          "town": "Phoenix"
        },
        "geoPoint": {
          "latitude": 33.469223,
          "longitude": -112.221003
        },
        "name": "032736",
        "storeNumber": "032736",
        "formattedDistance": "5.2 Miles",
        "todayBusinessHours": {
          "closingTime": {
            "formattedHour": "1am",
            "hour": 1,
            "minute": 0
          },
          "openingTime": {
            "hour": 7,
            "minute": 0,
            "formattedHour": "7am"
          },
          "weekDay": "Sunday",
          "dayparts": [
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "name": "Balance Of Day",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                "warningPriority": 60
              },
              "endTime": {
                "formattedHour": "1:00 AM",
                "hour": 1,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "afterMessageTitle": "Breakfast is currently unavailable online",
                "name": "Breakfast",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "closedMessageTitle": "Breakfast is currently unavailable online",
                "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "endMessageTitle": "Breakfast is currently unavailable online",
                "presetMinutes": 30,
                "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                "startMessageTitle": "Breakfast is currently unavailable online",
                "warningPriority": 10
              },
              "endTime": {
                "formattedHour": "11:00 AM",
                "hour": 11,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Dine In",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 20
              },
              "endTime": {
                "formattedHour": "10:00 PM",
                "hour": 10,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "",
                "afterMessageTitle": "",
                "name": "Drive Thru",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "",
                "endMessageTitle": "",
                "presetMinutes": 30,
                "startMessageDetail": "",
                "startMessageTitle": "",
                "warningPriority": 30
              },
              "endTime": {
                "formattedHour": "1:00 AM",
                "hour": 1,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "7:00 AM",
                "hour": 7,
                "minute": 0
              }
            },
            {
              "allDay": false,
              "closed": false,
              "daypart": {
                "allDay": false,
                "closed": false,
                "showWarning": true,
                "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                "name": "Happy Hour",
                "beforeEndTimeMinutes": 5,
                "closedMessageDetail": "",
                "closedMessageTitle": "",
                "endMessageDetail": "Happier hour is from 2pm-5pm.",
                "endMessageTitle": "Don't Wait Until It's Too Late",
                "presetMinutes": 30,
                "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                "warningPriority": 50
              },
              "endTime": {
                "formattedHour": "5:00 PM",
                "hour": 5,
                "minute": 0
              },
              "startTime": {
                "formattedHour": "2:00 PM",
                "hour": 2,
                "minute": 0
              }
            }
          ]
        },
        "openingHours": {
          "code": "tacobell-store-hours-Hot Tacos, Inc.",
          "isBreakFastAvailable": true,
          "weekDayOpeningList": [
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Monday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Tuesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Wednesday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Thursday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "2am",
                "hour": 2,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Friday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "2am",
                "hour": 2,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Saturday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "2:00 AM",
                    "hour": 2,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            },
            {
              "closingTime": {
                "formattedHour": "1am",
                "hour": 1,
                "minute": 0
              },
              "openingTime": {
                "hour": 7,
                "minute": 0,
                "formattedHour": "7am"
              },
              "weekDay": "Sunday",
              "dayparts": [
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "name": "Balance Of Day",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "Take Advantage Of Our Tasty Daytime Selections",
                    "warningPriority": 60
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "afterMessageTitle": "Breakfast is currently unavailable online",
                    "name": "Breakfast",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "closedMessageTitle": "Breakfast is currently unavailable online",
                    "endMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "endMessageTitle": "Breakfast is currently unavailable online",
                    "presetMinutes": 30,
                    "startMessageDetail": "Visit our drive-thru for participating restaurants serving breakfast",
                    "startMessageTitle": "Breakfast is currently unavailable online",
                    "warningPriority": 10
                  },
                  "endTime": {
                    "formattedHour": "11:00 AM",
                    "hour": 11,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Dine In",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 20
                  },
                  "endTime": {
                    "formattedHour": "10:00 PM",
                    "hour": 10,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "",
                    "afterMessageTitle": "",
                    "name": "Drive Thru",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "",
                    "endMessageTitle": "",
                    "presetMinutes": 30,
                    "startMessageDetail": "",
                    "startMessageTitle": "",
                    "warningPriority": 30
                  },
                  "endTime": {
                    "formattedHour": "1:00 AM",
                    "hour": 1,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "7:00 AM",
                    "hour": 7,
                    "minute": 0
                  }
                },
                {
                  "allDay": false,
                  "closed": false,
                  "daypart": {
                    "allDay": false,
                    "closed": false,
                    "showWarning": true,
                    "afterMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "afterMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "name": "Happy Hour",
                    "beforeEndTimeMinutes": 5,
                    "closedMessageDetail": "",
                    "closedMessageTitle": "",
                    "endMessageDetail": "Happier hour is from 2pm-5pm.",
                    "endMessageTitle": "Don't Wait Until It's Too Late",
                    "presetMinutes": 30,
                    "startMessageDetail": "Happier Hour is from 2pm-5pm.",
                    "startMessageTitle": "Take Advantage Of Our Tasty Specials",
                    "warningPriority": 50
                  },
                  "endTime": {
                    "formattedHour": "5:00 PM",
                    "hour": 5,
                    "minute": 0
                  },
                  "startTime": {
                    "formattedHour": "2:00 PM",
                    "hour": 2,
                    "minute": 0
                  }
                }
              ]
            }
          ]
        }
      }
    ]
  })

  const getStores = async () => {
    const prom = new Promise((resolve, reject) => {
      fetch(`/api/locate?location=${storesInput}`).then(res => {
        if (res.status !== 200) {
          reject(res);
          return;
        }

        res.json().then((data: TacoBellPricesLocation) => {
          fetch(`/api/findStores?lat=${data.geometry.lat}&lng=${data.geometry.lng}`).then(res2 => {
            if (res2.status !== 200) {
              reject(res);
              return;
            }

            res2.json().then((data2: TacoBellPricesStores) => {
              console.log(data2);
              setStores(data2);
              resolve(undefined);
            });
          });
        });
      })
    });

    return prom;
  };

  return (
    <main className={styles.content}>
      <h1 className={styles.title}>Taco Bell Price Comparer</h1>
      <p className={styles.description}>Compare the prices of Taco Bell items across the country.</p>

      <div className={styles.searchUtility}>
        <input type="text" className={styles.input} placeholder="Search by address, city, or zip" onKeyUp={e => setStoresInput((e.target as HTMLInputElement).value)} />
        <button className={styles.button} onClick={getStores}>Search</button>
      </div>

      <div className={styles.storesContainer}>
        {stores.nearByStores.map(store => <TacoBellStoreBox store={store} key={Number(store.formattedDistance.split(" ")[0]) + Math.random() * 0.00001} />)}
      </div>
    </main>
  )
}
