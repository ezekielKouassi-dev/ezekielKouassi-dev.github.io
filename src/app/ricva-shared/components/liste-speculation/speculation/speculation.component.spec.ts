import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeculationComponent } from './speculation.component';

describe('SpeculationComponent', () => {
  let component: SpeculationComponent;
  let fixture: ComponentFixture<SpeculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeculationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
