import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEntrepotComponent } from './liste-entrepot.component';

describe('ListeEntrepotComponent', () => {
  let component: ListeEntrepotComponent;
  let fixture: ComponentFixture<ListeEntrepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEntrepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEntrepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
