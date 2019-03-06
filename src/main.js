'use strict';

/**
 * DOM-контейнер фильтров.
 * @constant
 * @type {node}
 */
const FILTERS_CONTAINER = document.querySelector(`.main__filter`);

/**
 * DOM-контейнер задач.
 * @constant
 * @type {node}
 */
const TASKS_CONTAINER = document.querySelector(`.board__tasks`);

/**
 * Получение рандомного целого числа от MIN до MAX (обе границы участвуют).
 *
 * @function getRandomInteger
 * @param {number} min — минимально допустимое число
 * @param {number} max — максимально допустимое число
 * @return {number} — рандомное целое число
 */
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Данные задач.
const availableTaskColors = [
  `black`,
  `yellow`,
  `blue`,
  `green`,
  `pink`
];

let tasksTempCounter = 1;
const tasksData = new Array(40).fill()
                               .map(() => {
                                 return {
                                   id: tasksTempCounter++,
                                   title: `Start typing your text here...`,
                                   color: availableTaskColors[getRandomInteger(0, availableTaskColors.length - 1)],
                                   deadline: new Date(
                                     Date.now() + getRandomInteger(-2592000000, 2592000000)
                                   ),
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

/**
 * Создание DOM-элемента по шаблону HTML разметки.
 *
 * @function createElement
 * @param {string} markup — строка с HTML разметкой
 * @return {node} — готовый DOM-элемент
 */
const createElement = (markup) => {
  const element = document.createElement(`template`);
  element.innerHTML = markup.trim();

  return element.content;
};

/**
 * Создание DOM-элемента фильтра.
 *
 * @function createFilter
 * @param {object} filterData — данные фильтра (id, название, etc)
 * @return {node} — готовый фильтр
 */
const createFilter = (filterData) => {
  const markup = `
    <input class="filter__input visually-hidden"
               id="filter__${filterData.id}"
               type="radio"
               name="filter"
               ${filterData.name === `All` ? `checked` : ``}
               ${filterData.tasksNumber > 0 ? `` : `disabled`}/>

    <label class="filter__label" for="filter__${filterData.id}">
      ${filterData.name} <span class="filter__${filterData.id}-count">${filterData.tasksNumber}</span>
    </label>`;

  return createElement(markup);
};

/**
 * Создание DOM-элемента задачи.
 *
 * @function createTask
 * @param {object} taskData — данные задачи (id, название, цветовая категория, etc)
 * @return {node} — готовая задача
 */
const createTask = (taskData) => {
  const markup = `
    <article class="card card--${taskData.color}">
      <form class="card__form" method="get">
        <div class="card__inner">

          <div class="card__control">
            <button class="card__btn card__btn--edit" type="button">edit</button>
            <button class="card__btn card__btn--archive" type="button">archive</button>
            <button class="card__btn card__btn--favorites card__btn--disabled" type="button">favorites</button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <label>
              <textarea class="card__text"
                        placeholder="Start typing your text here..."
                        name="text">${taskData.title}</textarea>
            </label>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <button class="card__date-deadline-toggle" type="button">
                  date: <span class="card__date-status">${taskData.deadline ? `yes` : `no`}</span>
                </button>

                <fieldset class="card__date-deadline">
                  <label class="card__input-deadline-wrap">
                    <input class="card__date"
                           type="text"
                           placeholder="23 September"
                           name="date"
                           value="${new Array(1)
                                          .fill()
                                          .map(() => {
                                            if (!taskData.deadline) {
                                              return ``;
                                            }

                                            const date = taskData.deadline;
                                            const outputSettings = {
                                              locale: `en-US`,
                                              format: {
                                                day: `numeric`,
                                                month: `long`
                                              }
                                            };

                                            // Стандартный US формат `June 11` ==> модифицированный формат `11 June`
                                            return date.toLocaleString(outputSettings.locale, outputSettings.format)
                                                       .split(` `)
                                                       .reverse()
                                                       .join(` `);
                                          })
                                          .join(``)
                                  }"/>
                  </label>

                  <label class="card__input-deadline-wrap">
                    <input class="card__time"
                           type="text"
                           placeholder="11:15 PM"
                           name="time"
                           value="${new Array(1)
                                          .fill()
                                          .map(() => {
                                            if (!taskData.deadline) {
                                              return ``;
                                            }

                                            const time = taskData.deadline;
                                            const outputSettings = {
                                              locale: `en-US`,
                                              format: {
                                                hour12: true,
                                                hour: `numeric`,
                                                minute: `numeric`
                                              }
                                            };

                                            // US формат `11:00 AM`.
                                            return time.toLocaleString(outputSettings.locale, outputSettings.format);
                                          })
                                          .join(``)
                                  }"/>
                  </label>
                </fieldset>

                <button class="card__repeat-toggle" type="button">
                  repeat:<span class="card__repeat-status">${
                    [...taskData.repeatingDays].some((dayData) => dayData[1]) ? `yes` : `no`
                  }</span>
                </button>

                <fieldset class="card__repeat-days">
                  <div class="card__repeat-days-inner">
                    ${[...taskData.repeatingDays].reduce((markup, dayData, i) => {
                      const day = dayData[0]; // день недели.
                      const daySerialNo = i + 1; // порядковый номер дня недели (1 - 7).
                      const isTaskRepeatedToday = dayData[1]; // в этот день задача повторяется? true || false.

                      return markup + `
                      <input class="visually-hidden card__repeat-day-input"
                             id="repeat-${day}-${daySerialNo}"
                             type="checkbox"
                             name="repeat"
                             value="${day}"
                             ${isTaskRepeatedToday ? `checked` : ``}/>
                      <label class="card__repeat-day" for="repeat-${day}-${daySerialNo}">${day}</label>`;
                    }, ``)}
                  </div>
                </fieldset>
              </div>

              <div class="card__hashtag">
                <div class="card__hashtag-list">
                  ${[...taskData.hashtags].reduce((markup, hashtag) => {
                    return markup + `
                      <span class="card__hashtag-inner">
                        <input class="card__hashtag-hidden-input"
                               type="hidden"
                               name="hashtag"
                               value="${hashtag}"/>
                        <button class="card__hashtag-name" type="button">#${hashtag}</button>
                        <button class="card__hashtag-delete" type="button">delete</button>
                      </span>`;
                  }, ``)}
                </div>

                <label>
                  <input class="card__hashtag-input"
                         type="text"
                         name="hashtag-input"
                         placeholder="Type new hashtag here"/>
                </label>
              </div>
            </div>

            <label class="card__img-wrap">
              <input class="card__img-input visually-hidden"
                     type="file"
                     name="img"/>
              <img class="card__img"
                   src="${taskData.illustrationURL}"
                   alt="task picture"/>
            </label>

            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
                ${availableTaskColors.reduce((markup, availableColor) => {
                  return markup + `
                    <input class="card__color-input card__color-input--${availableColor} visually-hidden"
                           id="color-${availableColor}-${taskData.id}"
                           type="radio"
                           name="color"
                           value="${availableColor}"
                           ${availableColor === taskData.color ? `checked` : ``}/>
                    <label class="card__color card__color--${availableColor}"
                           for="color-${availableColor}-${taskData.id}">${availableColor}</label>`;
                }, ``)}
              </div>
            </div>
          </div>

          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>

        </div>
      </form>
    </article>`;

   return createElement(markup);
};

// Рендер фильтров.
const filtersStorage = filtersData.map((filterData) => createFilter(filterData));
FILTERS_CONTAINER.append(...filtersStorage);

// При смене фильтра ==> перерисовка списка задач.
FILTERS_CONTAINER.addEventListener(`change`, (evt) => {
  const target = evt.target;

  if (target.closest(`.filter__input`)) {
    const randomTasksStartCue = getRandomInteger(0, tasksData.length - 1);

    const tasksStorage = tasksData.slice(randomTasksStartCue)
                                  .map((taskData) => createTask(taskData));

    TASKS_CONTAINER.innerHTML = ``;
    TASKS_CONTAINER.append(...tasksStorage);
  }
});

// Рендер задач.
const tasksStorage = tasksData.slice(0, 7)
                              .map((taskData) => createTask(taskData));

TASKS_CONTAINER.append(...tasksStorage);
