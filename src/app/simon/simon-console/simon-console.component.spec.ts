import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonConsoleComponent } from './simon-console.component';

describe('SimonConsoleComponent', () => {
  let component: SimonConsoleComponent;
  let fixture: ComponentFixture<SimonConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimonConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimonConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
