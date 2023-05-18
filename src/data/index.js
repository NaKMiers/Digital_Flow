import slideBackground1 from '../assets/imgs/slide-background-1.jpg'
import slideBackground2 from '../assets/imgs/slide-background-2.jpg'
import slideBackground3 from '../assets/imgs/slide-background-3.jpg'
import recentWork1 from '../assets/imgs/recentWork1.jpg'
import recentWork2 from '../assets/imgs/recentWork2.jpg'
import recentWork3 from '../assets/imgs/recentWork3.jpg'
import recentWork4 from '../assets/imgs/recentWork4.jpg'

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
