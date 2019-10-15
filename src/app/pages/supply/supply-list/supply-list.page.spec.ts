import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyListPage } from './supply-list.page';

describe('SupplyListPage', () => {
  let component: SupplyListPage;
  let fixture: ComponentFixture<SupplyListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
