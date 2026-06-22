export const reviews = [
  {
    id: 1,
    productId: 1,
    author: 'Chioma Okafor',
    rating: 4,
    text: 'Fresh and delicious tomatoes. Good quality for the price.',
    date: '2024-01-15',
  },
  {
    id: 2,
    productId: 1,
    author: 'Oluwaseun Adeyemi',
    rating: 5,
    text: 'Best tomatoes I\'ve gotten in a while. Highly recommended!',
    date: '2024-01-12',
  },
  {
    id: 3,
    productId: 2,
    author: 'Zainab Mohammed',
    rating: 3,
    text: 'Bread is okay but not as fresh as I expected. A bit dry.',
    date: '2024-01-10',
  },
  {
    id: 4,
    productId: 3,
    author: 'Emeka Uche',
    rating: 5,
    text: 'Excellent milk quality. Always fresh and arrives on time.',
    date: '2024-01-14',
  },
  {
    id: 5,
    productId: 4,
    author: 'Fatima Hassan',
    rating: 4,
    text: 'Good eggs, fresh. Arrived safely in good packaging.',
    date: '2024-01-13',
  },
  {
    id: 6,
    productId: 5,
    author: 'Kunle Oladele',
    rating: 2,
    text: 'Spinach came a bit wilted. Expected better.',
    date: '2024-01-08',
  },
  {
    id: 7,
    productId: 6,
    author: 'Blessing Eze',
    rating: 4,
    text: 'Cable is sturdy and charges fast. Good value.',
    date: '2024-01-11',
  },
  {
    id: 8,
    productId: 7,
    author: 'Tunde Ajayi',
    rating: 4,
    text: 'Power bank holds charge well. Fast charging works great.',
    date: '2024-01-09',
  },
  {
    id: 9,
    productId: 8,
    author: 'Amina Garba',
    rating: 3,
    text: 'Sound quality is decent. Battery could be better.',
    date: '2024-01-07',
  },
  {
    id: 10,
    productId: 10,
    author: 'Ife Oyedepo',
    rating: 5,
    text: 'Bed sheets are incredibly soft and comfortable!',
    date: '2024-01-14',
  },
  {
    id: 11,
    productId: 11,
    author: 'Chukwu Okoro',
    rating: 4,
    text: 'Heavy duty pot. Heats evenly. Very satisfied.',
    date: '2024-01-12',
  },
  {
    id: 12,
    productId: 12,
    author: 'Grace Nwankwo',
    rating: 2,
    text: 'Mugs are nice but one came chipped. Otherwise good.',
    date: '2024-01-06',
  },
  {
    id: 13,
    productId: 13,
    author: 'Ibrahim Musa',
    rating: 5,
    text: 'Professional quality knife. Sharp and well-balanced!',
    date: '2024-01-13',
  },
  {
    id: 14,
    productId: 14,
    author: 'Folake Adebayo',
    rating: 4,
    text: 'Pillowcases are very comfortable. Great quality cotton.',
    date: '2024-01-11',
  },
];

export const getProductReviews = (productId) => {
  return reviews.filter(r => r.productId === productId);
};

export const getAverageRating = (productId) => {
  const productReviews = getProductReviews(productId);
  if (productReviews.length === 0) return 0;
  const sum = productReviews.reduce((acc, r) => acc + r.rating, 0);
  return (sum / productReviews.length).toFixed(1);
};
