import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireEntrepotComponent } from './formulaire-entrepot.component';

describe('FormulaireEntrepotComponent', () => {
  let component: FormulaireEntrepotComponent;
  let fixture: ComponentFixture<FormulaireEntrepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireEntrepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireEntrepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
