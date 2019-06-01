import { NgModule } from '@angular/core';

import { NgbdSharedModule } from '../../shared';
import { ComponentWrapper } from '../../shared/component-wrapper/component-wrapper.component';
import { NgbdComponentsSharedModule, NgbdDemoList } from '../shared';
import { NgbdApiPage } from '../shared/api-page/api.component';
import { NgbdExamplesPage } from '../shared/examples-page/examples.component';
import { NgbdTimepickerAdapter } from './demos/adapter/timepicker-adapter';
import { NgbdTimepickerAdapterModule } from './demos/adapter/timepicker-adapter.module';
import { NgbdTimepickerBasic } from './demos/basic/timepicker-basic';
import { NgbdTimepickerBasicModule } from './demos/basic/timepicker-basic.module';
import { NgbdTimepickerConfig } from './demos/config/timepicker-config';
import { NgbdTimepickerConfigModule } from './demos/config/timepicker-config.module';
import { NgbdTimepickerMeridian } from './demos/meridian/timepicker-meridian';
import { NgbdTimepickerMeridianModule } from './demos/meridian/timepicker-meridian.module';
import { NgbdTimepickerSeconds } from './demos/seconds/timepicker-seconds';
import { NgbdTimepickerSecondsModule } from './demos/seconds/timepicker-seconds.module';
import { NgbdTimepickerSpinners } from './demos/spinners/timepicker-spinners';
import { NgbdTimepickerSpinnersModule } from './demos/spinners/timepicker-spinners.module';
import { NgbdTimepickerSteps } from './demos/steps/timepicker-steps';
import { NgbdTimepickerStepsModule } from './demos/steps/timepicker-steps.module';
import { NgbdTimepickerValidation } from './demos/validation/timepicker-validation';
import { NgbdTimepickerValidationModule } from './demos/validation/timepicker-validation.module';

const DEMOS = {
  basic: {
    title: 'Timepicker',
    type: NgbdTimepickerBasic,
    code: require('!!raw-loader!./demos/basic/timepicker-basic'),
    markup: require('!!raw-loader!./demos/basic/timepicker-basic.html')
  },
  meridian: {
    title: 'Meridian',
    type: NgbdTimepickerMeridian,
    code: require('!!raw-loader!./demos/meridian/timepicker-meridian'),
    markup: require('!!raw-loader!./demos/meridian/timepicker-meridian.html')
  },
  seconds: {
    title: 'Seconds',
    type: NgbdTimepickerSeconds,
    code: require('!!raw-loader!./demos/seconds/timepicker-seconds'),
    markup: require('!!raw-loader!./demos/seconds/timepicker-seconds.html')
  },
  spinners: {
    title: 'Spinners',
    type: NgbdTimepickerSpinners,
    code: require('!!raw-loader!./demos/spinners/timepicker-spinners'),
    markup: require('!!raw-loader!./demos/spinners/timepicker-spinners.html')
  },
  steps: {
    title: 'Custom steps',
    type: NgbdTimepickerSteps,
    code: require('!!raw-loader!./demos/steps/timepicker-steps'),
    markup: require('!!raw-loader!./demos/steps/timepicker-steps.html')
  },
  validation: {
    title: 'Custom validation',
    type: NgbdTimepickerValidation,
    code: require('!!raw-loader!./demos/validation/timepicker-validation'),
    markup: require('!!raw-loader!./demos/validation/timepicker-validation.html')
  },
  adapter: {
    title: 'Custom time adapter',
    type: NgbdTimepickerAdapter,
    code: require('!!raw-loader!./demos/adapter/timepicker-adapter'),
    markup: require('!!raw-loader!./demos/adapter/timepicker-adapter.html')
  },
  config: {
    title: 'Global configuration of timepickers',
    type: NgbdTimepickerConfig,
    code: require('!!raw-loader!./demos/config/timepicker-config'),
    markup: require('!!raw-loader!./demos/config/timepicker-config.html')
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapper,
    children: [
      { path: 'examples', component: NgbdExamplesPage },
      { path: 'api', component: NgbdApiPage }
    ]
  }
];

@NgModule({
  imports: [
    NgbdSharedModule,
    NgbdComponentsSharedModule,
    NgbdTimepickerBasicModule,
    NgbdTimepickerMeridianModule,
    NgbdTimepickerSecondsModule,
    NgbdTimepickerSpinnersModule,
    NgbdTimepickerStepsModule,
    NgbdTimepickerValidationModule,
    NgbdTimepickerAdapterModule,
    NgbdTimepickerConfigModule
  ]
})
export class NgbdTimepickerModule {
  constructor(demoList: NgbdDemoList) {
    demoList.register('timepicker', DEMOS);
  }
}
