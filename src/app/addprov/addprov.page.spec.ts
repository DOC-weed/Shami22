import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprovPage } from './addprov.page';

describe('AddprovPage', () => {
  let component: AddprovPage;
  let fixture: ComponentFixture<AddprovPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprovPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprovPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
