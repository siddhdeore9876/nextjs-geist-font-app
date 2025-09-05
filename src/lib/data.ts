export interface PGListing {
  id: string
  name: string
  description: string
  price: number
  location: string
  city: string
  gender: 'male' | 'female' | 'unisex'
  images: string[]
  amenities: string[]
  rules: string[]
  ownerName: string
  ownerContact: string
  rating: number
  reviews: number
  featured: boolean
}

export const pgListings: PGListing[] = [
  {
    id: '1',
    name: 'Sunrise PG for Girls',
    description: 'A comfortable and safe PG accommodation for working women and students with all modern amenities.',
    price: 8000,
    location: 'Koramangala',
    city: 'Bangalore',
    gender: 'female',
    images: [
      'https://placehold.co/800x600?text=Modern+PG+Room+with+Study+Table',
      'https://placehold.co/800x600?text=Clean+Common+Kitchen+Area',
      'https://placehold.co/800x600?text=Comfortable+Living+Room+Space'
    ],
    amenities: ['WiFi', 'AC', 'Laundry', 'Kitchen', 'Security', 'Parking'],
    rules: ['No smoking', 'No alcohol', 'Visitors allowed till 8 PM', 'Maintain cleanliness'],
    ownerName: 'Priya Sharma',
    ownerContact: '+91 9876543210',
    rating: 4.5,
    reviews: 23,
    featured: true
  },
  {
    id: '2',
    name: 'Elite Boys Hostel',
    description: 'Premium hostel facility for boys with excellent food and modern infrastructure.',
    price: 12000,
    location: 'HSR Layout',
    city: 'Bangalore',
    gender: 'male',
    images: [
      'https://placehold.co/800x600?text=Spacious+Boys+Hostel+Room',
      'https://placehold.co/800x600?text=Modern+Dining+Hall+Area',
      'https://placehold.co/800x600?text=Recreation+Room+with+Games'
    ],
    amenities: ['WiFi', 'AC', 'Mess', 'Gym', 'Security', 'Parking', 'Recreation Room'],
    rules: ['No smoking in rooms', 'Mess timings to be followed', 'No loud music after 10 PM'],
    ownerName: 'Rajesh Kumar',
    ownerContact: '+91 9876543211',
    rating: 4.2,
    reviews: 18,
    featured: true
  },
  {
    id: '3',
    name: 'Green Valley PG',
    description: 'Peaceful PG accommodation in a green environment, suitable for both boys and girls.',
    price: 6500,
    location: 'Whitefield',
    city: 'Bangalore',
    gender: 'unisex',
    images: [
      'https://placehold.co/800x600?text=Green+Valley+PG+Exterior+View',
      'https://placehold.co/800x600?text=Shared+Room+with+Garden+View',
      'https://placehold.co/800x600?text=Common+Study+Area'
    ],
    amenities: ['WiFi', 'Kitchen', 'Garden', 'Security', 'Parking'],
    rules: ['Separate floors for boys and girls', 'No smoking', 'Quiet hours after 10 PM'],
    ownerName: 'Anita Reddy',
    ownerContact: '+91 9876543212',
    rating: 4.0,
    reviews: 15,
    featured: false
  },
  {
    id: '4',
    name: 'Tech Hub PG',
    description: 'Modern PG near IT companies with high-speed internet and co-working space.',
    price: 10000,
    location: 'Electronic City',
    city: 'Bangalore',
    gender: 'unisex',
    images: [
      'https://placehold.co/800x600?text=Modern+Tech+Hub+PG+Building',
      'https://placehold.co/800x600?text=Co-working+Space+with+WiFi',
      'https://placehold.co/800x600?text=Modern+Furnished+Room'
    ],
    amenities: ['High-Speed WiFi', 'AC', 'Co-working Space', 'Kitchen', 'Security', 'Parking'],
    rules: ['Professional environment', 'No loud activities', 'Maintain workspace cleanliness'],
    ownerName: 'Suresh Patel',
    ownerContact: '+91 9876543213',
    rating: 4.7,
    reviews: 31,
    featured: true
  },
  {
    id: '5',
    name: 'Budget Friendly PG',
    description: 'Affordable accommodation for students with basic amenities and good food.',
    price: 4500,
    location: 'Marathahalli',
    city: 'Bangalore',
    gender: 'male',
    images: [
      'https://placehold.co/800x600?text=Budget+Friendly+PG+Room',
      'https://placehold.co/800x600?text=Simple+Clean+Kitchen',
      'https://placehold.co/800x600?text=Common+Area+for+Students'
    ],
    amenities: ['WiFi', 'Kitchen', 'Security', 'Laundry'],
    rules: ['Students only', 'No smoking', 'Maintain cleanliness', 'No loud music'],
    ownerName: 'Ramesh Gupta',
    ownerContact: '+91 9876543214',
    rating: 3.8,
    reviews: 12,
    featured: false
  },
  {
    id: '6',
    name: 'Luxury Ladies PG',
    description: 'Premium accommodation for working women with luxury amenities and services.',
    price: 15000,
    location: 'Indiranagar',
    city: 'Bangalore',
    gender: 'female',
    images: [
      'https://placehold.co/800x600?text=Luxury+Ladies+PG+Room',
      'https://placehold.co/800x600?text=Premium+Kitchen+and+Dining',
      'https://placehold.co/800x600?text=Elegant+Common+Lounge'
    ],
    amenities: ['WiFi', 'AC', 'Housekeeping', 'Laundry', 'Kitchen', 'Security', 'Parking', 'Gym'],
    rules: ['Working women only', 'No smoking', 'Visitors allowed with prior notice'],
    ownerName: 'Meera Joshi',
    ownerContact: '+91 9876543215',
    rating: 4.8,
    reviews: 27,
    featured: true
  }
]

export const cities = ['Bangalore', 'Mumbai', 'Delhi', 'Pune', 'Chennai', 'Hyderabad']
export const amenities = ['WiFi', 'AC', 'Kitchen', 'Laundry', 'Security', 'Parking', 'Gym', 'Mess', 'Housekeeping']
