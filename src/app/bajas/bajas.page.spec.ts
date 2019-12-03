import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajasPage } from './bajas.page';

describe('BajasPage', () => {
  let component: BajasPage;
  let fixture: ComponentFixture<BajasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
