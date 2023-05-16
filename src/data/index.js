import slideBackground1 from '../assets/imgs/slide-background-1.jpg'
import slideBackground2 from '../assets/imgs/slide-background-2.jpg'
import slideBackground3 from '../assets/imgs/slide-background-3.jpg'

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
