import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNewPage } from './client-new.page';

describe('ClientNewPage', () => {
  let component: ClientNewPage;
  let fixture: ComponentFixture<ClientNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
