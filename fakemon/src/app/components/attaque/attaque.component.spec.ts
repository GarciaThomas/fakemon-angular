import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttaqueComponent } from './attaque.component';

describe('AttaqueComponent', () => {
  let component: AttaqueComponent;
  let fixture: ComponentFixture<AttaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
