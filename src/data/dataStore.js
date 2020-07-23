export const settings = {
  columnCreatorText: 'Dodaj nową listę',
  cardCreatorText: 'Dodaj nowe zadanie',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },

  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',

  search: {
    defaultText: 'Search...',
    icon: 'search',
  },

  navbar: {
    toHome: '/',
    toInfo: '/info',
    toFAQ: '/faq',
    icon: 'rocket',
    classNameActive: 'active',
  },

  home: {
    title: 'Things to do <sup>soon!</sup>',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },

  info: {
    title: 'INFO',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    containerTitle: 'Info',
    containerText: 'Things about the app',
  },

  FAQ: {
    title: 'FAQ',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    question1: 'What is your favourite movie?',
    answer1: 'Spider Man',
    question2: 'Why?',
    answer2: 'I like spiders',
  },

};

export const pageContents = {
  title: 'First react app',
  subtitle: 'Hello',
};

export const listData = {
  title: 'Hello<sup>there</sup>',
  description: 'How are you?',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Nauka',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'React',
        },
        {
          key: 1,
          title: 'Redux',
        },
      ],
    },
    {
      key: 1,
      title: 'Filmy',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Ogród Fauna',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Rozrywka',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'Pograć...',
        },
        {
          key: 1,
          title: 'i jeszcze raz pograć',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'FAVOURITE <sup>feautures</sup>',
    description: 'Interesting things I want to check out',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },

  {
    id: 'list-2',
    title: 'THINGS <sup>to do</sup>',
    description: 'Plan for the day',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-3',
    title: 'SHOPPING<sup>list</sup>',
    description: 'What to buy',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },


];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'How to',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
    index: 0,
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
    index: 1,
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
    index: 0,
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
    index: 1,
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
    index: 0,
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
    index: 1,
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;