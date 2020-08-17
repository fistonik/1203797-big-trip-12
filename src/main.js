import {createTripCostTemplate} from './view/cost';
import {createTripInfoTemplate} from './view/info';
import {createMenuTemplate} from './view/menu';
import {createFilterTemplate} from './view/filter';
import {createDaysContainerTemplate} from './view/container';
import {createDayTemplate} from './view/day';
import {createEventTemplate} from './view/event';
import {createSortTemplate} from './view/sort';
import {createFormEventTemplate} from './view/form-event';

const TRIP_COUNT = 3;

const render = (container, template, position) => {
  container.insertAdjacentHTML(position, template);
};

const bodyElement = document.querySelector(`.page-body`);
const headerElement = bodyElement.querySelector(`.page-header`);
const mainElement = bodyElement.querySelector(`.page-main`);
const tripMainElement = headerElement.querySelector(`.trip-main`);
const tripControlElement = tripMainElement.querySelector(`.trip-controls`);
const tripEventsElement = mainElement.querySelector(`.trip-events`);

render(tripMainElement, createTripInfoTemplate(), `afterbegin`);
const tripInfoElement = tripMainElement.querySelector(`.trip-info`);
render(tripInfoElement, createTripCostTemplate(), `beforeend`);

render(tripControlElement, createMenuTemplate(), `beforeend`);
render(tripControlElement, createFilterTemplate(), `beforeend`);

render(tripEventsElement, createSortTemplate(), `beforeend`);
render(tripEventsElement, createFormEventTemplate(), `beforeend`);

render(tripEventsElement, createDaysContainerTemplate(), `beforeend`);
const tripDaysElement = tripEventsElement.querySelector(`.trip-days`);
render(tripDaysElement, createDayTemplate(), `beforeend`);
const tripEventsListElement = tripDaysElement.querySelector(`.trip-events__list`);

for (let i = 0; i < TRIP_COUNT; i++) {
  render(tripEventsListElement, createEventTemplate(), `beforeend`);
}
