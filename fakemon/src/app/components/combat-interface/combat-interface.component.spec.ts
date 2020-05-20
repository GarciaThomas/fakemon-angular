import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatInterfaceComponent } from './combat-interface.component';

describe('CombatInterfaceComponent', () => {
  let component: CombatInterfaceComponent;
  let fixture: ComponentFixture<CombatInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
