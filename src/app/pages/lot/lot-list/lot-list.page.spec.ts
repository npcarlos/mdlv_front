import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotListPage } from './lot-list.page';

describe('LotListPage', () => {
  let component: LotListPage;
  let fixture: ComponentFixture<LotListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
