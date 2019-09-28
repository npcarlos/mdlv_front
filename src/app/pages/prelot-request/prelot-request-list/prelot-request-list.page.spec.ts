import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelotRequestListPage } from './prelot-request-list.page';

describe('PrelotRequestListPage', () => {
  let component: PrelotRequestListPage;
  let fixture: ComponentFixture<PrelotRequestListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrelotRequestListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrelotRequestListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
