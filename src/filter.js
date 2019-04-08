import GenericView from './generic-view.js';

/**
 * Состояние, когда в конкретной категории нет задач.
 * @constant
 * @type {number}
 */
const NO_TASKS = 0;

/**
 * Фильтр задач.
 * @class
 */
class Filter extends GenericView {
  constructor(filterData) {
    super();

    this._filterData = filterData;

    this._view = this._node;
  }

  get _markup() {
    return `
      <input class="filter__input visually-hidden"
                 id="filter__${this._filterData.id}"
                 type="radio"
                 name="filter"
                 ${this._filterData.name === `All` ? `checked` : ``}
                 ${this._filterData.tasksNumber === NO_TASKS ? `disabled` : ``}/>

      <label class="filter__label" for="filter__${this._filterData.id}">
        ${this._filterData.name}
        <span class="filter__${this._filterData.id}-count">${this._filterData.tasksNumber}</span>
      </label>`;
  }
}

export default Filter;
