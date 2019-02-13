import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingQuestionsComponent } from './landing-questions.component';

describe('LandingQuestionsComponent', () => {
  let component: LandingQuestionsComponent;
  let fixture: ComponentFixture<LandingQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
