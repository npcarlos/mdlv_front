import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelotRequestDetalisPage } from './prelot-request-detalis.page';

describe('PrelotRequestDetalisPage', () => {
  let component: PrelotRequestDetalisPage;
  let fixture: ComponentFixture<PrelotRequestDetalisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrelotRequestDetalisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrelotRequestDetalisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
