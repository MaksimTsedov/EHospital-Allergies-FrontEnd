import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergiesListComponent } from './allergies-list.component';

describe('AllergiesListComponent', () => {
  let component: AllergiesListComponent;
  let fixture: ComponentFixture<AllergiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
