import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidGuidelinesComponent } from './covid-guidelines.component';

describe('CovidGuidelinesComponent', () => {
  let component: CovidGuidelinesComponent;
  let fixture: ComponentFixture<CovidGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
