import {getRandomInteger} from './utils.js';

// Данные задач
const tasksData = [
  {
    id: 1,
    title: `Подготовить растительные образцы`,
    color: `green`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, true],
      [`Tu`, true],
      [`We`, true],
      [`Th`, true],
      [`Fr`, true],
      [`Sa`, true],
      [`Su`, true]
    ]),
    hashtags: new Set([
      `biology`,
      `work`,
      `science`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  },
  {
    id: 2,
    title: `Выбрать книги на "Гермес"`,
    color: `blue`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `hermes`,
      `books`,
      `hobby`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 3,
    title: `Счастливого старта!`,
    color: `pink`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `hermes`,
      `mars`,
      `work`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 4,
    title: `Попали в бурю, миссия отменена, собираемся назад.`,
    color: `black`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `mars`,
      `work`,
      `troubles`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 5,
    title: `MBA улетел. Я ранен и в полной заднице. Найти жилой модуль.`,
    color: `black`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `mars`,
      `troubles`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  },
  {
    id: 6,
    title: `Оксигенератор и регенератор воды в норме. Что с пищей?`,
    color: `yellow`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `mars`,
      `food`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  },
  {
    id: 7,
    title: `Найти способ связаться с Землей или "Гермесом"`,
    color: `black`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `mars`,
      `earth`,
      `hermes`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  },
  {
    id: 8,
    title: `Объедки — в ведро. Нужны почва, удобрение и 250 л. воды.`,
    color: `green`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, true],
      [`Tu`, true],
      [`We`, true],
      [`Th`, true],
      [`Fr`, true],
      [`Sa`, true],
      [`Su`, true]
    ]),
    hashtags: new Set([
      `biology`,
      `food`,
      `science`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  },
  {
    id: 9,
    title: `Нашел музыку. Диско, будь ты проклята, Льюис! Нужно найти другую.`,
    color: `black`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `rest`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 10,
    title: `Картофель растет, показатели великолепные, но как потом хранить?`,
    color: `yellow`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `food`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  },
  {
    id: 11,
    title: `Есть план: нужно пройти 3200 км до Скиапарелли. Срочно найти марсоход!`,
    color: `pink`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, true],
      [`Tu`, true],
      [`We`, true],
      [`Th`, true],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `transport`,
      `schiaparelli`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  },
  {
    id: 12,
    title: `Сверка карт. Рассчеты пути в двух экземплярах.`,
    color: `pink`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `transport`,
      `schiaparelli`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  },
  {
    id: 13,
    title: `Пробная вылазка недалеко от модуля. Кружим по окрестностям.`,
    color: `yellow`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, true],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `transport`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 14,
    title: `Нужно больше батарей. На дальние дистанции марсоходу недостает заряда`,
    color: `blue`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, true]
    ]),
    hashtags: new Set([
      `transport`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  },
  {
    id: 15,
    title: `Нашел "Патфайндер" и "Соджорнер". Нужно связаться с НАСА.`,
    color: `pink`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, true],
      [`Tu`, true],
      [`We`, true],
      [`Th`, true],
      [`Fr`, true],
      [`Sa`, true],
      [`Su`, true]
    ]),
    hashtags: new Set([
      `communication`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  },
  {
    id: 16,
    title: `Твою мать, заработало! Они ответили!!! Нужны карточки с буквами`,
    color: `black`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, true],
      [`Tu`, true],
      [`We`, true],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `communication`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  },
  {
    id: 17,
    title: `Проклятые старые сериалы. Может, где-то найдутся получше?`,
    color: `green`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `rest`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 18,
    title: `Время второй жатвы урожая. Жаль, что у меня нет соломенной шляпы и подтяжек!`,
    color: `green`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `food`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 19,
    title: `Обновить ПО передатчика.`,
    color: `pink`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `communication`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 20,
    title: `Модифицировать скафандр и прицеп марсохода.`,
    color: `pink`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `transport`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 21,
    title: `131 отверстие в прицепе за сегодня. Молоток замкнуло. Проблема?`,
    color: `yellow`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `transport`,
      `survivalplan`,
      `troubles`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 22,
    title: `Повредил спину, уже лучше. Продолжаю улучшать марсоход. Нужна ванна.`,
    color: `pink`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `rest`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 23,
    title: `Перенести из жилого модуля аппаратуру жизнеобеспечения.`,
    color: `green`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, true],
      [`Tu`, true],
      [`We`, true],
      [`Th`, true],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `transport`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  },
  {
    id: 24,
    title: `Сегодня великий день. Я отправляюсь к Скиапарелли!`,
    color: `blue`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `schiaparelli`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  },
  {
    id: 25,
    title: `Отключить обогреватели, освещение и главный компьютер модуля.`,
    color: `pink`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 26,
    title: `Марсианская долина! Наконец-то я здесь! Проверить курс.`,
    color: `black`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `schiaparelli`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 27,
    title: `Я сбился. Дождаться очередного прохода Фобоса, пересчитать долготу и широту`,
    color: `black`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `schiaparelli`,
      `phobos`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 28,
    title: `Надвигается песчаная буря. Составить план действий.`,
    color: `yellow`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `storm`,
      `troubles`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 29,
    title: `Завтра буду у съезда в Скиапарелли! Хоть бы ничего не случилось.`,
    color: `blue`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `schiaparelli`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  },
  {
    id: 30,
    title: `Опрокинулся. Нужно устранить последствия.`,
    color: `black`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `schiaparelli`,
      `troubles`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 31,
    title: `Ура, я на месте, нашел МВА. Жду схему от НАСА как его разобрать.`,
    color: `blue`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, true],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `schiaparelli`,
      `almostdone`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 32,
    title: `Разобрал космический корабль за 3 миллиарда долларов. Отдых.`,
    color: `green`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `schiaparelli`,
      `almostdone`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 33,
    title: `МВА готов и запущен, взлетаю, хорошо бы не вырубиться.`,
    color: `yellow`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `almostdone`,
      `hermes`,
      `survivalplan`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: false,
    isDone: true
  },
  {
    id: 34,
    title: `Есть!!! Ребра визжат от боли, но это самый счастливый день в моей жизни!!!`,
    color: `pink`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `hermes`,
      `done`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  },
  {
    id: 35,
    title: `Я дома. Хочу пиццу :)`,
    color: `green`,
    deadline: new Date(Date.now() + getRandomInteger(-2592000000, 2592000000)),
    repeatingDays: new Map([
      [`Mo`, false],
      [`Tu`, false],
      [`We`, false],
      [`Th`, false],
      [`Fr`, false],
      [`Sa`, false],
      [`Su`, false]
    ]),
    hashtags: new Set([
      `home`,
      `pizza`,
      `happiness`
    ]),
    illustrationURL: `https://picsum.photos/160/90/?image=${getRandomInteger(0, 1050)}`,
    isFavorite: true,
    isDone: true
  }
];

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
    tasksNumber: tasksData.reduce((accum, taskData) => taskData.isFavorite ? ++accum : accum, 0)
  },
  {
    id: `repeating`,
    name: `Repeating`,
    tasksNumber: tasksData.reduce((accum, taskData) => {
      return [...taskData.repeatingDays].some((dayData) => dayData[1]) ? ++accum : accum;
    }, 0)
  },
  {
    id: `tags`,
    name: `Tags`,
    tasksNumber: tasksData.reduce((accum, taskData) => accum.add(...taskData.hashtags), new Set()).size
  },
  {
    id: `archive`,
    name: `Archive`,
    tasksNumber: 0
  }
];

export {tasksData, filtersData};
