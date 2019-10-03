import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsListPage } from './stats-list.page';

describe('StatsListPage', () => {
  let component: StatsListPage;
  let fixture: ComponentFixture<StatsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
