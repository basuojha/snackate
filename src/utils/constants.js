export const quickFilterItems = [
  {
    type: 'range',
    name: 'Under ₹3000 for two',
    filterName: 'priceForTwo',
    filterCondition: 'lessThan',
    value: 300000
  },
  {
    type: 'range',
    name: 'Rating 4.0+',
    filterName: 'rating',
    filterCondition: 'greaterThan',
    value: 4
  },
  {
    type: 'range',
    name: 'Under 30 minutes',
    filterName: 'timeForDelivery',
    filterCondition: 'lessThan',
    value: 30
  },
  {
    type: 'range',
    name: '10% Discount and more',
    filterName: 'discount',
    filterCondition: 'greaterThan',
    value: 10
  },
  {
    type: 'dropdown',
    name: 'Cuisine',
    filterName: 'cuisine'
  }
]