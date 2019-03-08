import {createElement} from './utils.js';

/**
 * DOM-контейнер задач.
 * @constant
 * @type {node}
 */
const TASKS_CONTAINER = document.querySelector(`.board__tasks`);

/**
 * Декоративные цветовые схемы задач.
 * @constant
 * @type {array}
 */
const TASK_DECORATION_COLORS = [
  `black`,
  `yellow`,
  `blue`,
  `green`,
  `pink`
];

/**
 * Расшифровка индексов массива при разборе мапы "В какие дни повторяется задача".
 * @enum
 * @constant
 * @type {object}
 */
const DAY_DATA_INDEX = {
  // Индекс название дня недели.
  NAME: 0,
  // Индекс ответа на тему "В этот день задача повторяется?"
  IS_TASK_REPEATED: 1
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
                                          .join(``)}"/>
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
                                          .join(``)}"/>
                  </label>
                </fieldset>

                <button class="card__repeat-toggle" type="button">
                  repeat:<span class="card__repeat-status">
                  ${[...taskData.repeatingDays]
                                          .some((dayData) => dayData[DAY_DATA_INDEX.IS_TASK_REPEATED]) ? `yes` : `no`}
                  </span>
                </button>

                <fieldset class="card__repeat-days">


                  <div class="card__repeat-days-inner">
  ${[...taskData.repeatingDays].reduce((markupFragment, dayData, i) => {
    const dayName = dayData[DAY_DATA_INDEX.NAME];
    const dayNumberInWeek = i + 1;
    const isTaskRepeated = dayData[DAY_DATA_INDEX.IS_TASK_REPEATED];

    return markupFragment + `
      <input class="visually-hidden card__repeat-day-input"
             id="repeat-${dayName}-${dayNumberInWeek}"
             type="checkbox"
             name="repeat"
             value="${dayName}"
             ${isTaskRepeated ? `checked` : ``}/>
      <label class="card__repeat-day" for="repeat-${dayName}-${dayNumberInWeek}">${dayName}</label>`;
  }, ``)}
                  </div>


                </fieldset>
              </div>

              <div class="card__hashtag">
                <div class="card__hashtag-list">
  ${[...taskData.hashtags].reduce((markupFragment, hashtag) => {
    return markupFragment + `
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

  ${TASK_DECORATION_COLORS.reduce((markupFragment, decorationColor) => {
    return markupFragment + `
      <input class="card__color-input card__color-input--${decorationColor} visually-hidden"
             id="color-${decorationColor}-${taskData.id}"
             type="radio"
             name="color"
             value="${decorationColor}"
             ${decorationColor === taskData.color ? `checked` : ``}/>
      <label class="card__color card__color--${decorationColor}"
             for="color-${decorationColor}-${taskData.id}">${decorationColor}</label>`;
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

/**
 * Рендер задач.
 *
 * @function renderTasks
 * @param {array} tasksData — данные задач
 * @param {boolean} shouldClearContainer — очищать контейнер перед рендером? true || false
 */
const renderTasks = (tasksData, shouldClearContainer = false) => {
  const tasksStorage = tasksData.map((taskData) => createTask(taskData));

  if (shouldClearContainer) {
    TASKS_CONTAINER.innerHTML = ``;
  }

  TASKS_CONTAINER.append(...tasksStorage);
};

export default renderTasks;
