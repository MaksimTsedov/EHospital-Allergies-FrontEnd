import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergiesMainComponent } from './allergies-main.component';

describe('AllergiesMainComponent', () => {
  let component: AllergiesMainComponent;
  let fixture: ComponentFixture<AllergiesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergiesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergiesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
