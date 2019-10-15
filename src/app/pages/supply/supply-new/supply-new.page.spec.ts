import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyNewPage } from './supply-new.page';

describe('SupplyNewPage', () => {
  let component: SupplyNewPage;
  let fixture: ComponentFixture<SupplyNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
