import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugTherapyComponent } from './drug-therapy.component';

describe('DrugTherapyComponent', () => {
  let component: DrugTherapyComponent;
  let fixture: ComponentFixture<DrugTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugTherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
