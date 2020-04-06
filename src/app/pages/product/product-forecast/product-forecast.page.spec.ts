import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductForecastPage } from './product-forecast.page';

describe('ProductForecastPage', () => {
  let component: ProductForecastPage;
  let fixture: ComponentFixture<ProductForecastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductForecastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductForecastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
