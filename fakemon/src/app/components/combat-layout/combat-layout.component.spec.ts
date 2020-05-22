import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatLayoutComponent } from './combat-layout.component';

describe('CombatLayoutComponent', () => {
  let component: CombatLayoutComponent;
  let fixture: ComponentFixture<CombatLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
