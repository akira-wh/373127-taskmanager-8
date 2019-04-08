import GenericView from './generic-view.js';

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
  // Индекс ответа на "В этот день задача повторяется?"
  IS_TASK_REPEATED: 1
};

/**
 * HTML класс задачи.
 * @constant
 * @type {string}
 */
const TASK_CLASS = `.card`;

/**
 * Класс-модификатор состояния редактирования задачи.
 * @constant
 * @type {string}
 */
const TASK_EDIT_MODIFIER = `card--edit`;

/**
 * Задача.
 * @class
 */
class Task extends GenericView {
  /**
   * @param {object} taskData — данные задачи (id, название, цветовая категория, etc)
   */
  constructor(taskData) {
    super();

    this._taskData = taskData;
    this._taskID = this._taskData.id;

    this._view = this._node;
    this._task = this._view.querySelector(TASK_CLASS);
  }

  get _markup() {
    const deadlineDate = ``.replace(``, () => {
      if (!this._taskData.deadline) {
        return ``;
      }

      const outputSettings = {
        locale: `en-US`,
        format: {
          day: `numeric`,
          month: `long`
        }
      };

      // Стандартный US формат `June 11` ==> модифицированный формат `11 June`
      return this._taskData.deadline.toLocaleString(outputSettings.locale, outputSettings.format)
                                    .split(` `)
                                    .reverse()
                                    .join(` `);
    });

    const deadlineTime = ``.replace(``, () => {
      if (!this._taskData.deadline) {
        return ``;
      }

      const outputSettings = {
        locale: `en-US`,
        format: {
          hour12: true,
          hour: `numeric`,
          minute: `numeric`
        }
      };

      // US формат `11:00 AM`.
      return this._taskData.deadline.toLocaleString(outputSettings.locale, outputSettings.format);
    });

    const taskRepeatStatus = [...this._taskData.repeatingDays].some((dayData) => {
      return dayData[DAY_DATA_INDEX.IS_TASK_REPEATED] ? `yes` : `no`;
    });

    const taskRepeatingDays = [...this._taskData.repeatingDays].reduce((markupFragment, dayData, i) => {
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
    }, ``);

    const taskHashtags = [...this._taskData.hashtags].reduce((markupFragment, hashtag) => {
      return markupFragment + `
        <span class="card__hashtag-inner">
          <input class="card__hashtag-hidden-input"
                 type="hidden"
                 name="hashtag"
                 value="${hashtag}"/>
          <button class="card__hashtag-name" type="button">#${hashtag}</button>
          <button class="card__hashtag-delete" type="button">delete</button>
        </span>`;
    }, ``);

    const taskColors = TASK_DECORATION_COLORS.reduce((markupFragment, decorationColor) => {
      return markupFragment + `
        <input class="card__color-input card__color-input--${decorationColor} visually-hidden"
               id="color-${decorationColor}-${this._taskData.id}"
               type="radio"
               name="color"
               value="${decorationColor}"
               ${decorationColor === this._taskData.color ? `checked` : ``}/>
        <label class="card__color card__color--${decorationColor}"
               for="color-${decorationColor}-${this._taskData.id}">${decorationColor}</label>`;
    }, ``);

    return `
      <article class="card card--${this._taskData.color}" data-id="${this._taskData.id}">
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
                          name="text">${this._taskData.title}</textarea>
              </label>
            </div>

            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  <button class="card__date-deadline-toggle" type="button">
                    date: <span class="card__date-status">${this._taskData.deadline ? `yes` : `no`}</span>
                  </button>

                  <fieldset class="card__date-deadline">
                    <label class="card__input-deadline-wrap">
                      <input class="card__date"
                             type="text"
                             placeholder="23 September"
                             name="date"
                             value="${deadlineDate}"/>
                    </label>

                    <label class="card__input-deadline-wrap">
                      <input class="card__time"
                             type="text"
                             placeholder="11:15 PM"
                             name="time"
                             value="${deadlineTime}"/>
                    </label>
                  </fieldset>

                  <button class="card__repeat-toggle" type="button">
                    repeat:<span class="card__repeat-status">${taskRepeatStatus}</span>
                  </button>

                  <fieldset class="card__repeat-days">
                    <div class="card__repeat-days-inner">${taskRepeatingDays}</div>
                  </fieldset>
                </div>

                <div class="card__hashtag">
                  <div class="card__hashtag-list">${taskHashtags}</div>
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
                     src="${this._taskData.illustrationURL}"
                     alt="task picture"/>
              </label>

              <div class="card__colors-inner">
                <h3 class="card__colors-title">Color</h3>
                <div class="card__colors-wrap">${taskColors}</div>
              </div>
            </div>

            <div class="card__status-btns">
              <button class="card__save" type="submit">save</button>
              <button class="card__delete" type="button">delete</button>
            </div>

          </div>
        </form>
      </article>`;
  }

  /**
   * Получение идентификатора задачи.
   * @return {number} — id
   */
  get id() {
    return this._taskID;
  }

  /**
   * Смена режима отображения задачи (режим просмотра || режим редактирования).
   *
   * @method changeMode
   */

  changeMode() {
    this._task.classList.toggle(TASK_EDIT_MODIFIER);
  }
}

export default Task;
