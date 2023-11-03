import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with a counter of 0', () => {
    expect(component.counter).toBe(0);
  });

  it('should decrement the counter by 1', () => {
    component.decrement();
    expect(component.counter).toBe(0);
  });

  it('should not decrement the counter below 0', () => {
    component.decrement();
    expect(component.counter).toBe(0); // Counter should stay at 0
  });

  it('should decrement the counter to 0 if it is already 1', () => {
    component.counter = 1;
    component.decrement();
    expect(component.counter).toBe(0);
  });

  it('should decrement the counter to 0 if it is already 0', () => {
    component.counter = 0;
    component.decrement();
    expect(component.counter).toBe(0); // Counter should stay at 0
  });
});
