import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatLayoutAreneComponent } from './combat-layout-arene.component';

describe('CombatLayoutAreneComponent', () => {
  let component: CombatLayoutAreneComponent;
  let fixture: ComponentFixture<CombatLayoutAreneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatLayoutAreneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatLayoutAreneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
