import * as data from './data.js';
import Filter from './filter.js';
import Task from './task.js';
import {getRandomInteger} from './utils.js';

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
 * HTML класс фильтра.
 * @constant
 * @type {string}
 */
const FILTER_CLASS = `.filter__input`;

/**
 * HTML класс задачи.
 * @constant
 * @type {string}
 */
const TASK_CLASS = `.card`;

/**
 * HTML класс кнопки редактирования задачи.
 * @constant
 * @type {string}
 */
const TASK_EDIT_BUTTON_CLASS = `.card__btn--edit`;

/**
 * HTML класс кнопки сохранения задачи.
 * @constant
 * @type {string}
 */
const TASK_SAVE_BUTTON_CLASS = `.card__save`;

/**
 * HTML класс кнопки удаления задачи.
 * @constant
 * @type {string}
 */
const TASK_DELETE_BUTTON_CLASS = `.card__delete`;

// Хранилище отрисованных задач.
const tasksStorage = [];

class Application {
  /**
   * Инициализация приложения.
   *
   * @method start
   */
  static start() {
    this._renderFilters(data.filters);
    this._renderTasks(data.tasks);

    this._subscribeFilterActions();
    this._subscribeTaskActions();
  }

  /**
   * Рендер фильтров.
   *
   * @method _renderFilters
   * @param {array} filtersData — данные фильтров
   */
  static _renderFilters(filtersData) {
    const filtersStorage = filtersData.map((filterData) => new Filter(filterData).view);
    FILTERS_CONTAINER.append(...filtersStorage);
  }

  /**
   * Рендер карт с задачами.
   *
   * @method _renderTasks
   * @param {array} tasksData — данные задач
   * @param {boolean} shouldClearContainer — запустить предварительную очистку контейнера? true || false
   */
  static _renderTasks(tasksData, shouldClearContainer = false) {
    if (shouldClearContainer) {
      tasksStorage.length = 0;
      TASKS_CONTAINER.innerHTML = ``;
    }

    for (const taskData of tasksData) {
      tasksStorage.push(new Task(taskData));
    }

    TASKS_CONTAINER.append(...tasksStorage.map((task) => task.view));
  }

  /**
   * Навешивание слушателей событий на фильтры.
   * @method _subscribeFilterActions
   */
  static _subscribeFilterActions() {
    FILTERS_CONTAINER.addEventListener(`change`, (evt) => {
      if (evt.target.closest(FILTER_CLASS)) {
        const tasksListRandomStartPoint = getRandomInteger(1, data.tasks.length);
        const filtredTasksData = data.tasks.slice(tasksListRandomStartPoint);

        this._renderTasks(filtredTasksData, true);
      }
    });
  }

  /**
   * Навешивание слушателей событий на фильтры.
   * @method _subscribeTaskActions
   */
  static _subscribeTaskActions() {
    TASKS_CONTAINER.addEventListener(`click`, (evt) => {
      const currentTask = evt.target.closest(TASK_CLASS);

      if (currentTask) {
        const currentTaskID = +currentTask.dataset.id;
        if (!Number.isInteger(currentTaskID)) {
          throw new Error(`Required task identificator is missing`);
        }

        if (evt.target.closest(TASK_EDIT_BUTTON_CLASS)) {
          tasksStorage.find((task) => task.id === currentTaskID).changeMode();
          return;
        }

        if (evt.target.closest(TASK_SAVE_BUTTON_CLASS)) {
          evt.preventDefault();
          return;
        }

        if (evt.target.closest(TASK_DELETE_BUTTON_CLASS)) {
          evt.preventDefault();
          return;
        }

        return;
      }
    });
  }
}

export default Application;
