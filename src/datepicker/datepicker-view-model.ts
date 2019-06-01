import {NgbDate} from './ngb-date';
import {NgbDateStruct} from './ngb-date-struct';
import {DayTemplateContext} from './datepicker-day-template-context';

export type NgbMarkDisabled = (date: NgbDateStruct, current: {year: number, month: number}) => boolean;
export type NgbDayTemplateData = (date: NgbDateStruct, current: {year: number, month: number}) => any;

export type DayViewModel = {
  date: NgbDate,
  context: DayTemplateContext,
  tabindex: number,
  ariaLabel: string,
  hidden: boolean
};

export type WeekViewModel = {
  number: number,
  days: DayViewModel[],
  collapsed: boolean
};

export type MonthViewModel = {
  firstDate: NgbDate,
  lastDate: NgbDate,
  number: number,
  year: number,
  weeks: WeekViewModel[],
  weekdays: number[]
};

// clang-format off
export type DatepickerViewModel = {
  dayTemplateData?: NgbDayTemplateData,
  disabled: boolean,
  displayMonths: number,
  firstDate?: NgbDate,
  firstDayOfWeek: number,
  focusDate?: NgbDate,
  focusVisible: boolean,
  lastDate?: NgbDate,
  markDisabled?: NgbMarkDisabled,
  maxDate?: NgbDate,
  minDate?: NgbDate,
  months: MonthViewModel[],
  navigation: 'select' | 'arrows' | 'none',
  outsideDays: 'visible' | 'collapsed' | 'hidden',
  prevDisabled: boolean,
  nextDisabled: boolean,
  selectBoxes: {
    years: number[],
    months: number[]
  },
  selectedDate: NgbDate
};
// clang-format on

export enum NavigationEvent {
  PREV,
  NEXT
}
