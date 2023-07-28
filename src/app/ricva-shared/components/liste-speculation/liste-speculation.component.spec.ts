import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSpeculationComponent } from './liste-speculation.component';

describe('ListeSpeculationComponent', () => {
  let component: ListeSpeculationComponent;
  let fixture: ComponentFixture<ListeSpeculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSpeculationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeSpeculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
