import { NgModule } from '@angular/core';

import { NgbdSharedModule } from '../../shared';
import { ComponentWrapper } from '../../shared/component-wrapper/component-wrapper.component';
import { NgbdComponentsSharedModule, NgbdDemoList } from '../shared';
import { NgbdApiPage } from '../shared/api-page/api.component';
import { NgbdExamplesPage } from '../shared/examples-page/examples.component';
import { NgbdCarouselBasic } from './demos/basic/carousel-basic';
import { NgbdCarouselBasicModule } from './demos/basic/carousel-basic.module';
import { NgbdCarouselConfig } from './demos/config/carousel-config';
import { NgbdCarouselConfigModule } from './demos/config/carousel-config.module';
import { NgbdCarouselNavigation } from './demos/navigation/carousel-navigation';
import { NgbdCarouselNavigationModule } from './demos/navigation/carousel-navigation.module';

const DEMOS = {
  basic: {
    title: 'Carousel',
    type: NgbdCarouselBasic,
    code: require('!!raw-loader!./demos/basic/carousel-basic'),
    markup: require('!!raw-loader!./demos/basic/carousel-basic.html')
  },
  navigation: {
    title: 'Navigation arrows and indicators',
    type: NgbdCarouselNavigation,
    code: require('!!raw-loader!./demos/navigation/carousel-navigation'),
    markup: require('!!raw-loader!./demos/navigation/carousel-navigation.html')
  },
  config: {
    title: 'Global configuration of carousels',
    type: NgbdCarouselConfig,
    code: require('!!raw-loader!./demos/config/carousel-config'),
    markup: require('!!raw-loader!./demos/config/carousel-config.html')
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
    NgbdCarouselBasicModule,
    NgbdCarouselConfigModule,
    NgbdCarouselNavigationModule
  ]
})
export class NgbdCarouselModule {
  constructor(demoList: NgbdDemoList) {
    demoList.register('carousel', DEMOS);
  }
}
