import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotNewPage } from './lot-new.page';

describe('LotNewPage', () => {
  let component: LotNewPage;
  let fixture: ComponentFixture<LotNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
