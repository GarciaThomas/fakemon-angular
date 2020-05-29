import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterListItemComponent } from './monster-list-item.component';

describe('MonsterListItemComponent', () => {
  let component: MonsterListItemComponent;
  let fixture: ComponentFixture<MonsterListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
