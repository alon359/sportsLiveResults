import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFieldComponent } from './result-field.component';

describe('ResultFieldComponent', () => {
  let component: ResultFieldComponent;
  let fixture: ComponentFixture<ResultFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
