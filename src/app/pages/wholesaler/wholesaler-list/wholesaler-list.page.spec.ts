import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerListPage } from './wholesaler-list.page';

describe('WholesalerListPage', () => {
  let component: WholesalerListPage;
  let fixture: ComponentFixture<WholesalerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
