import React from "react";
import ReactDOM from "react-dom/client";
// import { restaurants } from "./restaurants";

/*
 *  Header
 *  - Logo
 *  - Nav Items
 *  Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Cards
 *      - Img
 *      - Name
 *      - Cuisine
 *      - Star
 *      - Time to deliver
 *      - Price for 2
 *  Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *
 *
 *
 *
 */

const resList = [
  {
    id: "10576",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
    locality: "6th Block",
    areaName: "Koramangala",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.2,
    parentId: "721",
    avgRatingString: "4.2",
    totalRatingsString: "21K+",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 0.7,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "0.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-06 04:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹300 OFF",
      subHeader: "ABOVE ₹1699",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.6",
        ratingCount: "3.2K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "5934",
    name: "Burger King",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
    locality: "Koramangala",
    areaName: "Koramangala",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "American"],
    avgRating: 4.3,
    parentId: "166",
    avgRatingString: "4.3",
    totalRatingsString: "100K+",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-06 06:55:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "bolt/Bolt%20Listing%20badge@3x.png",
          description: "bolt!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Burger.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
              },
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Burger.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.2",
        ratingCount: "4.0K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "656392",
    name: "Subway",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/028cd410-8376-4db2-aae3-0a34de711943_656392.JPG",
    locality: "1st Block",
    areaName: "Koramangala",
    costForTwo: "₹350 for two",
    cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
    avgRating: 4.3,
    parentId: "2",
    avgRatingString: "4.3",
    totalRatingsString: "3.2K+",
    sla: {
      deliveryTime: 17,
      lastMileTravel: 1.4,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "1.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-06 03:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "bolt/Bolt%20Listing%20badge@3x.png",
          description: "bolt!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Sandwiches.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
              },
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Sandwiches.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹119",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "352791",
    name: "Grameen Kulfi",
    cloudinaryImageId: "gjcslopkyvnsc1gjjguq",
    locality: "8th Block",
    areaName: "Koramangala",
    costForTwo: "₹120 for two",
    cuisines: ["Ice Cream", "Desserts"],
    avgRating: 4.9,
    veg: true,
    parentId: "12175",
    avgRatingString: "4.9",
    totalRatingsString: "740",
    sla: {
      deliveryTime: 14,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE",
      slaString: "10-15 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-05 23:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "737688",
    name: "Wow! China",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/2/2739402c-ac2e-4311-8740-da207b7dc486_737688.JPG",
    locality: "KORAMANGALA LAYOUT EXTENSION",
    areaName: "KORAMANGALA",
    costForTwo: "₹300 for two",
    cuisines: [
      "Tibetan",
      "Chinese",
      "Asian",
      "Snacks",
      "Continental",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.1,
    parentId: "226836",
    avgRatingString: "4.1",
    totalRatingsString: "403",
    sla: {
      deliveryTime: 17,
      lastMileTravel: 0.3,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "0.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-06 02:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹129",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "588791",
    name: "Goila Butter Chicken",
    cloudinaryImageId: "5e19832da032dd69547565e27104706f",
    locality: "CLUB ROAD",
    areaName: "Koramangala",
    costForTwo: "₹600 for two",
    cuisines: ["North Indian", "Biryani", "Kebabs", "Desserts"],
    avgRating: 4.2,
    parentId: "322587",
    avgRatingString: "4.2",
    totalRatingsString: "1.7K+",
    sla: {
      deliveryTime: 20,
      lastMileTravel: 0.1,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "0.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-05 23:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "3.2",
        ratingCount: "104",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "750225",
    name: "Daily Kitchen - Homely Meals",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/4ec6a5b6-7c8d-4e10-b8a3-317922e419da_750225.JPG",
    locality: "6TH BLOCK",
    areaName: "Koramangala",
    costForTwo: "₹250 for two",
    cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
    avgRating: 4.4,
    parentId: "444382",
    avgRatingString: "4.4",
    totalRatingsString: "505",
    sla: {
      deliveryTime: 15,
      lastMileTravel: 0.6,
      serviceability: "SERVICEABLE",
      slaString: "10-20 mins",
      lastMileTravelString: "0.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-06 02:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "681439",
    name: "LeanCrust Pizza- ThinCrust Experts",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/02dd8027-a849-4cc5-9411-ea8e8cc767f9_681439.jpg",
    locality: "6TH BLOCK",
    areaName: "Koramangala",
    costForTwo: "₹300 for two",
    cuisines: ["Pizzas", "Italian", "Desserts"],
    avgRating: 4.6,
    parentId: "11216",
    avgRatingString: "4.6",
    totalRatingsString: "387",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 0.6,
      serviceability: "SERVICEABLE",
      slaString: "20-30 mins",
      lastMileTravelString: "0.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-06 02:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹300",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "622030",
    name: "MOJO Pizza - 2X Toppings",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/aa5a8dc4-5b73-4dfc-86d6-edc0f1855f54_622030.jpg",
    locality: "Patel Narayana Reddy Layout",
    areaName: "Koramangala",
    costForTwo: "₹250 for two",
    cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
    avgRating: 4.6,
    parentId: "11329",
    avgRatingString: "4.6",
    totalRatingsString: "1.0K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 0.6,
      serviceability: "SERVICEABLE",
      slaString: "20-30 mins",
      lastMileTravelString: "0.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-06 02:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹179",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "718430",
    name: "The Pizza Bakery - Wood Fired Sourdough",
    cloudinaryImageId: "0335dd45be555d0a4187255e57d2ca88",
    locality: "BTM Layout",
    areaName: "Koramangala",
    costForTwo: "₹700 for two",
    cuisines: [
      "Pizzas",
      "Pastas",
      "Italian",
      "Desserts",
      "Continental",
      "Beverages",
    ],
    avgRating: 4.4,
    parentId: "522292",
    avgRatingString: "4.4",
    totalRatingsString: "1.9K+",
    sla: {
      deliveryTime: 26,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-05 23:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "bolt/Bolt%20Listing%20badge@3x.png",
          description: "bolt!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
              },
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "717421",
    name: "Paris Panini - Gourmet Sandwiches & Wraps",
    cloudinaryImageId: "c27da4b0bab4ca71460bdf082cf58ad4",
    locality: "BTM Layout",
    areaName: "Koramangala",
    costForTwo: "₹500 for two",
    cuisines: [
      "Continental",
      "Pastas",
      "Salads",
      "Desserts",
      "Snacks",
      "Fast Food",
      "French",
    ],
    avgRating: 4.6,
    parentId: "21019",
    avgRatingString: "4.6",
    totalRatingsString: "3.2K+",
    sla: {
      deliveryTime: 26,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-05 23:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Sandwiches.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Sandwiches.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "108097",
    name: "Ambur Star Briyani Since 1890",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/12/bee2f2d5-6a39-477a-b669-c9df142ed5d0_108097.jpg",
    locality: "2nd Stage",
    areaName: "BTM Layout",
    costForTwo: "₹500 for two",
    cuisines: ["Biryani", "Chettinad", "Andhra", "Beverages", "Seafood"],
    avgRating: 4.5,
    parentId: "21400",
    avgRatingString: "4.5",
    totalRatingsString: "21K+",
    sla: {
      deliveryTime: 24,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-05 23:59:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹32",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "23678",
    name: "McDonald's",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/edc568f6-6813-4f2d-a670-911788f1f04f_23678.jpg",
    locality: "5th Block",
    areaName: "Koramangala",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.5,
    parentId: "630",
    avgRatingString: "4.5",
    totalRatingsString: "63K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 1.3,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "1.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-06 02:55:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "bolt/Bolt%20Listing%20badge@3x.png",
          description: "bolt!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Burger.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
              },
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Burger.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹80 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },

  {
    id: "307",
    name: "A2B - Adyar Ananda Bhavan",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/31/e1e8a185-5b55-436c-bb9b-9d83db18c29b_307.jpg",
    locality: "BTM Layout",
    areaName: "BTM Layout",
    costForTwo: "₹300 for two",
    cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
    avgRating: 4.5,
    parentId: "22",
    avgRatingString: "4.5",
    totalRatingsString: "77K+",
    sla: {
      deliveryTime: 26,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-05 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-South%20Indian.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-South%20Indian.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹349",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.1",
        ratingCount: "11K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "534235",
    name: "Cheesecake & Co.",
    cloudinaryImageId: "b318c0b4bc2169550145ace1d6e791a2",
    locality: "Koramangala",
    areaName: "Koramangala",
    costForTwo: "₹250 for two",
    cuisines: ["Bakery"],
    avgRating: 4.6,
    parentId: "387417",
    avgRatingString: "4.6",
    totalRatingsString: "3.0K+",
    sla: {
      deliveryTime: 17,
      lastMileTravel: 1,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "1.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-06 00:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "bolt/Bolt%20Listing%20badge@3x.png",
          description: "bolt!",
        },
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
              },
            },
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "3.3",
        ratingCount: "110",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "59627",
    name: "La Pino'z Pizza",
    cloudinaryImageId: "ntjshqsv2k7vxtv7vmib",
    locality: "Koramangala",
    areaName: "Koramangala",
    costForTwo: "₹251 for two",
    cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.3,
    parentId: "4961",
    avgRatingString: "4.3",
    totalRatingsString: "17K+",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 1.5,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "1.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-06 03:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.3",
        ratingCount: "2.0K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "158855",
    name: "Candice's Gourmet Sandwiches & Wraps",
    cloudinaryImageId: "d1331113564b015c9d55c48ff48a2553",
    locality: "5th Block",
    areaName: "Koramangala",
    costForTwo: "₹600 for two",
    cuisines: ["Salads", "sandwich", "Snacks"],
    avgRating: 4.6,
    parentId: "465403",
    avgRatingString: "4.6",
    totalRatingsString: "3.9K+",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 0.3,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "0.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-05 23:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "bolt/Bolt%20Listing%20badge@3x.png",
          description: "bolt!",
        },
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
              },
            },
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "561280",
    name: "Baskin Robbins Happyness Shakes",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/12/ab783fda-caaf-4fc5-be60-08b08f322700_561280.JPG",
    locality: "Koramangala",
    areaName: "Koramangala",
    costForTwo: "₹250 for two",
    cuisines: ["Beverages", "Desserts"],
    parentId: "5588",
    avgRatingString: "--",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 0.6,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "0.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-05 23:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹113",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.1",
        ratingCount: "360",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL",
  },

  {
    id: "426776",
    name: "Theobroma",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/d512978b-3dde-48b9-a974-ca7be403eef1_426776.jpg",
    locality: "7th Block",
    areaName: "Koramangala",
    costForTwo: "₹400 for two",
    cuisines: ["Desserts", "Bakery", "Beverages"],
    avgRating: 4.7,
    parentId: "1040",
    avgRatingString: "4.7",
    totalRatingsString: "5.6K+",
    sla: {
      deliveryTime: 18,
      lastMileTravel: 1.3,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "1.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-05 23:45:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "bolt/Bolt%20Listing%20badge@3x.png",
          description: "bolt!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Desserts.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
              },
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Desserts.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-contain">
        <div className="logo-container">
          {/* <div className="logo">🙏🏻</div> */}
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWd8VwBrHSUVmPlRsqt9qibUCE26vZlIUvlw&s"
            alt="Namaste Food Logo"
          />
        </div>
        <div className="logoName">Namaste Food</div>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
          cloudinaryImageId
        }
        alt={name}
      />
      <h3 className="resName">{name}</h3>
      <h4 className="resData" id="resDataCuisines">
        {cuisines.join(", ")}
      </h4>
      <div className="resDataContainer">
        <h4 className="resData">{avgRating} ⭐</h4>
        <h4 className="resData">|</h4>
        <h4 className="resData">{costForTwo}</h4>
        <h4 className="resData">|</h4>
        <h4 className="resData">{sla.deliveryTime + " mins"}</h4>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div className="searchDiv">
      <input
        type="search"
        placeholder="Search for restaurants"
        className="restaurantNameInput"
      />
      <button className="searchBtn"><i class="fa-solid fa-trash-can"></i></button>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <Search />
      </div>
      <div className="restaurant-container">
        {resList.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="footer"></div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
