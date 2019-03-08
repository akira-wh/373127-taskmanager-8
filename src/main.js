import {tasksData, filtersData} from './data.js';
import renderFilters from './render-filters.js';
import renderTasks from './render-tasks.js';

// Первичный рендер фильтров и задач.
renderFilters(filtersData);
renderTasks(tasksData);

