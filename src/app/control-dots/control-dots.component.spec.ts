import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDotsComponent } from './control-dots.component';

describe('ControlDotsComponent', () => {
  let component: ControlDotsComponent;
  let fixture: ComponentFixture<ControlDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlDotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
