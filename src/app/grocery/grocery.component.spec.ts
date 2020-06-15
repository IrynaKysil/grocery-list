import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryComponent } from './grocery.component';

describe('GroceryComponent', () => {
  let component: GroceryComponent;
  let fixture: ComponentFixture<GroceryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onClick', () => {

    it('should add task when tasks are empty', () => {
      expect(component.tasks[0]).toBeUndefined();
      component.onClick();
      expect(component.tasks[0]).toBeTruthy();
    });

    it('should not add task when tasks are not empty', () => {
      component.onClick();
      component.onClick();
      expect(component.tasks.length).toBe(2);
    });

  });
});
