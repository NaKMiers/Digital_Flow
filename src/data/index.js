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

import image3 from '../assets/imgs/image3.jpg'
import image4 from '../assets/imgs/image4.jpg'
import image5 from '../assets/imgs/image5.jpg'
import image6 from '../assets/imgs/image6.jpg'

import subSlideBackground1 from '../assets/imgs/subSlideBackground1.jpg'
import subSlideBackground2 from '../assets/imgs/subSlideBackground2.jpg'
import subSlideBackground3 from '../assets/imgs/subSlideBackground3.jpg'

import member1 from '../assets/imgs/member1.jpg'
import member2 from '../assets/imgs/member2.jpg'
import member3 from '../assets/imgs/member3.jpg'
import member4 from '../assets/imgs/member4.jpg'
import member5 from '../assets/imgs/member5.jpg'
import member6 from '../assets/imgs/member6.jpg'
import member7 from '../assets/imgs/member7.jpg'
import member8 from '../assets/imgs/member8.jpg'

import clien1 from '../assets/imgs/client1.jpg'
import clien2 from '../assets/imgs/client2.jpg'
import clien3 from '../assets/imgs/client3.jpg'

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

// digital grid
export const imageLinkItems = [image3, image4, image5, image6]

// subslides
export const subSlides = [
   {
      categories: ['Lifestyle'],
      title: 'Consequuntur magni sit dolores eos qui ratione duis voluptatem!',
      background: subSlideBackground1,
   },
   {
      categories: ['Lifestyle'],
      title: 'Dolore magnam aliquam quaerat voluptatem nemo enim',
      background: subSlideBackground2,
   },
   {
      categories: ['Lifestyle'],
      title: 'We are nominated to agency of year for the second time',
      background: subSlideBackground3,
   },
]

// team members
export const teamMembers = [
   {
      name: 'Herman Ledford',
      detail:
         'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod temporincidi labore et dolore.',
      avatar: member1,
      link: '/agency',
   },
   {
      name: 'Mel Granville',
      detail:
         'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod temporincidi labore et dolore.',
      avatar: member2,
      link: '/agency',
   },
   {
      name: 'Ava Robinson',
      detail:
         'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod temporincidi labore et dolore.',
      avatar: member3,
      link: '/agency',
   },
   {
      name: 'Gordon Edwards',
      detail:
         'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod temporincidi labore et dolore.',
      avatar: member4,
      link: '/agency',
   },
   {
      name: 'Cassandra Lynn',
      detail:
         'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod temporincidi labore et dolore.',
      avatar: member5,
      link: '/agency',
   },
   {
      name: 'Karina Marie',
      detail:
         'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod temporincidi labore et dolore.',
      avatar: member6,
      link: '/agency',
   },
   {
      name: 'Eva Lynn',
      detail:
         'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod temporincidi labore et dolore.',
      avatar: member7,
      link: '/agency',
   },
   {
      name: 'Alex Robinson',
      detail:
         'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod temporincidi labore et dolore.',
      avatar: member8,
      link: '/agency',
   },
]

// clients say about us
export const oriTestimonials = [
   {
      name: 'JENIFFER BURNS',
      company: 'Creative Heads Inc.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      avatar: clien1,
   },

   {
      name: 'GORDON EDWARDS',
      company: 'Creative Heads Inc.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      avatar: clien2,
   },

   {
      name: 'ANH KHOA',
      company: 'Creative Heads Inc.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      avatar: clien3,
   },
]
export const testimonials = [
   oriTestimonials[oriTestimonials.length - 1],
   ...oriTestimonials,
   oriTestimonials[0],
]
