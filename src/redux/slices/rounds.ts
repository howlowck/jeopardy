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
            dailyDouble: true,
          },
          {
            prompt: 'The expression 2 + 2 will yield this number',
            answer: 'What is 4',
            dailyDouble: true,
          },
          {
            prompt: 'Adding three and three will give you this',
            answer: 'What is 6',
            dailyDouble: true,
          },
          {
            prompt: 'This number is 4 + 4',
            answer: 'What is 8',
            dailyDouble: true,
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
        title: 'Word "Chu" Lookin\' at',
        questions: [
          {
            prompt: 'An intimate friend or companion.',
            answer: 'What is chum',
          },
          {
            prompt: 'Rounded and plump',
            answer: 'What is chubby',
          },
          {
            prompt: 'To laugh quietly or to oneself.',
            answer: 'What is chuckle',
          },
          {
            prompt: 'To make by the agitation of milk or cream',
            answer: 'What is churn',
          },
          {
            prompt: 'Having a bad disposition; surly; rude',
            answer: 'What is churlish',
          },
        ],
      },
      {
        title: 'Movie Numbers',
        questions: [
          {
            prompt: '(Title) ____ Days of Summer ',
            answer: 'What is 500',
          },
          {
            prompt: '(Quote) "This is Sparta"',
            answer: 'What is 300',
          },
          {
            prompt: '(Quote) "What\'s in the Box?"',
            answer: 'What is Seven?',
          },
          {
            prompt: '(Title) Blade Runner ____',
            answer: 'What is 2049',
          },
          {
            prompt: '(Title) Assault on Precinct ____ ',
            answer: 'What is 13',
          },
        ],
      },
      {
        title: '"Jeopardy" Jeopardy',
        questions: [
          {
            prompt: 'Wagering this dollar amount is against jeopardy rules',
            answer: 'What is 69, 666, 14, 88, 1488?',
          },
          {
            prompt:
              'In 1997, Trebek and this game show host switched roles as an April Fools joke.',
            answer: 'Who is Pat Sajak',
          },
          {
            prompt:
              'The name of the AI that beat the two best human Jeopardy players in 2011',
            answer: 'What is Watson',
          },
          {
            prompt:
              'Ken Jennings holds the record for most consecutive appearances on Jeopardy with this many appearances',
            answer: 'What is 75',
          },
          {
            prompt: "The title of Jeopardy's theme song",
            answer: 'What is "Think!"',
          },
        ],
      },
      {
        title: 'Double Jeopardy',
        questions: [
          {
            prompt:
              'If you want to go to Harvard Law, better ace this four-letter test used as a criterion for admission',
            answer: 'What is LSAT?',
          },
          {
            prompt:
              'Acts that lower the dignity of a trial may bring a fine or jail sentence if you’re held in this.',
            answer: 'What is Contempt of court',
          },
          {
            prompt: 'A claim upon property to secure payment of a debt.',
            answer: 'What is a Lien',
          },
          {
            prompt:
              'This US constituational ammendment limits the number of times a person can be elected President.',
            answer: 'What is 22nd',
          },
          {
            prompt:
              "This US law requires all federal agencies' information and electronic services to be accessible to those with disabilities.",
            answer: 'What is Section 508/504 of the Rehabilitation Act of 1973',
          },
        ],
      },
      {
        title: 'Healthy Foods',
        questions: [
          {
            prompt: "Popeye's favorite food",
            answer: 'What is Spinach',
          },
          {
            prompt: 'This vetetable was the first to be grown in space',
            answer: 'What is a potato',
          },
          {
            prompt: 'dish served "A la Crecy" is garnished with this vegitable',
            answer: 'What are carrots',
          },
          {
            prompt:
              'Apples, pears, peaches, and plums are all members of this plant family.',
            answer: 'What is a rose',
          },
          {
            prompt: 'This is the most widely consumed fruit in the world',
            answer: 'What is a mango',
          },
        ],
      },
      {
        title: 'Random Arithmetics',
        questions: [
          {
            prompt:
              'Number of legs spiders have + The number of chambers of a human heart',
            answer: '8 + 4',
          },
          {
            prompt:
              'the number of seats in the US Senate - The number of major divisions of an insect body',
            answer: '100 - 3',
          },
          {
            prompt:
              'Number of electrons in a hydrogen atom + the current season of the Simpsons',
            answer: '1 + 32',
          },
          {
            prompt:
              'The number of member states (countries) in the UN + the number of timezones in China',
            answer: '193 + 1',
          },
          {
            prompt:
              'The number of characters allowed in the first Tweets - Length of an Olympic swimming pool in meters',
            answer: '140 - 50',
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
            prompt: 'GPT (AI)',
            answer: 'Generative Pre-trained Transformer',
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
