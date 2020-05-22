import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionMonstreComponent } from './selection-monstre.component';

describe('SelectionMonstreComponent', () => {
  let component: SelectionMonstreComponent;
  let fixture: ComponentFixture<SelectionMonstreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionMonstreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionMonstreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
