'use client';

import Nav from '@/app/components/Nav';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SAMPLE_RESPONSE=
{
  "vegetarian": false,
  "vegan": false,
  "glutenFree": true,
  "dairyFree": true,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": true,
  "weightWatcherSmartPoints": 5,
  "gaps": "no",
  "preparationMinutes": null,
  "cookingMinutes": null,
  "aggregateLikes": 1,
  "healthScore": 6,
  "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
  "license": "CC BY 3.0",
  "sourceName": "Foodista",
  "pricePerServing": 199.43,
  "extendedIngredients": [
    {
      "id": 10111001,
      "aisle": "Produce",
      "image": "alfalfa-sprouts.png",
      "consistency": "SOLID",
      "name": "alfalfa sprouts",
      "nameClean": "alfalfa sprouts",
      "original": "•alfalfa sprouts (garnish)",
      "originalName": "alfalfa sprouts (garnish)",
      "amount": 2.0,
      "unit": "servings",
      "meta": [
        "(garnish)"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "servings",
          "unitLong": "servings"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "servings",
          "unitLong": "servings"
        }
      }
    },
    {
      "id": 11206,
      "aisle": "Produce",
      "image": "cucumber.jpg",
      "consistency": "SOLID",
      "name": "cucumber",
      "nameClean": "cucumber",
      "original": "•1/2 cucumber, thinly sliced",
      "originalName": "cucumber, thinly sliced",
      "amount": 0.5,
      "unit": "",
      "meta": [
        "thinly sliced"
      ],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 0.5,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 1123,
      "aisle": "Milk, Eggs, Other Dairy",
      "image": "egg.png",
      "consistency": "SOLID",
      "name": "eggs",
      "nameClean": "egg",
      "original": "•4 large eggs, sunny side up",
      "originalName": "eggs, sunny side up",
      "amount": 4.0,
      "unit": "large",
      "meta": [

      ],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "large",
          "unitLong": "larges"
        },
        "metric": {
          "amount": 4.0,
          "unitShort": "large",
          "unitLong": "larges"
        }
      }
    },
    {
      "id": 1016973,
      "aisle": "Ethnic Foods",
      "image": "chili-paste.png",
      "consistency": "LIQUID",
      "name": "gochujang",
      "nameClean": "gochujang",
      "original": "•4 tbsp gochujang (Korean red pepper paste; Sriracha sauce okay too)",
      "originalName": "gochujang (Korean red pepper paste; Sriracha sauce okay too)",
      "amount": 4.0,
      "unit": "tbsp",
      "meta": [
        "red",
        "(Korean pepper paste; Sriracha sauce okay too)"
      ],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        },
        "metric": {
          "amount": 4.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        }
      }
    },
    {
      "id": 98860,
      "aisle": "Ethnic Foods",
      "image": "kimchi.png",
      "consistency": "SOLID",
      "name": "kimchi",
      "nameClean": "kimchi",
      "original": "•1/2 cup kimchi, thinly sliced",
      "originalName": "kimchi, thinly sliced",
      "amount": 0.5,
      "unit": "cup",
      "meta": [
        "thinly sliced"
      ],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 57.5,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 11257,
      "aisle": "Produce",
      "image": "lollo-rosso.jpg",
      "consistency": "SOLID",
      "name": "leaf lettuce",
      "nameClean": "red leaf lettuce",
      "original": "•2, 3 pieces red leaf lettuce, thinly shredded",
      "originalName": "2, red leaf lettuce, thinly shredded",
      "amount": 3.0,
      "unit": "pieces",
      "meta": [
        "shredded",
        "red"
      ],
      "measures": {
        "us": {
          "amount": 3.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 3.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 12023,
      "aisle": "Spices and Seasonings",
      "image": "sesame-seeds.png",
      "consistency": "SOLID",
      "name": "sesame seeds",
      "nameClean": "sesame seeds",
      "original": "•1 tsp sesame seeds (garnish)",
      "originalName": "sesame seeds (garnish)",
      "amount": 1.0,
      "unit": "tsp",
      "meta": [
        "(garnish)"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "tsp",
          "unitLong": "teaspoon"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "tsp",
          "unitLong": "teaspoon"
        }
      }
    },
    {
      "id": -1,
      "aisle": "?",
      "image": null,
      "consistency": "SOLID",
      "name": "bibim-myun packages",
      "nameClean": null,
      "original": "•2 Instant Bibim-myun packages",
      "originalName": "Instant Bibim-myun packages",
      "amount": 2.0,
      "unit": "",
      "meta": [
        "instant"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    }
  ],
  "id": 649029,
  "title": "Korean Bibim Naengmyun (Instant Spicy Cold Noodles)",
  "readyInMinutes": 45,
  "servings": 2,
  "sourceUrl": "https://www.foodista.com/recipe/V7VF28CS/korean-bibim-naengmyun-instant-spicy-cold-noodles",
  "image": "https://img.spoonacular.com/recipes/649029-556x370.jpg",
  "imageType": "jpg",
  "nutrition": {
    "nutrients": [
      {
        "name": "Calories",
        "amount": 197.83,
        "unit": "kcal",
        "percentOfDailyNeeds": 9.89
      },
      {
        "name": "Fat",
        "amount": 10.38,
        "unit": "g",
        "percentOfDailyNeeds": 15.97
      },
      {
        "name": "Saturated Fat",
        "amount": 3.24,
        "unit": "g",
        "percentOfDailyNeeds": 20.28
      },
      {
        "name": "Carbohydrates",
        "amount": 13.09,
        "unit": "g",
        "percentOfDailyNeeds": 4.36
      },
      {
        "name": "Net Carbohydrates",
        "amount": 11.78,
        "unit": "g",
        "percentOfDailyNeeds": 4.28
      },
      {
        "name": "Sugar",
        "amount": 4.77,
        "unit": "g",
        "percentOfDailyNeeds": 5.3
      },
      {
        "name": "Cholesterol",
        "amount": 372.0,
        "unit": "mg",
        "percentOfDailyNeeds": 124.0
      },
      {
        "name": "Sodium",
        "amount": 294.02,
        "unit": "mg",
        "percentOfDailyNeeds": 12.78
      },
      {
        "name": "Alcohol",
        "amount": 0.0,
        "unit": "g",
        "percentOfDailyNeeds": 100.0
      },
      {
        "name": "Protein",
        "amount": 14.45,
        "unit": "g",
        "percentOfDailyNeeds": 28.89
      },
      {
        "name": "Selenium",
        "amount": 31.67,
        "unit": "µg",
        "percentOfDailyNeeds": 45.24
      },
      {
        "name": "Vitamin B2",
        "amount": 0.56,
        "unit": "mg",
        "percentOfDailyNeeds": 33.22
      },
      {
        "name": "Phosphorus",
        "amount": 245.74,
        "unit": "mg",
        "percentOfDailyNeeds": 24.57
      },
      {
        "name": "Vitamin K",
        "amount": 21.05,
        "unit": "µg",
        "percentOfDailyNeeds": 20.05
      },
      {
        "name": "Folate",
        "amount": 77.72,
        "unit": "µg",
        "percentOfDailyNeeds": 19.43
      },
      {
        "name": "Vitamin B5",
        "amount": 1.72,
        "unit": "mg",
        "percentOfDailyNeeds": 17.21
      },
      {
        "name": "Iron",
        "amount": 3.08,
        "unit": "mg",
        "percentOfDailyNeeds": 17.1
      },
      {
        "name": "Vitamin B6",
        "amount": 0.33,
        "unit": "mg",
        "percentOfDailyNeeds": 16.68
      },
      {
        "name": "Vitamin A",
        "amount": 802.42,
        "unit": "IU",
        "percentOfDailyNeeds": 16.05
      },
      {
        "name": "Vitamin B12",
        "amount": 0.89,
        "unit": "µg",
        "percentOfDailyNeeds": 14.83
      },
      {
        "name": "Vitamin D",
        "amount": 2.0,
        "unit": "µg",
        "percentOfDailyNeeds": 13.33
      },
      {
        "name": "Potassium",
        "amount": 417.49,
        "unit": "mg",
        "percentOfDailyNeeds": 11.93
      },
      {
        "name": "Copper",
        "amount": 0.22,
        "unit": "mg",
        "percentOfDailyNeeds": 10.96
      },
      {
        "name": "Zinc",
        "amount": 1.62,
        "unit": "mg",
        "percentOfDailyNeeds": 10.83
      },
      {
        "name": "Vitamin C",
        "amount": 7.98,
        "unit": "mg",
        "percentOfDailyNeeds": 9.67
      },
      {
        "name": "Calcium",
        "amount": 93.35,
        "unit": "mg",
        "percentOfDailyNeeds": 9.34
      },
      {
        "name": "Magnesium",
        "amount": 33.06,
        "unit": "mg",
        "percentOfDailyNeeds": 8.27
      },
      {
        "name": "Vitamin E",
        "amount": 1.19,
        "unit": "mg",
        "percentOfDailyNeeds": 7.96
      },
      {
        "name": "Vitamin B1",
        "amount": 0.11,
        "unit": "mg",
        "percentOfDailyNeeds": 7.09
      },
      {
        "name": "Manganese",
        "amount": 0.11,
        "unit": "mg",
        "percentOfDailyNeeds": 5.61
      },
      {
        "name": "Fiber",
        "amount": 1.31,
        "unit": "g",
        "percentOfDailyNeeds": 5.22
      },
      {
        "name": "Vitamin B3",
        "amount": 1.02,
        "unit": "mg",
        "percentOfDailyNeeds": 5.09
      }
    ],
    "properties": [
      {
        "name": "Glycemic Index",
        "amount": 25.0,
        "unit": ""
      },
      {
        "name": "Glycemic Load",
        "amount": 0.2,
        "unit": ""
      },
      {
        "name": "Inflammation Score",
        "amount": -5.0,
        "unit": ""
      },
      {
        "name": "Nutrition Score",
        "amount": 14.333913139674975,
        "unit": "%"
      }
    ],
    "flavonoids": [
      {
        "name": "Cyanidin",
        "amount": 0.05,
        "unit": "mg"
      },
      {
        "name": "Petunidin",
        "amount": 0.0,
        "unit": "mg"
      },
      {
        "name": "Delphinidin",
        "amount": 0.0,
        "unit": "mg"
      },
      {
        "name": "Malvidin",
        "amount": 0.0,
        "unit": "mg"
      },
      {
        "name": "Pelargonidin",
        "amount": 0.0,
        "unit": "mg"
      },
      {
        "name": "Peonidin",
        "amount": 0.0,
        "unit": "mg"
      },
      {
        "name": "Catechin",
        "amount": 0.0,
        "unit": "mg"
      },
      {
        "name": "Epigallocatechin",
        "amount": 0.0,
        "unit": "mg"
      },
      {
        "name": "Epicatechin",
        "amount": 0.0,
        "unit": "mg"
      },
      {
        "name": "Epicatechin 3-gallate",
        "amount": 0.0,
        "unit": "mg"
      },
      {
        "name": "Epigallocatechin 3-gallate",
        "amount": 0.0,
        "unit": "mg"
      },
      {
        "name": "Theaflavin",
        "amount": 0.0,
        "unit": ""
      },
      {
        "name": "Thearubigins",
        "amount": 0.0,
        "unit": ""
      },
      {
        "name": "Eriodictyol",
        "amount": 0.0,
        "unit": ""
      },
      {
        "name": "Hesperetin",
        "amount": 0.0,
        "unit": "mg"
      },
      {
        "name": "Naringenin",
        "amount": 0.0,
        "unit": "mg"
      },
      {
        "name": "Apigenin",
        "amount": 0.0,
        "unit": "mg"
      },
      {
        "name": "Luteolin",
        "amount": 0.01,
        "unit": "mg"
      },
      {
        "name": "Isorhamnetin",
        "amount": 0.0,
        "unit": ""
      },
      {
        "name": "Kaempferol",
        "amount": 0.0,
        "unit": "mg"
      },
      {
        "name": "Myricetin",
        "amount": 0.0,
        "unit": "mg"
      },
      {
        "name": "Quercetin",
        "amount": 0.13,
        "unit": "mg"
      },
      {
        "name": "Theaflavin-3,3'-digallate",
        "amount": 0.0,
        "unit": ""
      },
      {
        "name": "Theaflavin-3'-gallate",
        "amount": 0.0,
        "unit": ""
      },
      {
        "name": "Theaflavin-3-gallate",
        "amount": 0.0,
        "unit": ""
      },
      {
        "name": "Gallocatechin",
        "amount": 0.0,
        "unit": "mg"
      }
    ],
    "ingredients": [
      {
        "id": 10111001,
        "name": "alfalfa sprouts",
        "amount": 1.0,
        "unit": "servings",
        "nutrients": [
          {
            "name": "Folic Acid",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin A",
            "amount": 1.55,
            "unit": "IU",
            "percentOfDailyNeeds": 16.05
          },
          {
            "name": "Zinc",
            "amount": 0.01,
            "unit": "mg",
            "percentOfDailyNeeds": 10.83
          },
          {
            "name": "Vitamin C",
            "amount": 0.08,
            "unit": "mg",
            "percentOfDailyNeeds": 9.67
          },
          {
            "name": "Potassium",
            "amount": 0.79,
            "unit": "mg",
            "percentOfDailyNeeds": 11.93
          },
          {
            "name": "Fat",
            "amount": 0.01,
            "unit": "g",
            "percentOfDailyNeeds": 15.97
          },
          {
            "name": "Copper",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 10.96
          },
          {
            "name": "Vitamin E",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 7.96
          },
          {
            "name": "Cholesterol",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 124.0
          },
          {
            "name": "Vitamin B1",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 7.09
          },
          {
            "name": "Choline",
            "amount": 0.14,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin B3",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 5.09
          },
          {
            "name": "Calcium",
            "amount": 0.32,
            "unit": "mg",
            "percentOfDailyNeeds": 9.34
          },
          {
            "name": "Selenium",
            "amount": 0.01,
            "unit": "µg",
            "percentOfDailyNeeds": 45.24
          },
          {
            "name": "Manganese",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 5.61
          },
          {
            "name": "Fiber",
            "amount": 0.02,
            "unit": "g",
            "percentOfDailyNeeds": 5.22
          },
          {
            "name": "Vitamin B5",
            "amount": 0.01,
            "unit": "mg",
            "percentOfDailyNeeds": 17.21
          },
          {
            "name": "Protein",
            "amount": 0.04,
            "unit": "g",
            "percentOfDailyNeeds": 28.89
          },
          {
            "name": "Alcohol",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 100.0
          },
          {
            "name": "Vitamin B2",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 33.22
          },
          {
            "name": "Vitamin B12",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 14.83
          },
          {
            "name": "Magnesium",
            "amount": 0.27,
            "unit": "mg",
            "percentOfDailyNeeds": 8.27
          },
          {
            "name": "Phosphorus",
            "amount": 0.7,
            "unit": "mg",
            "percentOfDailyNeeds": 24.57
          },
          {
            "name": "Folate",
            "amount": 0.36,
            "unit": "µg",
            "percentOfDailyNeeds": 19.43
          },
          {
            "name": "Carbohydrates",
            "amount": 0.02,
            "unit": "g",
            "percentOfDailyNeeds": 4.36
          },
          {
            "name": "Net Carbohydrates",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 4.28
          },
          {
            "name": "Sodium",
            "amount": 0.06,
            "unit": "mg",
            "percentOfDailyNeeds": 12.78
          },
          {
            "name": "Vitamin D",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 13.33
          },
          {
            "name": "Saturated Fat",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 20.28
          },
          {
            "name": "Poly Unsaturated Fat",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Mono Unsaturated Fat",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin K",
            "amount": 0.31,
            "unit": "µg",
            "percentOfDailyNeeds": 20.05
          },
          {
            "name": "Sugar",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 5.3
          },
          {
            "name": "Lycopene",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Caffeine",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin B6",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 16.68
          },
          {
            "name": "Calories",
            "amount": 0.23,
            "unit": "kcal",
            "percentOfDailyNeeds": 9.89
          },
          {
            "name": "Iron",
            "amount": 0.01,
            "unit": "mg",
            "percentOfDailyNeeds": 17.1
          }
        ]
      },
      {
        "id": 11206,
        "name": "cucumber",
        "amount": 0.25,
        "unit": "",
        "nutrients": [
          {
            "name": "Folic Acid",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin A",
            "amount": 54.0,
            "unit": "IU",
            "percentOfDailyNeeds": 16.05
          },
          {
            "name": "Zinc",
            "amount": 0.13,
            "unit": "mg",
            "percentOfDailyNeeds": 10.83
          },
          {
            "name": "Vitamin C",
            "amount": 2.4,
            "unit": "mg",
            "percentOfDailyNeeds": 9.67
          },
          {
            "name": "Potassium",
            "amount": 102.0,
            "unit": "mg",
            "percentOfDailyNeeds": 11.93
          },
          {
            "name": "Fat",
            "amount": 0.12,
            "unit": "g",
            "percentOfDailyNeeds": 15.97
          },
          {
            "name": "Copper",
            "amount": 0.05,
            "unit": "mg",
            "percentOfDailyNeeds": 10.96
          },
          {
            "name": "Vitamin E",
            "amount": 0.02,
            "unit": "mg",
            "percentOfDailyNeeds": 7.96
          },
          {
            "name": "Cholesterol",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 124.0
          },
          {
            "name": "Vitamin B1",
            "amount": 0.02,
            "unit": "mg",
            "percentOfDailyNeeds": 7.09
          },
          {
            "name": "Choline",
            "amount": 4.28,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin B3",
            "amount": 0.03,
            "unit": "mg",
            "percentOfDailyNeeds": 5.09
          },
          {
            "name": "Calcium",
            "amount": 10.5,
            "unit": "mg",
            "percentOfDailyNeeds": 9.34
          },
          {
            "name": "Selenium",
            "amount": 0.08,
            "unit": "µg",
            "percentOfDailyNeeds": 45.24
          },
          {
            "name": "Manganese",
            "amount": 0.05,
            "unit": "mg",
            "percentOfDailyNeeds": 5.61
          },
          {
            "name": "Fiber",
            "amount": 0.52,
            "unit": "g",
            "percentOfDailyNeeds": 5.22
          },
          {
            "name": "Vitamin B5",
            "amount": 0.18,
            "unit": "mg",
            "percentOfDailyNeeds": 17.21
          },
          {
            "name": "Protein",
            "amount": 0.44,
            "unit": "g",
            "percentOfDailyNeeds": 28.89
          },
          {
            "name": "Alcohol",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 100.0
          },
          {
            "name": "Vitamin B2",
            "amount": 0.02,
            "unit": "mg",
            "percentOfDailyNeeds": 33.22
          },
          {
            "name": "Vitamin B12",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 14.83
          },
          {
            "name": "Magnesium",
            "amount": 9.0,
            "unit": "mg",
            "percentOfDailyNeeds": 8.27
          },
          {
            "name": "Phosphorus",
            "amount": 15.75,
            "unit": "mg",
            "percentOfDailyNeeds": 24.57
          },
          {
            "name": "Folate",
            "amount": 10.5,
            "unit": "µg",
            "percentOfDailyNeeds": 19.43
          },
          {
            "name": "Carbohydrates",
            "amount": 1.62,
            "unit": "g",
            "percentOfDailyNeeds": 4.36
          },
          {
            "name": "Net Carbohydrates",
            "amount": 1.1,
            "unit": "g",
            "percentOfDailyNeeds": 4.28
          },
          {
            "name": "Sodium",
            "amount": 1.5,
            "unit": "mg",
            "percentOfDailyNeeds": 12.78
          },
          {
            "name": "Fluoride",
            "amount": 0.98,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin D",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 13.33
          },
          {
            "name": "Saturated Fat",
            "amount": 0.01,
            "unit": "g",
            "percentOfDailyNeeds": 20.28
          },
          {
            "name": "Poly Unsaturated Fat",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Mono Unsaturated Fat",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin K",
            "amount": 5.4,
            "unit": "µg",
            "percentOfDailyNeeds": 20.05
          },
          {
            "name": "Sugar",
            "amount": 1.03,
            "unit": "g",
            "percentOfDailyNeeds": 5.3
          },
          {
            "name": "Lycopene",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Caffeine",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin B6",
            "amount": 0.04,
            "unit": "mg",
            "percentOfDailyNeeds": 16.68
          },
          {
            "name": "Calories",
            "amount": 9.0,
            "unit": "kcal",
            "percentOfDailyNeeds": 9.89
          },
          {
            "name": "Iron",
            "amount": 0.17,
            "unit": "mg",
            "percentOfDailyNeeds": 17.1
          }
        ]
      },
      {
        "id": 1123,
        "name": "eggs",
        "amount": 2.0,
        "unit": "large",
        "nutrients": [
          {
            "name": "Folic Acid",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin A",
            "amount": 540.0,
            "unit": "IU",
            "percentOfDailyNeeds": 16.05
          },
          {
            "name": "Zinc",
            "amount": 1.29,
            "unit": "mg",
            "percentOfDailyNeeds": 10.83
          },
          {
            "name": "Vitamin C",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 9.67
          },
          {
            "name": "Potassium",
            "amount": 138.0,
            "unit": "mg",
            "percentOfDailyNeeds": 11.93
          },
          {
            "name": "Fat",
            "amount": 9.51,
            "unit": "g",
            "percentOfDailyNeeds": 15.97
          },
          {
            "name": "Copper",
            "amount": 0.07,
            "unit": "mg",
            "percentOfDailyNeeds": 10.96
          },
          {
            "name": "Vitamin E",
            "amount": 1.05,
            "unit": "mg",
            "percentOfDailyNeeds": 7.96
          },
          {
            "name": "Cholesterol",
            "amount": 372.0,
            "unit": "mg",
            "percentOfDailyNeeds": 124.0
          },
          {
            "name": "Vitamin B1",
            "amount": 0.04,
            "unit": "mg",
            "percentOfDailyNeeds": 7.09
          },
          {
            "name": "Choline",
            "amount": 294.0,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin B3",
            "amount": 0.08,
            "unit": "mg",
            "percentOfDailyNeeds": 5.09
          },
          {
            "name": "Calcium",
            "amount": 56.0,
            "unit": "mg",
            "percentOfDailyNeeds": 9.34
          },
          {
            "name": "Selenium",
            "amount": 30.7,
            "unit": "µg",
            "percentOfDailyNeeds": 45.24
          },
          {
            "name": "Manganese",
            "amount": 0.03,
            "unit": "mg",
            "percentOfDailyNeeds": 5.61
          },
          {
            "name": "Fiber",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 5.22
          },
          {
            "name": "Vitamin B5",
            "amount": 1.53,
            "unit": "mg",
            "percentOfDailyNeeds": 17.21
          },
          {
            "name": "Protein",
            "amount": 12.6,
            "unit": "g",
            "percentOfDailyNeeds": 28.89
          },
          {
            "name": "Alcohol",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 100.0
          },
          {
            "name": "Vitamin B2",
            "amount": 0.46,
            "unit": "mg",
            "percentOfDailyNeeds": 33.22
          },
          {
            "name": "Vitamin B12",
            "amount": 0.89,
            "unit": "µg",
            "percentOfDailyNeeds": 14.83
          },
          {
            "name": "Magnesium",
            "amount": 12.0,
            "unit": "mg",
            "percentOfDailyNeeds": 8.27
          },
          {
            "name": "Phosphorus",
            "amount": 198.0,
            "unit": "mg",
            "percentOfDailyNeeds": 24.57
          },
          {
            "name": "Folate",
            "amount": 47.0,
            "unit": "µg",
            "percentOfDailyNeeds": 19.43
          },
          {
            "name": "Carbohydrates",
            "amount": 0.72,
            "unit": "g",
            "percentOfDailyNeeds": 4.36
          },
          {
            "name": "Net Carbohydrates",
            "amount": 0.72,
            "unit": "g",
            "percentOfDailyNeeds": 4.28
          },
          {
            "name": "Sodium",
            "amount": 142.0,
            "unit": "mg",
            "percentOfDailyNeeds": 12.78
          },
          {
            "name": "Trans Fat",
            "amount": 0.04,
            "unit": "g",
            "percentOfDailyNeeds": 380.0
          },
          {
            "name": "Fluoride",
            "amount": 1.1,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin D",
            "amount": 2.0,
            "unit": "µg",
            "percentOfDailyNeeds": 13.33
          },
          {
            "name": "Saturated Fat",
            "amount": 3.13,
            "unit": "g",
            "percentOfDailyNeeds": 20.28
          },
          {
            "name": "Poly Unsaturated Fat",
            "amount": 1.91,
            "unit": "g",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Mono Unsaturated Fat",
            "amount": 3.66,
            "unit": "g",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin K",
            "amount": 0.3,
            "unit": "µg",
            "percentOfDailyNeeds": 20.05
          },
          {
            "name": "Sugar",
            "amount": 0.37,
            "unit": "g",
            "percentOfDailyNeeds": 5.3
          },
          {
            "name": "Lycopene",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Caffeine",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin B6",
            "amount": 0.17,
            "unit": "mg",
            "percentOfDailyNeeds": 16.68
          },
          {
            "name": "Calories",
            "amount": 143.0,
            "unit": "kcal",
            "percentOfDailyNeeds": 9.89
          },
          {
            "name": "Iron",
            "amount": 1.75,
            "unit": "mg",
            "percentOfDailyNeeds": 17.1
          }
        ]
      },
      {
        "id": 1016973,
        "name": "gochujang",
        "amount": 2.0,
        "unit": "tbsp",
        "nutrients": [
          {
            "name": "Folic Acid",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin A",
            "amount": 67.66,
            "unit": "IU",
            "percentOfDailyNeeds": 16.05
          },
          {
            "name": "Zinc",
            "amount": 0.05,
            "unit": "mg",
            "percentOfDailyNeeds": 10.83
          },
          {
            "name": "Vitamin C",
            "amount": 5.44,
            "unit": "mg",
            "percentOfDailyNeeds": 9.67
          },
          {
            "name": "Potassium",
            "amount": 125.8,
            "unit": "mg",
            "percentOfDailyNeeds": 11.93
          },
          {
            "name": "Fat",
            "amount": 0.1,
            "unit": "g",
            "percentOfDailyNeeds": 15.97
          },
          {
            "name": "Copper",
            "amount": 0.04,
            "unit": "mg",
            "percentOfDailyNeeds": 10.96
          },
          {
            "name": "Vitamin E",
            "amount": 0.09,
            "unit": "mg",
            "percentOfDailyNeeds": 7.96
          },
          {
            "name": "Cholesterol",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 124.0
          },
          {
            "name": "Vitamin B1",
            "amount": 0.03,
            "unit": "mg",
            "percentOfDailyNeeds": 7.09
          },
          {
            "name": "Choline",
            "amount": 4.66,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Calcium",
            "amount": 6.8,
            "unit": "mg",
            "percentOfDailyNeeds": 9.34
          },
          {
            "name": "Selenium",
            "amount": 0.37,
            "unit": "µg",
            "percentOfDailyNeeds": 45.24
          },
          {
            "name": "Vitamin B3",
            "amount": 0.54,
            "unit": "mg",
            "percentOfDailyNeeds": 5.09
          },
          {
            "name": "Fiber",
            "amount": 0.17,
            "unit": "g",
            "percentOfDailyNeeds": 5.22
          },
          {
            "name": "Protein",
            "amount": 0.85,
            "unit": "g",
            "percentOfDailyNeeds": 28.89
          },
          {
            "name": "Alcohol",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 100.0
          },
          {
            "name": "Vitamin B2",
            "amount": 0.02,
            "unit": "mg",
            "percentOfDailyNeeds": 33.22
          },
          {
            "name": "Vitamin B12",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 14.83
          },
          {
            "name": "Magnesium",
            "amount": 4.08,
            "unit": "mg",
            "percentOfDailyNeeds": 8.27
          },
          {
            "name": "Phosphorus",
            "amount": 17.68,
            "unit": "mg",
            "percentOfDailyNeeds": 24.57
          },
          {
            "name": "Folate",
            "amount": 3.4,
            "unit": "µg",
            "percentOfDailyNeeds": 19.43
          },
          {
            "name": "Carbohydrates",
            "amount": 9.77,
            "unit": "g",
            "percentOfDailyNeeds": 4.36
          },
          {
            "name": "Net Carbohydrates",
            "amount": 9.6,
            "unit": "g",
            "percentOfDailyNeeds": 4.28
          },
          {
            "name": "Sodium",
            "amount": 6.8,
            "unit": "mg",
            "percentOfDailyNeeds": 12.78
          },
          {
            "name": "Vitamin D",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 13.33
          },
          {
            "name": "Saturated Fat",
            "amount": 0.01,
            "unit": "g",
            "percentOfDailyNeeds": 20.28
          },
          {
            "name": "Poly Unsaturated Fat",
            "amount": 0.05,
            "unit": "g",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Mono Unsaturated Fat",
            "amount": 0.01,
            "unit": "g",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin K",
            "amount": 0.41,
            "unit": "µg",
            "percentOfDailyNeeds": 20.05
          },
          {
            "name": "Sugar",
            "amount": 3.05,
            "unit": "g",
            "percentOfDailyNeeds": 5.3
          },
          {
            "name": "Lycopene",
            "amount": 375.02,
            "unit": "µg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Caffeine",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin B6",
            "amount": 0.05,
            "unit": "mg",
            "percentOfDailyNeeds": 16.68
          },
          {
            "name": "Calories",
            "amount": 35.36,
            "unit": "kcal",
            "percentOfDailyNeeds": 9.89
          },
          {
            "name": "Iron",
            "amount": 0.27,
            "unit": "mg",
            "percentOfDailyNeeds": 17.1
          }
        ]
      },
      {
        "id": 98860,
        "name": "kimchi",
        "amount": 0.25,
        "unit": "cup",
        "nutrients": [
          {
            "name": "Vitamin A",
            "amount": 26.74,
            "unit": "IU",
            "percentOfDailyNeeds": 16.05
          },
          {
            "name": "Zinc",
            "amount": 0.06,
            "unit": "mg",
            "percentOfDailyNeeds": 10.83
          },
          {
            "name": "Vitamin C",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 9.67
          },
          {
            "name": "Potassium",
            "amount": 43.41,
            "unit": "mg",
            "percentOfDailyNeeds": 11.93
          },
          {
            "name": "Fat",
            "amount": 0.14,
            "unit": "g",
            "percentOfDailyNeeds": 15.97
          },
          {
            "name": "Copper",
            "amount": 0.01,
            "unit": "mg",
            "percentOfDailyNeeds": 10.96
          },
          {
            "name": "Vitamin E",
            "amount": 0.03,
            "unit": "mg",
            "percentOfDailyNeeds": 7.96
          },
          {
            "name": "Vitamin B1",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 7.09
          },
          {
            "name": "Cholesterol",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 124.0
          },
          {
            "name": "Vitamin B3",
            "amount": 0.32,
            "unit": "mg",
            "percentOfDailyNeeds": 5.09
          },
          {
            "name": "Calcium",
            "amount": 9.49,
            "unit": "mg",
            "percentOfDailyNeeds": 9.34
          },
          {
            "name": "Selenium",
            "amount": 0.14,
            "unit": "µg",
            "percentOfDailyNeeds": 45.24
          },
          {
            "name": "Manganese",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 5.61
          },
          {
            "name": "Fiber",
            "amount": 0.46,
            "unit": "g",
            "percentOfDailyNeeds": 5.22
          },
          {
            "name": "Vitamin B5",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 17.21
          },
          {
            "name": "Protein",
            "amount": 0.32,
            "unit": "g",
            "percentOfDailyNeeds": 28.89
          },
          {
            "name": "Alcohol",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 100.0
          },
          {
            "name": "Vitamin B2",
            "amount": 0.06,
            "unit": "mg",
            "percentOfDailyNeeds": 33.22
          },
          {
            "name": "Vitamin B12",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 14.83
          },
          {
            "name": "Magnesium",
            "amount": 4.03,
            "unit": "mg",
            "percentOfDailyNeeds": 8.27
          },
          {
            "name": "Phosphorus",
            "amount": 6.9,
            "unit": "mg",
            "percentOfDailyNeeds": 24.57
          },
          {
            "name": "Folate",
            "amount": 14.95,
            "unit": "µg",
            "percentOfDailyNeeds": 19.43
          },
          {
            "name": "Carbohydrates",
            "amount": 0.69,
            "unit": "g",
            "percentOfDailyNeeds": 4.36
          },
          {
            "name": "Net Carbohydrates",
            "amount": 0.23,
            "unit": "g",
            "percentOfDailyNeeds": 4.28
          },
          {
            "name": "Sodium",
            "amount": 143.18,
            "unit": "mg",
            "percentOfDailyNeeds": 12.78
          },
          {
            "name": "Trans Fat",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 380.0
          },
          {
            "name": "Fluoride",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin D",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 13.33
          },
          {
            "name": "Saturated Fat",
            "amount": 0.02,
            "unit": "g",
            "percentOfDailyNeeds": 20.28
          },
          {
            "name": "Poly Unsaturated Fat",
            "amount": 0.07,
            "unit": "g",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin K",
            "amount": 12.53,
            "unit": "µg",
            "percentOfDailyNeeds": 20.05
          },
          {
            "name": "Sugar",
            "amount": 0.3,
            "unit": "g",
            "percentOfDailyNeeds": 5.3
          },
          {
            "name": "Mono Unsaturated Fat",
            "amount": 0.01,
            "unit": "g",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Caffeine",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin B6",
            "amount": 0.06,
            "unit": "mg",
            "percentOfDailyNeeds": 16.68
          },
          {
            "name": "Calories",
            "amount": 4.31,
            "unit": "kcal",
            "percentOfDailyNeeds": 9.89
          },
          {
            "name": "Iron",
            "amount": 0.72,
            "unit": "mg",
            "percentOfDailyNeeds": 17.1
          }
        ]
      },
      {
        "id": 11257,
        "name": "leaf lettuce",
        "amount": 1.5,
        "unit": "pieces",
        "nutrients": [
          {
            "name": "Folic Acid",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin A",
            "amount": 112.38,
            "unit": "IU",
            "percentOfDailyNeeds": 16.05
          },
          {
            "name": "Zinc",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 10.83
          },
          {
            "name": "Vitamin C",
            "amount": 0.06,
            "unit": "mg",
            "percentOfDailyNeeds": 9.67
          },
          {
            "name": "Potassium",
            "amount": 2.81,
            "unit": "mg",
            "percentOfDailyNeeds": 11.93
          },
          {
            "name": "Fat",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 15.97
          },
          {
            "name": "Copper",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 10.96
          },
          {
            "name": "Vitamin E",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 7.96
          },
          {
            "name": "Cholesterol",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 124.0
          },
          {
            "name": "Vitamin B1",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 7.09
          },
          {
            "name": "Choline",
            "amount": 0.18,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin B3",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 5.09
          },
          {
            "name": "Calcium",
            "amount": 0.5,
            "unit": "mg",
            "percentOfDailyNeeds": 9.34
          },
          {
            "name": "Selenium",
            "amount": 0.02,
            "unit": "µg",
            "percentOfDailyNeeds": 45.24
          },
          {
            "name": "Manganese",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 5.61
          },
          {
            "name": "Fiber",
            "amount": 0.01,
            "unit": "g",
            "percentOfDailyNeeds": 5.22
          },
          {
            "name": "Vitamin B5",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 17.21
          },
          {
            "name": "Protein",
            "amount": 0.02,
            "unit": "g",
            "percentOfDailyNeeds": 28.89
          },
          {
            "name": "Alcohol",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 100.0
          },
          {
            "name": "Vitamin B2",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 33.22
          },
          {
            "name": "Vitamin B12",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 14.83
          },
          {
            "name": "Magnesium",
            "amount": 0.18,
            "unit": "mg",
            "percentOfDailyNeeds": 8.27
          },
          {
            "name": "Phosphorus",
            "amount": 0.42,
            "unit": "mg",
            "percentOfDailyNeeds": 24.57
          },
          {
            "name": "Folate",
            "amount": 0.54,
            "unit": "µg",
            "percentOfDailyNeeds": 19.43
          },
          {
            "name": "Carbohydrates",
            "amount": 0.03,
            "unit": "g",
            "percentOfDailyNeeds": 4.36
          },
          {
            "name": "Net Carbohydrates",
            "amount": 0.02,
            "unit": "g",
            "percentOfDailyNeeds": 4.28
          },
          {
            "name": "Sodium",
            "amount": 0.38,
            "unit": "mg",
            "percentOfDailyNeeds": 12.78
          },
          {
            "name": "Vitamin D",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 13.33
          },
          {
            "name": "Saturated Fat",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 20.28
          },
          {
            "name": "Poly Unsaturated Fat",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Mono Unsaturated Fat",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin K",
            "amount": 2.1,
            "unit": "µg",
            "percentOfDailyNeeds": 20.05
          },
          {
            "name": "Sugar",
            "amount": 0.01,
            "unit": "g",
            "percentOfDailyNeeds": 5.3
          },
          {
            "name": "Lycopene",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Caffeine",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin B6",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 16.68
          },
          {
            "name": "Calories",
            "amount": 0.19,
            "unit": "kcal",
            "percentOfDailyNeeds": 9.89
          },
          {
            "name": "Iron",
            "amount": 0.02,
            "unit": "mg",
            "percentOfDailyNeeds": 17.1
          }
        ]
      },
      {
        "id": 12023,
        "name": "sesame seeds",
        "amount": 0.5,
        "unit": "tsp",
        "nutrients": [
          {
            "name": "Folic Acid",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin A",
            "amount": 0.09,
            "unit": "IU",
            "percentOfDailyNeeds": 16.05
          },
          {
            "name": "Zinc",
            "amount": 0.08,
            "unit": "mg",
            "percentOfDailyNeeds": 10.83
          },
          {
            "name": "Vitamin C",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 9.67
          },
          {
            "name": "Potassium",
            "amount": 4.68,
            "unit": "mg",
            "percentOfDailyNeeds": 11.93
          },
          {
            "name": "Fat",
            "amount": 0.5,
            "unit": "g",
            "percentOfDailyNeeds": 15.97
          },
          {
            "name": "Copper",
            "amount": 0.04,
            "unit": "mg",
            "percentOfDailyNeeds": 10.96
          },
          {
            "name": "Vitamin E",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 7.96
          },
          {
            "name": "Cholesterol",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 124.0
          },
          {
            "name": "Vitamin B1",
            "amount": 0.01,
            "unit": "mg",
            "percentOfDailyNeeds": 7.09
          },
          {
            "name": "Choline",
            "amount": 0.26,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin B3",
            "amount": 0.05,
            "unit": "mg",
            "percentOfDailyNeeds": 5.09
          },
          {
            "name": "Calcium",
            "amount": 9.75,
            "unit": "mg",
            "percentOfDailyNeeds": 9.34
          },
          {
            "name": "Selenium",
            "amount": 0.34,
            "unit": "µg",
            "percentOfDailyNeeds": 45.24
          },
          {
            "name": "Manganese",
            "amount": 0.02,
            "unit": "mg",
            "percentOfDailyNeeds": 5.61
          },
          {
            "name": "Fiber",
            "amount": 0.12,
            "unit": "g",
            "percentOfDailyNeeds": 5.22
          },
          {
            "name": "Vitamin B5",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 17.21
          },
          {
            "name": "Protein",
            "amount": 0.18,
            "unit": "g",
            "percentOfDailyNeeds": 28.89
          },
          {
            "name": "Alcohol",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 100.0
          },
          {
            "name": "Vitamin B2",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 33.22
          },
          {
            "name": "Vitamin B12",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 14.83
          },
          {
            "name": "Magnesium",
            "amount": 3.51,
            "unit": "mg",
            "percentOfDailyNeeds": 8.27
          },
          {
            "name": "Phosphorus",
            "amount": 6.29,
            "unit": "mg",
            "percentOfDailyNeeds": 24.57
          },
          {
            "name": "Folate",
            "amount": 0.97,
            "unit": "µg",
            "percentOfDailyNeeds": 19.43
          },
          {
            "name": "Carbohydrates",
            "amount": 0.23,
            "unit": "g",
            "percentOfDailyNeeds": 4.36
          },
          {
            "name": "Net Carbohydrates",
            "amount": 0.12,
            "unit": "g",
            "percentOfDailyNeeds": 4.28
          },
          {
            "name": "Sodium",
            "amount": 0.11,
            "unit": "mg",
            "percentOfDailyNeeds": 12.78
          },
          {
            "name": "Vitamin D",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 13.33
          },
          {
            "name": "Saturated Fat",
            "amount": 0.07,
            "unit": "g",
            "percentOfDailyNeeds": 20.28
          },
          {
            "name": "Poly Unsaturated Fat",
            "amount": 0.22,
            "unit": "g",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Mono Unsaturated Fat",
            "amount": 0.19,
            "unit": "g",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin K",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 20.05
          },
          {
            "name": "Sugar",
            "amount": 0.0,
            "unit": "g",
            "percentOfDailyNeeds": 5.3
          },
          {
            "name": "Lycopene",
            "amount": 0.0,
            "unit": "µg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Caffeine",
            "amount": 0.0,
            "unit": "mg",
            "percentOfDailyNeeds": 0.0
          },
          {
            "name": "Vitamin B6",
            "amount": 0.01,
            "unit": "mg",
            "percentOfDailyNeeds": 16.68
          },
          {
            "name": "Calories",
            "amount": 5.73,
            "unit": "kcal",
            "percentOfDailyNeeds": 9.89
          },
          {
            "name": "Iron",
            "amount": 0.15,
            "unit": "mg",
            "percentOfDailyNeeds": 17.1
          }
        ]
      }
    ],
    "caloricBreakdown": {
      "percentProtein": 28.38,
      "percentFat": 45.9,
      "percentCarbs": 25.72
    },
    "weightPerServing": {
      "amount": 241,
      "unit": "g"
    }
  },
  "summary": "If you want to add more <b>Korean</b> recipes to your recipe box, Korean Bibim Naengmyun (Instant Spicy Cold Noodles) might be a recipe you should try. One portion of this dish contains roughly <b>14g of protein</b>, <b>10g of fat</b>, and a total of <b>198 calories</b>. This gluten free, dairy free, and fodmap friendly recipe serves 2 and costs <b>$1.99 per serving</b>. 1 person were glad they tried this recipe. This recipe from Foodista requires alfalfa sprouts, kimchi, eggs, and leaf lettuce. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Only a few people really liked this side dish. Taking all factors into account, this recipe <b>earns a spoonacular score of 40%</b>, which is not so spectacular. Try <a href=\"https://spoonacular.com/recipes/instant-spicy-korean-cold-noodles-bibim-naengmyeon-567333\">Instant Spicy Korean Cold Noodles (Bibim Naengmyeon)</a>, <a href=\"https://spoonacular.com/recipes/korean-chilled-buckwheat-noodles-with-chile-sauce-bibim-naengmyun-236866\">Korean Chilled Buckwheat Noodles with Chile Sauce (Bibim Naengmyun)</a>, and <a href=\"https://spoonacular.com/recipes/vegetarian-naengmyun-korean-cold-noodles-41475\">Vegetarian Naengmyun (korean Cold Noodles)</a> for similar recipes.",
  "cuisines": [
    "Korean",
    "Asian"
  ],
  "dishTypes": [
    "side dish"
  ],
  "diets": [
    "gluten free",
    "dairy free",
    "fodmap friendly"
  ],
  "occasions": [

  ],
  "instructions": "<ol><li>1. Prepare the vegetables by thinly slicing them into 2-inch strips. This allows them to be eaten comfortably with the noodles. Shred the lettuce into desired pieces and lay them as a bed for the noodles.</li><li>2. Boil the noodles in pot for about 7 minutes or shortly after the noodles separate on their own. It's best to have slightly undercooked noodles as opposed to overcooked noodles, as they will continue to soften as you eat them. For extra spiciness, add in 1 tbsp of gochujang (red pepper paste) to the original sauce packets.</li><li>3. After draining the noodles under cold water for several minutes, top on the bed of lettuce and top with pre-cut vegetables and garnish with sesame seeds and alfalfa sprouts. Add the spicy sauce according to taste preference. Enjoy!</li></ol>",
  "analyzedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "Prepare the vegetables by thinly slicing them into 2-inch strips. This allows them to be eaten comfortably with the noodles. Shred the lettuce into desired pieces and lay them as a bed for the noodles.",
          "ingredients": [
            {
              "id": 11583,
              "name": "vegetable",
              "localizedName": "vegetable",
              "image": "mixed-vegetables.png"
            },
            {
              "id": 11252,
              "name": "lettuce",
              "localizedName": "lettuce",
              "image": "iceberg-lettuce.jpg"
            },
            {
              "id": 20420,
              "name": "pasta",
              "localizedName": "pasta",
              "image": "fusilli.jpg"
            }
          ],
          "equipment": [

          ]
        },
        {
          "number": 2,
          "step": "Boil the noodles in pot for about 7 minutes or shortly after the noodles separate on their own. It's best to have slightly undercooked noodles as opposed to overcooked noodles, as they will continue to soften as you eat them. For extra spiciness, add in 1 tbsp of gochujang (red pepper paste) to the original sauce packets.",
          "ingredients": [
            {
              "id": 1016973,
              "name": "gochujang",
              "localizedName": "gochujang",
              "image": "chili-paste.png"
            },
            {
              "id": 20420,
              "name": "pasta",
              "localizedName": "pasta",
              "image": "fusilli.jpg"
            },
            {
              "id": 0,
              "name": "sauce",
              "localizedName": "sauce",
              "image": ""
            }
          ],
          "equipment": [
            {
              "id": 404752,
              "name": "pot",
              "localizedName": "pot",
              "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
            }
          ],
          "length": {
            "number": 7,
            "unit": "minutes"
          }
        },
        {
          "number": 3,
          "step": "After draining the noodles under cold water for several minutes, top on the bed of lettuce and top with pre-cut vegetables and garnish with sesame seeds and alfalfa sprouts.",
          "ingredients": [
            {
              "id": 10111001,
              "name": "alfalfa sprouts",
              "localizedName": "alfalfa sprouts",
              "image": "alfalfa-sprouts.png"
            },
            {
              "id": 12023,
              "name": "sesame seeds",
              "localizedName": "sesame seeds",
              "image": "sesame-seeds.png"
            },
            {
              "id": 11583,
              "name": "vegetable",
              "localizedName": "vegetable",
              "image": "mixed-vegetables.png"
            },
            {
              "id": 11252,
              "name": "lettuce",
              "localizedName": "lettuce",
              "image": "iceberg-lettuce.jpg"
            },
            {
              "id": 20420,
              "name": "pasta",
              "localizedName": "pasta",
              "image": "fusilli.jpg"
            },
            {
              "id": 14412,
              "name": "water",
              "localizedName": "water",
              "image": "water.png"
            }
          ],
          "equipment": [

          ]
        },
        {
          "number": 4,
          "step": "Add the spicy sauce according to taste preference. Enjoy!",
          "ingredients": [
            {
              "id": 0,
              "name": "sauce",
              "localizedName": "sauce",
              "image": ""
            }
          ],
          "equipment": [

          ]
        }
      ]
    }
  ],
  "originalId": null,
  "spoonacularScore": 16.751571655273438,
  "spoonacularSourceUrl": "https://spoonacular.com/korean-bibim-naengmyun-instant-spicy-cold-noodles-649029"
}

const SAMPLE_COST = {
  "ingredients": [
    {
      "name": "alfalfa sprouts",
      "image": "alfalfa-sprouts.png",
      "price": 1.86,
      "amount": {
        "metric": {
          "value": 2.0,
          "unit": "servings"
        },
        "us": {
          "value": 2.0,
          "unit": "servings"
        }
      }
    },
    {
      "name": "cucumber",
      "image": "cucumber.jpg",
      "price": 35.88,
      "amount": {
        "metric": {
          "value": 0.5,
          "unit": ""
        },
        "us": {
          "value": 0.5,
          "unit": ""
        }
      }
    },
    {
      "name": "eggs",
      "image": "egg.png",
      "price": 109.09,
      "amount": {
        "metric": {
          "value": 4.0,
          "unit": "large"
        },
        "us": {
          "value": 4.0,
          "unit": "large"
        }
      }
    },
    {
      "name": "red gochujang",
      "image": "chili-paste.png",
      "price": 177.29,
      "amount": {
        "metric": {
          "value": 4.0,
          "unit": "Tbsps"
        },
        "us": {
          "value": 4.0,
          "unit": "Tbsps"
        }
      }
    },
    {
      "name": "kimchi",
      "image": "kimchi.png",
      "price": 65.71,
      "amount": {
        "metric": {
          "value": 57.5,
          "unit": "g"
        },
        "us": {
          "value": 0.5,
          "unit": "cup"
        }
      }
    },
    {
      "name": "red shredded leaf lettuce",
      "image": "lollo-rosso.jpg",
      "price": 1.33,
      "amount": {
        "metric": {
          "value": 3.0,
          "unit": ""
        },
        "us": {
          "value": 3.0,
          "unit": ""
        }
      }
    },
    {
      "name": "sesame seeds",
      "image": "sesame-seeds.png",
      "price": 7.71,
      "amount": {
        "metric": {
          "value": 1.0,
          "unit": "tsp"
        },
        "us": {
          "value": 1.0,
          "unit": "tsp"
        }
      }
    }
  ],
  "totalCost": 398.87,
  "totalCostPerServing": 199.43
}
export default function RecipePage({ params }: { params: { id: string } }){

    useEffect(() => {
        async function getRecipe(){
            // Retrieve recipe based on id, create function in spoonacular file
        }
    }, [])

    const IMAGE_BASE_URL = 'https://img.spoonacular.com/ingredients_100x100/';
    const cards = SAMPLE_RESPONSE.extendedIngredients.map((ingredient) => {
        return (
            <div className='flex flex-col relative justify-center'>
                <Image
                    loader={() => IMAGE_BASE_URL + ingredient.image}
                    unoptimized={true}
                    src={IMAGE_BASE_URL + ingredient.image}
                    width={150}
                    height={150}
                    alt={SAMPLE_RESPONSE.id.toString()}
                    className="p-12 "
                />
                <p>{ingredient.name}</p>
                <p>{ingredient.amount} {ingredient.unit}</p>
            </div>)


    })

    return(
        <div>
            <Nav />
            <div className='pt-24 w-3/5 bg-green-300 h-screen mx-auto'>
                <p>Post: {params.id}</p>
                <div className='relative h-full'>
                    <h1>{SAMPLE_RESPONSE.title}</h1>
                    <Image
                      loader={() => SAMPLE_RESPONSE.image}
                      unoptimized={true}
                      src={SAMPLE_RESPONSE.image}
                      fill={true}
                      objectFit="contain"
                      alt={SAMPLE_RESPONSE.id.toString()}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg"
                      className="p-12 "
                  />
                </div>
                <div className='bg-green-100'>
                    <p>Servings: {SAMPLE_RESPONSE.servings}</p>
                    <p>Ready in: {SAMPLE_RESPONSE.readyInMinutes} minutes</p>
                    <p>Price per serving: ${SAMPLE_RESPONSE.pricePerServing / 100}</p>
                    <Link href={SAMPLE_RESPONSE.sourceUrl}>Created by: {SAMPLE_RESPONSE.sourceName}</Link>
                </div>
                <div className=''>
                    <h2><b>Summary</b></h2>
                    <p dangerouslySetInnerHTML={{__html: SAMPLE_RESPONSE.summary}}></p>
                </div>
                <div>
                    <h2><b>Ingredients</b></h2>
                    <div className='flex flex-wrap'>
                        {cards}
                    </div>
                </div>
                <div>
                    <h2><b>Instructions</b></h2>
                    <p dangerouslySetInnerHTML={{__html: SAMPLE_RESPONSE.instructions}}></p>

                </div>
                <div>
                    <h2><b>Cost breakdown</b></h2>

                </div>
                <div>
                    <h2><b>Nutrional information</b></h2>

                </div>
                <div>
                    <h2><b>Similar Recipes</b></h2>
                </div>
            </div>
        </div>
    );
}
