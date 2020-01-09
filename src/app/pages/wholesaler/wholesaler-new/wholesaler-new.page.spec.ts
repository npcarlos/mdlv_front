import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerNewPage } from './wholesaler-new.page';

describe('WholesalerNewPage', () => {
  let component: WholesalerNewPage;
  let fixture: ComponentFixture<WholesalerNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
