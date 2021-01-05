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
            prompt: 'Simplified Term of 12a + 26b -4b – 16a',
            answer: '-4a + 22b',
          },
          {
            prompt: 'Value of |-26|',
            answer: '26',
          },
          {
            prompt: 'Expanded view of (x – 4)(x + 5)',
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
            prompt: 'Parasite sweeps the Oscars',
            answer: 'Februry',
          },
          {
            prompt: 'Trump announces he is COVID Positive',
            answer: 'October',
          },
          {
            prompt:
              'UK approves Pfizer vaccine, being the first country in the world to do so',
            answer: 'December',
          },
          {
            prompt:
              'Victor J. Glover Jr. became the first Black astronaut to embark on a long-term stay at the ISS',
            answer: 'November',
          },
          {
            prompt:
              'NASA confirms the existence of molecular water on the sunlit side of the Moon',
            answer: 'October',
          },
        ],
      },
      {
        title: 'Good Bye 2020',
        questions: [
          {
            prompt:
              'The first US Supreme Court justice to officiate at a same-sex marriage ceremony',
            answer: 'Ruth Bader Ginsberg',
          },
          {
            prompt:
              'An 18-time All-Star, won five NBA championships, and the Lakers all-time leading scorer',
            answer: 'Kobe Bryant',
          },
          {
            prompt:
              "Won the People's Choice Awards Male Movie Star of the year in 2018",
            answer: 'Chadwick Boseman',
          },
          {
            prompt:
              'Holds the Guinness World Record for "most gameshow episodes hosted"',
            answer: 'Alex Trebek',
          },
          {
            prompt: 'His first band was "The Broken Combs"',
            answer: 'Eddie van Halen',
          },
        ],
      },
      {
        title: 'The Good By 2020',
        questions: [
          {
            prompt:
              'Scientists engineered "super-enzymes" to eat this to combat an ecological crisis',
            answer: 'What is plastic',
          },
          {
            prompt:
              'This company launched its first crewed commerical spaceflight',
            answer: 'What is SpaceX',
          },
          {
            prompt: 'NASA launched a new rover to Mars (properly) named this',
            answer: 'What is Perseverance',
          },
          {
            prompt:
              "This country got the world's first sample of material from below the surface of a space rock",
            answer: 'Japan',
          },
          {
            prompt:
              'this prehistoric creature was discovered remarkably well-preserved in the Siberian permafrost',
            answer: 'What is a Cave Bear',
          },
        ],
      },
      {
        title: 'Some Good Buy 2020',
        questions: [
          {
            prompt:
              'Sony released this next-gen console right before the holiday season',
            answer: 'What is PlayStation 5',
          },
          {
            prompt:
              'The next generation of virtual reality headset by Facebook',
            answer: 'Oculus Quest 2',
          },
          {
            prompt:
              'In a Tom\'s Guide Article, "Best Tablet of 2020 didn\'t Come from Apple" talks about this product',
            answer: 'Remarkable 2 Tablet',
          },
          {
            prompt:
              'This product released by Ford is aimed to compete directly with Tesla Model Y',
            answer: 'Mustang MACH-E',
          },
          {
            prompt:
              'Released by a beverage giant, this drink mixes soda with coffee',
            answer: 'Pepsi Cafe',
          },
        ],
      },
      {
        title: 'Hot (Shows) 2020',
        questions: [
          {
            prompt: 'Baskin, Exotic, Saffery, Finlay',
            answer: 'Tiger King',
          },
          {
            prompt: 'Harmon, Shaibel, Borgov, Townes',
            answer: 'Queens Gambit',
          },
          {
            prompt: 'Mother, Father, Campion, Marcus',
            answer: 'Raised By Wolves',
          },
          {
            prompt: 'Emily, Sylvie, Mindy, Gabriel',
            answer: 'Emily in Paris',
          },
          {
            prompt: 'Nina, Tyler, Kensey, Bode',
            answer: 'Locke and Key',
          },
        ],
      },
      {
        title: 'Not 2020',
        questions: [
          {
            prompt:
              'Wuhan China was the first city that reported signs of this virus',
            answer: 'What is Covid-19?',
          },
          {
            prompt:
              'The Olympics was supposed to be hosted in this country in 2020 but is now planned for 2021',
            answer: 'What is Japan?',
          },
          {
            prompt:
              'Scientists released first-ever image of this astronomical region in 2019',
            answer: 'What is a Black Hole',
          },
          {
            prompt:
              "Due to multiple failed negotiations over UK's withdrawl from the EU, this Prime Minister resigned in 2019",
            answer: 'Who is Theresa May',
          },
          {
            prompt:
              'On May 6 2019, The Duke and Duchess of Sussex welcomed this baby, their first child, into the world',
            answer: 'What is Archie Harrison Mountbatten-Windsor?',
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
