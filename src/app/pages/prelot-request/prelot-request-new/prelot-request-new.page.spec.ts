import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelotRequestNewPage } from './prelot-request-new.page';

describe('PrelotRequestNewPage', () => {
  let component: PrelotRequestNewPage;
  let fixture: ComponentFixture<PrelotRequestNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrelotRequestNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrelotRequestNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
