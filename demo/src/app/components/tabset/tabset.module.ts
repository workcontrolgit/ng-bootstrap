import { NgModule } from '@angular/core';

import { NgbdSharedModule } from '../../shared';
import { ComponentWrapper } from '../../shared/component-wrapper/component-wrapper.component';
import { NgbdComponentsSharedModule, NgbdDemoList } from '../shared';
import { NgbdApiPage } from '../shared/api-page/api.component';
import { NgbdExamplesPage } from '../shared/examples-page/examples.component';
import { NgbdTabsetBasic } from './demos/basic/tabset-basic';
import { NgbdTabsetBasicModule } from './demos/basic/tabset-basic.module';
import { NgbdTabsetConfig } from './demos/config/tabset-config';
import { NgbdTabsetConfigModule } from './demos/config/tabset-config.module';
import { NgbdTabsetJustify } from './demos/justify/tabset-justify';
import { NgbdTabsetJustifyModule } from './demos/justify/tabset-justify.module';
import { NgbdTabsetOrientation } from './demos/orientation/tabset-orientation';
import { NgbdTabsetOrientationModule } from './demos/orientation/tabset-orientation.module';
import { NgbdTabsetPills } from './demos/pills/tabset-pills';
import { NgbdTabsetPillsModule } from './demos/pills/tabset-pills.module';
import { NgbdTabsetPreventChangeModule } from './demos/preventchange/tabset-prevent-change.module';
import { NgbdTabsetPreventchange } from './demos/preventchange/tabset-preventchange';
import { NgbdTabsetSelectbyid } from './demos/selectbyid/tabset-selectbyid';
import { NgbdTabsetSelectbyidModule } from './demos/selectbyid/tabset-selectbyid.module';

const DEMOS = {
  basic: {
    title: 'Tabset',
    type: NgbdTabsetBasic,
    code: require('!!raw-loader!./demos/basic/tabset-basic'),
    markup: require('!!raw-loader!./demos/basic/tabset-basic.html')
  },
  pills: {
    title: 'Pills',
    type: NgbdTabsetPills,
    code: require('!!raw-loader!./demos/pills/tabset-pills'),
    markup: require('!!raw-loader!./demos/pills/tabset-pills.html')
  },
  selectbyid: {
    title: 'Select an active tab by id',
    type: NgbdTabsetSelectbyid,
    code: require('!!raw-loader!./demos/selectbyid/tabset-selectbyid'),
    markup: require('!!raw-loader!./demos/selectbyid/tabset-selectbyid.html')
  },
  preventchange: {
    title: 'Prevent tab change',
    type: NgbdTabsetPreventchange,
    code: require('!!raw-loader!./demos/preventchange/tabset-preventchange'),
    markup: require('!!raw-loader!./demos/preventchange/tabset-preventchange.html')
  },
  justify: {
    title: 'Nav justification',
    type: NgbdTabsetJustify,
    code: require('!!raw-loader!./demos/justify/tabset-justify'),
    markup: require('!!raw-loader!./demos/justify/tabset-justify.html')
  },
  orientation: {
    title: 'Nav orientation',
    type: NgbdTabsetOrientation,
    code: require('!!raw-loader!./demos/orientation/tabset-orientation'),
    markup: require('!!raw-loader!./demos/orientation/tabset-orientation.html')
  },
  config: {
    title: 'Global configuration of tabs',
    type: NgbdTabsetConfig,
    code: require('!!raw-loader!./demos/config/tabset-config'),
    markup: require('!!raw-loader!./demos/config/tabset-config.html')
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
    NgbdTabsetBasicModule,
    NgbdTabsetPillsModule,
    NgbdTabsetPreventChangeModule,
    NgbdTabsetSelectbyidModule,
    NgbdTabsetConfigModule,
    NgbdTabsetJustifyModule,
    NgbdTabsetOrientationModule
  ]
})
export class NgbdTabsetModule {
  constructor(demoList: NgbdDemoList) {
    demoList.register('tabset', DEMOS);
  }
}
