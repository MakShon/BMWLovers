import avatarDefault from '../assets/images/avatarDefault.jpg';

export const questionsData = [
  {
    id: 1,
    title: 'How to use styled-components in React?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui sollicitudin, nec aliquam purus ultricies. Donec nec nunc nec nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui sollicitudin, nec aliquam purus ultricies. Donec nec nunc nec nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui sollicitudin, nec aliquam purus ultricies. Donec nec nunc nec nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui sollicitudin, nec aliquam purus ultricies. Donec nec nunc nec nunc.',
    avatarUrl: avatarDefault,
    name: 'Jane Doe',
    timeLeft: '2 hours ago',
  },
  {
    id: 2,
    title: 'What is the best way to manage state in a React app?',
    description: 'I am looking for suggestions on managing state efficiently in a large React project.',
    avatarUrl: avatarDefault,
    name: 'John Smith',
    timeLeft: '3 hours ago',
  },
  {
    id: 3,
    title: 'How to fetch data using React hooks?',
    description: 'I need help understanding the best practices for fetching data in React using hooks.',
    avatarUrl: avatarDefault,
    name: 'Alice Johnson',
    timeLeft: '4 hours ago',
  },
  {
    id: 4,
    title: 'How to fetch data using React hooks?',
    description: 'I need help understanding the best practices for fetching data in React using hooks.',
    avatarUrl: avatarDefault,
    name: 'Alice Johnson',
    timeLeft: '4 hours ago',
  },
];

export const answersData = [
  {
    id: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui sollicitudin, nec aliquam purus ultricies. Donec nec nunc nec nunc.',
    avatarUrl: avatarDefault,
    name: 'Jane Doe',
    timeLeft: '2 hours ago',
    questionId: 1,
  },
  {
    id: 2,
    description: 'I am looking for suggestions on managing state efficiently in a large React project.',
    avatarUrl: avatarDefault,
    name: 'John Smith',
    timeLeft: '3 hours ago',
    questionId: 1,
  },
  {
    id: 3,
    description: 'I need help understanding the best practices for fetching data in React using hooks.',
    avatarUrl: avatarDefault,
    name: 'Alice Johnson',
    timeLeft: '4 hours ago',
    questionId: 1,
  },
  {
    id: 4,
    description: 'I need help understanding the best practices for fetching data in React using hooks.',
    avatarUrl: avatarDefault,
    name: 'Alice Johnson',
    timeLeft: '4 hours ago',
    questionId: 2,
  },
];
