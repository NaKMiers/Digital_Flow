import slideBackground1 from '../assets/imgs/slide-background-1.jpg'
import slideBackground2 from '../assets/imgs/slide-background-2.jpg'
import slideBackground3 from '../assets/imgs/slide-background-3.jpg'
import recentWork1 from '../assets/imgs/recentWork1.jpg'
import recentWork2 from '../assets/imgs/recentWork2.jpg'
import recentWork3 from '../assets/imgs/recentWork3.jpg'
import recentWork4 from '../assets/imgs/recentWork4.jpg'

import brand1 from '../assets/imgs/brand1.jpg'
import brand2 from '../assets/imgs/brand2.jpg'
import brand3 from '../assets/imgs/brand3.jpg'
import brand4 from '../assets/imgs/brand4.jpg'
import brand5 from '../assets/imgs/brand5.jpg'
import brand6 from '../assets/imgs/brand6.jpg'
import brand7 from '../assets/imgs/brand7.jpg'
import brand8 from '../assets/imgs/brand8.jpg'
import brand9 from '../assets/imgs/brand9.jpg'
import brand10 from '../assets/imgs/brand10.jpg'

// slides
export const oriSlides = [
   {
      categories: ['Design', 'Interface'],
      title: 'We are nominated to agency of year for the second time',
      background: slideBackground1,
   },
   {
      categories: ['Design', 'Interface'],
      title: 'Dolore magnam aliquam quaerat voluptatem nemo enim',
      background: slideBackground2,
   },
   {
      categories: ['Design', 'Interface'],
      title: 'Consequuntur magni sit dolores eos qui ratione duis voluptatem!',
      background: slideBackground3,
   },
]
export const slideLength = oriSlides.length
export const maxSlideIndex = slideLength + 2 - 1
export const slides = [oriSlides[slideLength - 1], ...oriSlides, oriSlides[0]]

// recent works
export const recentWorks = [
   {
      thumbnail: recentWork1,
      title: 'Website design red cover',
      date: '4 November, 2020 in',
      category: 'Concepts',
   },
   {
      thumbnail: recentWork2,
      title: 'Graphic design make bootle',
      date: '4 November, 2020 in',
      category: 'Concepts',
   },
   {
      thumbnail: recentWork3,
      title: 'Graphic design stylish chair',
      date: '4 November, 2020 in',
      category: 'Graphic',
   },
   {
      thumbnail: recentWork4,
      title: 'Objects design yellow glasses',
      date: '4 November, 2020 in',
      category: 'Graphic',
   },
]

// our clients
export const clientBrands = [
   brand1,
   brand2,
   brand3,
   brand4,
   brand5,
   brand6,
   brand7,
   brand8,
   brand9,
   brand10,
]
