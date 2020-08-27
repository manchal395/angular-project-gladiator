import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidAlertComponent } from './covid-alert.component';

describe('CovidAlertComponent', () => {
  let component: CovidAlertComponent;
  let fixture: ComponentFixture<CovidAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
