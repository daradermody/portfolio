import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalaxCornersComponent } from './paralax-corners.component';

describe('ParalaxCornersComponent', () => {
  let component: ParalaxCornersComponent;
  let fixture: ComponentFixture<ParalaxCornersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParalaxCornersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParalaxCornersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
