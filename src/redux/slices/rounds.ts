import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Round } from '../../types'

const initialState: Round[] = [
  {
    name: 'Test Round',
    categories: [
      {
        title: 'Math 101',
        questions: [
          {
            prompt: 'This is one plus one',
            answer: 'What is 2',
          },
          {
            prompt: 'The expression 2 + 2 will yield this number',
            answer: 'What is 4',
          },
          {
            prompt: 'Adding three and three will give you this',
            answer: 'What is 6',
          },
          {
            prompt: 'This number is 4 + 4',
            answer: 'What is 8',
          },
          {
            prompt: '5 + 5 equals to this',
            answer: 'What is 10',
            dailyDouble: true,
          },
        ],
      },
      {
        title: 'Math 201',
        questions: [
          {
            prompt: 'This is the root of x^2+4x+4',
            answer: 'What is x+2',
          },
          {
            prompt: 'Simplified Term of 12a + 26b -4b - 16a',
            answer: '-4a + 22b',
          },
          {
            prompt: 'Value of |-26|',
            answer: '26',
          },
          {
            prompt: 'Expanded view of (x - 4)(x + 5)',
            answer: 'x^2+x-20',
          },
          {
            prompt:
              'The radius of a circle that has a circumference of 3.14 meters',
            answer: '0.5 meters',
          },
        ],
      },
      {
        title: 'Empty',
        questions: [
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
        ],
      },
      {
        title: 'Empty',
        questions: [
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
        ],
      },
      {
        title: 'Empty',
        questions: [
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
        ],
      },
      {
        title: 'Empty',
        questions: [
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
          {
            prompt: '',
            answer: '',
          },
        ],
      },
    ],
    pointsList: [100, 200, 300, 400, 500],
  },
  {
    name: 'Round One',
    categories: [
      {
        title: 'What a year!',
        questions: [
          {
            prompt: 'Argentina win 2022 World Cup title',
            answer: 'December',
          },
          {
            prompt:
              'Apple becomes the first company to (briefly) reach $3 trillion market value',
            answer: 'January',
          },
          {
            prompt: 'Will Smith slaps Chris Rock on stage',
            answer: 'February',
          },
          {
            prompt: 'Liz Truss resigns as British Prime Minister after 44 days',
            answer: 'October 20',
          },
          {
            prompt:
              'Microsoft announces its intent to acquire Activision Blizzard for $68.7 Billion',
            answer: 'January 18',
          },
        ],
      },
      {
        title: 'Good Bye 2022',
        questions: [
          {
            prompt:
              'He was the beloved TV dad on "Full House" and "America\'s Funniest Home Videos" host',
            answer: 'Bob Saget',
          },
          {
            prompt:
              'In February, she received Platinum Jubilee marking 70 years since she acceded to the British throne',
            answer: 'Queen Elizabeth II',
          },
          {
            prompt:
              'He was the the inventive prop comedian known for smashing watermelons as part of his act',
            answer: 'Gallagher',
          },
          {
            prompt:
              'She was the first female US secretary of state (1997 to 2001)',
            answer: 'Madeleine Albright',
          },
          {
            prompt:
              ' won a total of six Grammys over his career, including Best Rap Solo for "Gangsta\'s Paradise" in 1996.',
            answer: 'Coolio',
          },
        ],
      },
      {
        title: 'Science 2022',
        questions: [
          {
            prompt:
              'In May 2022, scientists unveiled the first image of cosmic phenomenon at the center of our galaxy.',
            answer: 'black hole',
          },
          {
            prompt:
              'In July, the first images from this telescope were released to the public, showing the splendor of our galaxy.',
            answer: 'James Webb Space Telescope',
          },
          {
            prompt:
              'In November, OpenAI released this AI chatbot, taking the world by storm with its conversational ability.',
            answer: 'ChatGPT',
          },
          {
            prompt:
              'In December, for the first time in history, scientists achieved a net energy gain using this process.',
            answer: 'Fusion',
          },
          {
            prompt:
              'In September, a vaccine developed for this disease by Oxford University. It has 80% effectiveness.',
            answer: 'Malaria',
          },
        ],
      },
      {
        title: 'Entertain Me 2022',
        questions: [
          {
            prompt:
              'Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives.',
            answer: 'Severance',
          },
          {
            prompt:
              "Steven Grant discovers he's been granted the powers of an Egyptian moon god. ",
            answer: 'Moon Knight',
          },
          {
            prompt:
              "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop.",
            answer: 'The Bear',
          },
          {
            prompt:
              'Follows the Garvey sisters, who are bound together by the death of their parents and a promise to always protect each other.',
            answer: 'Bad Sisters',
          },
          {
            prompt:
              'Nadia and Martín live in the historical "Condesa" in Mexico City. Both are artists and share their home with a stray dog.',
            answer: 'Amesterdam',
          },
        ],
      },
      {
        title: 'Good News 2022',
        questions: [
          {
            prompt:
              "A woman to referee at this global sporting men's event for the first time",
            answer: 'Stéphanie Frappart at the World Cup',
          },
          {
            prompt:
              'A report found sales of this product are in "permanent decline" and likely have peaked in 2017',
            answer: 'gas-powered cars',
          },
          {
            prompt:
              'A team at Stanford engineers created a new type of this product that can generate electricity at night',
            answer: 'Solar panels',
          },
          {
            prompt:
              'This animal, once-endangered, are growing in population from low 10,000 to 80,000 in 2022 globally thanks to conservations efforts.',
            answer: 'Humpback whales',
          },
          {
            prompt:
              "This US state got its last-ever shipment of coal - it's last coal plant is closing in September",
            answer: 'Hawaii',
          },
        ],
      },
      {
        title: 'Tiktok Food Trends 2022',
        questions: [
          {
            prompt: 'The fluffiest, most impossible giant puffs of bread',
            answer: 'Cloud Bread',
          },
          {
            prompt:
              'A delicious dessert contained in a vessel commonly used for coffee',
            answer: 'Mug cake',
          },
          {
            prompt:
              'This sweet, tangy, spicy sauce is known for its vibrant color',
            answer: 'Pink Sauce',
          },
          {
            prompt:
              'a Mexican dish spread over a large surface meant to be shared with a big group',
            answer: 'Nacho Table',
          },
          {
            prompt:
              'This dish is a twist on the Charcuterie board: swapping meats and cheeses for another dairy product',
            answer: 'Butter board',
          },
        ],
      },
    ],
    pointsList: [100, 200, 300, 400, 500],
  },
  {
    name: 'Round Two',
    categories: [
      {
        title: 'Add a letter',
        questions: [
          {
            prompt:
              'Add a letter to "cat" & you will end up with a nice conversation',
            answer: 'chat',
          },
          {
            prompt:
              'Add a letter to "hotel" & you end up with this less-expensive lodging place',
            answer: 'hostel',
          },
          {
            prompt:
              'One extra letter makes a "uniformed" person this, meaning very much out of the loop',
            answer: 'uninformed',
          },
          {
            prompt:
              'Here\'s a "riddle"; now add a letter & it\'s this hot, flat cooking surface',
            answer: 'griddle',
          },
          {
            prompt:
              'Add a letter to "reel" & you\'ll be able to do this, take much pleasure',
            answer: 'revel',
          },
        ],
      },
      {
        title: 'Technology Abbreviations',
        questions: [
          {
            prompt: 'WYSIWYG (Web Editor)',
            answer: 'What You See Is What You Get',
          },
          {
            prompt: 'CNN (Machine Learning)',
            answer: 'Convolutional Neural Network',
          },
          {
            prompt: 'OLAP (Data)',
            answer: 'Online Analytical Processing',
          },
          {
            prompt: 'CORS (Web Security)',
            answer: 'Cross-Origin Resource Sharing',
          },
          {
            prompt: 'PHP (Web Language)',
            answer: 'PHP: Hypertext Preprocessor (People Helping People)',
          },
        ],
      },
      {
        title: 'It\'s "al" Delicious',
        questions: [
          {
            prompt:
              'a type of tree nut that is often eaten as a snack or used in cooking and baking',
            answer: 'Almond',
          },
          {
            prompt:
              'Named for a Roman restaurateur, this simple dish is known for its sauce of butter, Parmesan & heavy cream',
            answer: 'Alfredo',
          },
          {
            prompt:
              'a type of Mexican dish made with spit-grilled pork that is marinated in a blend of chili peppers, pineapple, and other spices',
            answer: 'Al pastor',
          },
          {
            prompt:
              'water that has a higher pH level than tap water, which some people believe has health benefits.',
            answer: 'Alkaline water',
          },
          {
            prompt:
              "Made from pimiento berry, it's so-named because it tastes like nutmeg, cinnamon & cloves",
            answer: 'Allspice',
          },
        ],
      },
      {
        title: 'S. American Geography',
        questions: [
          {
            prompt:
              'This country has coastlines on both the Caribbean Sea and the Pacific Ocean',
            answer: 'Colombia',
          },
          {
            prompt:
              "Founded in 1554, this city is Brazil's industrial & financial center",
            answer: 'Sao Paulo',
          },
          {
            prompt:
              "The Uyuni Salt Flat, the world's largest salt flat, is located in this country",
            answer: 'Bolivia',
          },
          {
            prompt:
              "The Amazon River, the world's largest river by volume, flows  into this ocean",
            answer: 'Atlantic Ocean',
          },
          {
            prompt:
              "Punta Pariñas, South America's westernmost mainland point, lies in this country's Talara province",
            answer: 'Peru',
          },
        ],
      },
      {
        title: 'Science "K"lass',
        questions: [
          {
            prompt: 'The energy possessed by a body due to its motion',
            answer: 'Kinetic energy',
          },
          {
            prompt:
              "Almost exactly equal to the mass of 1,000 cubic centimeters of water, it's a base unit in the metric system",
            answer: 'kilogram',
          },
          {
            prompt: 'Just add 273.15 to your Celsius reading to get this',
            answer: 'kelvin',
          },
          {
            prompt:
              'This noble gas used in high-speed photography lamps takes its name from the Greek for "hidden"',
            answer: 'krypton',
          },
          {
            prompt:
              "A substance to start a fire, or the point that's the lowest temperature at which something will autoignite",
            answer: 'kindling point',
          },
        ],
      },
      {
        title: 'World Landmarks',
        questions: [
          {
            prompt:
              'In London, this landmark was completed in 1858 and is a clock tower located at the north end of the Houses of Parliament.',
            answer: 'Big Ben',
          },
          {
            prompt:
              'This ancient city in Peru was the capital of the Inca Empire and is a UNESCO World Heritage Site.',
            answer: 'Machu Picchu',
          },
          {
            prompt:
              'This iconic landmark near the Champ de Mars has 1,665 steps',
            answer: 'The Eiffel Tower',
          },
          {
            prompt:
              'This architectural marvel in Rome was built in 80 AD and was originally used for gladiator fights',
            answer: 'Colosseum',
          },
          {
            prompt:
              'This ancient Greek temple is located on the island of Rhodes and was one of the Seven Wonders of the Ancient World.',
            answer: 'What is the Colossus of Rhodes',
          },
        ],
      },
    ],
    pointsList: [200, 400, 600, 800, 1000],
  },
]

const slice = createSlice({
  name: 'rounds',

  initialState: initialState as Round[],

  reducers: {
    setRounds: (state, action: PayloadAction<{ rounds: Round[] }>) => {},
  },
})

export const { setRounds } = slice.actions

export default slice.reducer
