import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionCombatComponent } from './selection-combat.component';

describe('SelectionCombatComponent', () => {
  let component: SelectionCombatComponent;
  let fixture: ComponentFixture<SelectionCombatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionCombatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
