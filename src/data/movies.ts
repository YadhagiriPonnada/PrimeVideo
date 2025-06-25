import { Movie, MovieCategory } from '../types/movie';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'HIT: The Third Case',
    description: 'HIT: The Third Case follows SP Arjun Sarkaar, a sharp yet emotionally scarred cop, as he investigates a brutal murder that uncovers dark secrets and psychological twists. As the case deepens, personal demons resurface, blurring the line between duty and obsession.',
    genre: ['Crime', 'Mystery', 'Thriller'],
    year: 2025,
    duration: '2h 37m',
    rating: 'IMDB-6.9/10',
    poster: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750848372/hit3_nuizvu.jpg',
    backdrop: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750849068/hit321_haisw5.jpg',
    director: 'Sailesh Kolanu',
    cast: ['Nani', 'Srinidhi Shetty', 'Rao Ramesh', 'Samuthirakani', 'Surya Srinivas', 'Komalee Prasad']
  },
  {
    id: '2',
    title: 'Lucky Baskhar',
    description: 'Lucky Baskhar is a gripping financial thriller that follows a middle-class bank employee who gets entangled in a massive banking scam. As he navigates through corruption and deceit, he must make choices that will determine his family\'s future.',
    genre: ['Thriller', 'Drama', 'Crime'],
    year: 2024,
    duration: '2h 28m',
    rating: 'IMDB-7.8/10',
    poster: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750848372/lucky1_ybhc33.jpg',
    backdrop: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750849760/lucky_nzbx47.jpg',
    director: 'Venky Atluri',
    cast: ['Dulquer Salmaan', 'Meenakshi Chaudhary', 'Ramki', 'Sachin Khedekar', 'Tinnu Anand']
  },
  {
    id: '3',
    title: 'RRR',
    description: 'A fictional story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s. An epic tale of friendship, sacrifice, and the fight for freedom against British colonial rule.',
    genre: ['Action', 'Drama', 'Adventure'],
    year: 2022,
    duration: '3h 7m',
    rating: 'IMDB-7.9/10',
    poster: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750848374/rrr_aohdji.jpg',
    backdrop: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750849633/rrra_rpnjsi.jpg',
    director: 'S.S. Rajamouli',
    cast: ['N.T. Rama Rao Jr.', 'Ram Charan', 'Alia Bhatt', 'Ajay Devgn', 'Olivia Morris']
  },
  {
    id: '4',
    title: 'Sita Ramam',
    description: 'An orphaned soldier\'s life changes after he receives a letter from a girl named Sita. He meets her and love blossoms between them. When he returns to his camp in Kashmir, he sends a letter to Sita which won\'t reach her.',
    genre: ['Romance', 'Drama', 'War'],
    year: 2022,
    duration: '2h 43m',
    rating: 'IMDB-8.7/10',
    poster: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750850960/ram_qsan3e.jpg',
    backdrop: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750850951/ram1_kz8ykl.jpg',
    director: 'Hanu Raghavapudi',
    cast: ['Dulquer Salmaan', 'Mrunal Thakur', 'Rashmika Mandanna', 'Sumanth', 'Gautham Vasudev Menon']
  },
  {
    id: '5',
    title: 'Rangasthalam',
    description: 'Set in the 1980s, Rangasthalam tells the story of Chitti Babu, a hearing-impaired man who fights against the corrupt village president and his brother to bring justice to his village. A tale of courage, love, and social justice.',
    genre: ['Action', 'Drama', 'Thriller'],
    year: 2018,
    duration: '2h 59m',
    rating: 'IMDB-8.2/10',
    poster: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750848374/rangastalam_gi5usr.jpg',
    backdrop: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750849616/ranga1_vrucrw.jpg',
    director: 'Sukumar',
    cast: ['Ram Charan', 'Samantha Ruth Prabhu', 'Aadhi Pinisetty', 'Jagapathi Babu', 'Prakash Raj']
  },
  {
    id: '6',
    title: 'Baahubali: The Beginning',
    description: 'In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring people. The first part of the epic saga that redefined Indian cinema with its grandeur and storytelling.',
    genre: ['Action', 'Adventure', 'Drama'],
    year: 2015,
    duration: '2h 39m',
    rating: 'IMDB-8.0/10',
    poster: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750848374/bahu1_cfbn1g.jpg',
    backdrop: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750849591/bahubali_lwlomy.jpg',
    director: 'S.S. Rajamouli',
    cast: ['Prabhas', 'Rana Daggubati', 'Anushka Shetty', 'Tamannaah Bhatia', 'Ramya Krishnan']
  },
  {
    id: '7',
    title: 'Baahubali 2: The Conclusion',
    description: 'When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom. The epic conclusion to the Baahubali saga.',
    genre: ['Action', 'Adventure', 'Drama'],
    year: 2017,
    duration: '2h 47m',
    rating: 'IMDB-8.2/10',
    poster: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750848374/bagu21_fyypi0.jpg',
    backdrop: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750849592/bahubali2_icxffz.jpg',
    director: 'S.S. Rajamouli',
    cast: ['Prabhas', 'Rana Daggubati', 'Anushka Shetty', 'Tamannaah Bhatia', 'Sathyaraj']
  },
  {
    id: '8',
    title: 'Samajavaragamana',
    description: 'A heartwarming family drama that explores the bonds between generations and the importance of traditional values in modern times. The story follows a joint family navigating through personal conflicts and societal changes.',
    genre: ['Family', 'Drama', 'Comedy'],
    year: 2023,
    duration: '2h 15m',
    rating: 'IMDB-7.5/10',
    poster: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750850926/samaj_zasxts.jpg',
    backdrop: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750850939/samaj1_cae7az.jpg',
    director: 'Ram Abbaraju',
    cast: ['Sree Vishnu', 'Reba Monica John', 'Naresh', 'Raghu Babu', 'Vennela Kishore']
  },
  {
    id: '9',
    title: 'Mazaka',
    description: 'A comedy-drama that follows the misadventures of a group of friends who get involved in a series of hilarious situations while trying to achieve their dreams. A light-hearted take on friendship and ambition.',
    genre: ['Comedy', 'Drama', 'Adventure'],
    year: 2024,
    duration: '2h 5m',
    rating: 'IMDB-6.8/10',
    poster: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750848374/majaka_aca36q.jpg',
    backdrop: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750849672/Mazaka_yaqfrk.jpg',
    director: 'Tridev',
    cast: ['Sundeep Kishan', 'Riya Suman', 'Brahmanandam', 'Ali', 'Posani Krishna Murali']
  },
  {
    id: '10',
    title: 'Virupaksha',
    description: 'Set in 1970s Andhra Pradesh, Virupaksha is a supernatural thriller about mysterious deaths in a village. When Surya visits his wife\'s village, he discovers dark secrets and must confront ancient evil forces to save the villagers.',
    genre: ['Horror', 'Thriller', 'Supernatural'],
    year: 2023,
    duration: '2h 25m',
    rating: 'IMDB-7.4/10',
    poster: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750848372/viru_cbl3lg.jpg',
    backdrop: 'https://res.cloudinary.com/dveyxa6i5/image/upload/v1750848372/viru2_bhlkhh.jpg',
    director: 'Karthik Dandu',
    cast: ['Sai Dharam Tej', 'Samyuktha Menon', 'Brahmaji', 'Ajay', 'Sonali Naik']
  }
];

export const movieCategories: MovieCategory[] = [
  {
    id: 'action',
    name: 'Action & Adventure',
    movies: movies.filter(movie => 
      movie.genre.some(g => ['Action', 'Adventure', 'Thriller'].includes(g))
    )
  },
  {
    id: 'drama',
    name: 'Drama & Romance',
    movies: movies.filter(movie => 
      movie.genre.some(g => ['Drama', 'Romance', 'Family'].includes(g))
    )
  },
  {
    id: 'horror',
    name: 'Horror & Supernatural',
    movies: movies.filter(movie => 
      movie.genre.some(g => ['Horror', 'Supernatural', 'Mystery'].includes(g))
    )
  },
  {
    id: 'comedy',
    name: 'Comedy & Entertainment',
    movies: movies.filter(movie => 
      movie.genre.some(g => ['Comedy'].includes(g))
    )
  },
  {
    id: 'crime',
    name: 'Crime & Thriller',
    movies: movies.filter(movie => 
      movie.genre.some(g => ['Crime', 'Thriller'].includes(g))
    )
  }
];