const express = require('express');
const { resolve } = require('path');
let cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
let hotels = [
  {
    id: 1,
    name: 'Romantic Getaway',
    category: 'Resort',
    rating: 2.2,
    reviews: 4572,
    amenity: 'Spa',
    price: 10464,
    country: 'South Africa',
  },
  {
    id: 2,
    name: 'Wellness Retreat',
    category: 'Family',
    rating: 2.8,
    reviews: 2114,
    amenity: 'Pool',
    price: 13243,
    country: 'Australia',
  },
  {
    id: 3,
    name: 'Romantic Getaway',
    category: 'Luxury',
    rating: 3.1,
    reviews: 4359,
    amenity: 'Restaurant',
    price: 3299,
    country: 'Germany',
  },
  {
    id: 4,
    name: 'Luxury Suites',
    category: 'Family',
    rating: 4.9,
    reviews: 3651,
    amenity: 'Bar',
    price: 16359,
    country: 'United Kingdom',
  },
  {
    id: 5,
    name: 'Luxury Suites',
    category: 'Budget',
    rating: 4.6,
    reviews: 688,
    amenity: 'Gym',
    price: 15570,
    country: 'France',
  },
  {
    id: 6,
    name: 'Cultural Heritage Hotel',
    category: 'Boutique',
    rating: 2.0,
    reviews: 219,
    amenity: 'Pet Friendly',
    price: 2321,
    country: 'USA',
  },
  {
    id: 7,
    name: 'Business Hotel',
    category: 'Mid-Range',
    rating: 3.7,
    reviews: 1040,
    amenity: 'Free WiFi',
    price: 4523,
    country: 'India',
  },
  {
    id: 8,
    name: 'Historic Plaza Hotel',
    category: 'Mid-Range',
    rating: 3.5,
    reviews: 300,
    amenity: 'Parking',
    price: 8543,
    country: 'Australia',
  },
  {
    id: 9,
    name: 'Adventure Resort',
    category: 'Boutique',
    rating: 4.2,
    reviews: 1222,
    amenity: 'Gym',
    price: 11894,
    country: 'South Africa',
  },
  {
    id: 10,
    name: 'Mountain Retreat',
    category: 'Resort',
    rating: 4.8,
    reviews: 4015,
    amenity: 'Spa',
    price: 17560,
    country: 'India',
  },
  {
    id: 11,
    name: 'Eco Friendly Lodge',
    category: 'Family',
    rating: 2.4,
    reviews: 528,
    amenity: 'Restaurant',
    price: 3124,
    country: 'Germany',
  },
  {
    id: 12,
    name: 'Urban Boutique Hotel',
    category: 'Mid-Range',
    rating: 3.9,
    reviews: 1401,
    amenity: 'Free WiFi',
    price: 9245,
    country: 'France',
  },
  {
    id: 13,
    name: 'Beachfront Hotel',
    category: 'Luxury',
    rating: 4.5,
    reviews: 489,
    amenity: 'Pool',
    price: 14567,
    country: 'USA',
  },
  {
    id: 14,
    name: 'Ocean View Resort',
    category: 'Budget',
    rating: 3.3,
    reviews: 783,
    amenity: 'Spa',
    price: 7432,
    country: 'United Kingdom',
  },
  {
    id: 15,
    name: 'City Central Hotel',
    category: 'Boutique',
    rating: 4.1,
    reviews: 2133,
    amenity: 'Bar',
    price: 9823,
    country: 'Australia',
  },
  {
    id: 16,
    name: 'Casino Resort',
    category: 'Luxury',
    rating: 4.9,
    reviews: 5000,
    amenity: 'Bar',
    price: 18900,
    country: 'South Africa',
  },
  {
    id: 17,
    name: 'Golf Resort',
    category: 'Mid-Range',
    rating: 4.7,
    reviews: 789,
    amenity: 'Gym',
    price: 16340,
    country: 'France',
  },
  {
    id: 18,
    name: 'Family Fun Hotel',
    category: 'Family',
    rating: 3.2,
    reviews: 1322,
    amenity: 'Pool',
    price: 7500,
    country: 'Germany',
  },
  {
    id: 19,
    name: 'Spa and Relaxation Hotel',
    category: 'Luxury',
    rating: 4.4,
    reviews: 2314,
    amenity: 'Spa',
    price: 14900,
    country: 'United Kingdom',
  },
  {
    id: 20,
    name: 'Country House Hotel',
    category: 'Budget',
    rating: 3.6,
    reviews: 1876,
    amenity: 'Parking',
    price: 6234,
    country: 'Australia',
  },
];

// 1 Function to sort hotels by pricing low-to-high
const sortHotelsByPriceLowToHigh = (a, b) => {
  return a.price - b.price;
};

// 1 Function to sort hotels by pricing high-to-low
const sortHotelsByPriceHighToLow = (a, b) => {
  return b.price - a.price;
};

// 1 Endpoint to sort hotels by pricing
app.get('/hotels/sort/pricing', (req, res) => {
  const pricing = req.query.pricing;
  let sortedHotels;

  if (pricing === 'low-to-high') {
    sortedHotels = hotels.slice().sort(sortHotelsByPriceLowToHigh);
  } else if (pricing === 'high-to-low') {
    sortedHotels = hotels.slice().sort(sortHotelsByPriceHighToLow);
  }

  res.json({ hotels: sortedHotels });
});

// 2 Function to sort hotels by rating low-to-high
const sortHotelsByRatingLowToHigh = (a, b) => {
  return a.rating - b.rating;
};

// 2 Function to sort hotels by rating high-to-low
const sortHotelsByRatingHighToLow = (a, b) => {
  return b.rating - a.rating;
};

// 2 Endpoint to sort hotels by rating
app.get('/hotels/sort/rating', (req, res) => {
  const rating = req.query.rating;
  let sortedHotels;

  if (rating === 'low-to-high') {
    sortedHotels = hotels.slice().sort(sortHotelsByRatingLowToHigh);
  } else if (rating === 'high-to-low') {
    sortedHotels = hotels.slice().sort(sortHotelsByRatingHighToLow);
  }

  res.json({ hotels: sortedHotels });
});
// 3 Function to sort hotels by reviews least-to-most
const sortHotelsByReviewsLeastToMost = (a, b) => {
  return a.reviews - b.reviews;
};

// 3 Function to sort hotels by reviews most-to-least
const sortHotelsByReviewsMostToLeast = (a, b) => {
  return b.reviews - a.reviews;
};

// 3 Endpoint to sort hotels by reviews
app.get('/hotels/sort/reviews', (req, res) => {
  const reviews = req.query.reviews;
  let sortedHotels;

  if (reviews === 'least-to-most') {
    sortedHotels = hotels.slice().sort(sortHotelsByReviewsLeastToMost);
  } else if (reviews === 'most-to-least') {
    sortedHotels = hotels.slice().sort(sortHotelsByReviewsMostToLeast);
  }

  res.json({ hotels: sortedHotels });
});
// 4. Function to filter hotels by amenity
function filterByAmenity(hotel, amenity) {
  return hotel.amenity.toLowerCase() === amenity.toLowerCase();
}

// 4. Endpoint to filter hotels by amenity
app.get('/hotels/filter/amenity', (req, res) => {
  const amenity = req.query.amenity; 
  const filteredHotels = hotels.filter((hotel) =>
    filterByAmenity(hotel, amenity)
  );
  res.json({ hotels: filteredHotels });
});
// 5. Function to filter hotels by country
function filterByCountry(hotel, country) {
  return hotel.country.toLowerCase() === country.toLowerCase(); 
}
// 5. Endpoint to filter hotels by country
app.get('/hotels/filter/country', (req, res) => {
  const country = req.query.country; 
  const filteredHotels = hotels.filter((hotel) =>
    filterByCountry(hotel, country)
  );
  res.json({ hotels: filteredHotels });
});
// 6. Function to filter hotels by category
function filterByCategory(hotel, category) {
  return hotel.category.toLowerCase() === category.toLowerCase();
}

// 6. Endpoint to filter hotels by category
app.get('/hotels/filter/category', (req, res) => {
  const category = req.query.category;
  const filteredHotels = hotels.filter((hotel) =>
    filterByCategory(hotel, category)
  );
  res.json({ hotels: filteredHotels });
});
// 7. Endpoint to send all hotels
app.get('/hotels', (req, res) => {
  res.json({ hotels: hotels }); // Sending all hotels as a JSON response
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
