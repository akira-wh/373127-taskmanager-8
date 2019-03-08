import {tasksData} from './data.js';
import {getRandomInteger, createElement} from './utils.js';
import renderTasks from './render-tasks.js';

/**
 * DOM-контейнер фильтров.
 * @constant
 * @type {node}
 */
const FILTERS_CONTAINER = document.querySelector(`.main__filter`);

/**
 * HTML класс фильтра.
 * @constant
 * @type {string}
 */
const FILTER_CLASS = `.filter__input`;

/**
 * Состояние, когда в конкретной категории нет задач.
 * @constant
 * @type {number}
 */
const NO_TASKS = 0;

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
               ${filterData.tasksNumber === NO_TASKS ? `disabled` : ``}/>

    <label class="filter__label" for="filter__${filterData.id}">
      ${filterData.name} <span class="filter__${filterData.id}-count">${filterData.tasksNumber}</span>
    </label>`;

  return createElement(markup);
};

/**
 * Рендер всех фильтров с обработчиком переключения.
 *
 * @function renderFilters
 * @param {array} filtersData — данные фильтров
 */
const renderFilters = (filtersData) => {
  const filtersStorage = filtersData.map((filterData) => createFilter(filterData));
  FILTERS_CONTAINER.append(...filtersStorage);

  FILTERS_CONTAINER.addEventListener(`change`, (evt) => {
    const target = evt.target;

    if (target.closest(FILTER_CLASS)) {
      const randomTasksListStartCue = getRandomInteger(1, tasksData.length);
      const filtredTasksData = tasksData.slice(randomTasksListStartCue);

      renderTasks(filtredTasksData, true);
    }
  });
};

export default renderFilters;
