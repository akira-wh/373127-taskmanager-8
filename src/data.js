import {getRandomInteger} from './utils.js';

// Временный набор цветов для генерации задач.
const availableTaskColors = [
  `black`,
  `yellow`,
  `blue`,
  `green`,
  `pink`
];

// Временный автоинкрементируемый ID для генерации задач.
let tasksTempCounter = 1;

// Данные задач.
const tasksData = new Array(40).fill()
                               .map(() => {
                                 return {
                                   id: tasksTempCounter++,
                                   title: `Start typing your text here...`,
                                   color: availableTaskColors[getRandomInteger(0, availableTaskColors.length - 1)],
                                   deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
                                   repeatingDays: new Map([
                                     [`mo`, Boolean(getRandomInteger(0, 1))],
                                     [`tu`, Boolean(getRandomInteger(0, 1))],
                                     [`we`, Boolean(getRandomInteger(0, 1))],
                                     [`th`, Boolean(getRandomInteger(0, 1))],
                                     [`fr`, Boolean(getRandomInteger(0, 1))],
                                     [`sa`, Boolean(getRandomInteger(0, 1))],
                                     [`su`, Boolean(getRandomInteger(0, 1))]
                                   ]),
                                   hashtags: new Set([
                                     `work`,
                                     `rest`,
                                     `important`
                                   ]),
                                   illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
                                   inFavorite: Boolean(getRandomInteger(0, 1))
                                 };
                               });

// Данные фильтров.
const filtersData = [
  {
    id: `all`,
    name: `All`,
    tasksNumber: tasksData.length
  },
  {
    id: `overdue`,
    name: `Overdue`,
    tasksNumber: 0
  },
  {
    id: `today`,
    name: `Today`,
    tasksNumber: 0
  },
  {
    id: `favorites`,
    name: `Favorites`,
    tasksNumber: tasksData.reduce((accum, taskData) => taskData.inFavorite ? ++accum : accum, 0)
  },
  {
    id: `repeating`,
    name: `Repeating`,
    tasksNumber: 2
  },
  {
    id: `tags`,
    name: `Tags`,
    tasksNumber: 6
  },
  {
    id: `archive`,
    name: `Archive`,
    tasksNumber: 115
  }
];

export {tasksData, filtersData};
