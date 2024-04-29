import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationMedicamentComponent } from './information-medicament.component';

describe('InformationMedicamentComponent', () => {
  let component: InformationMedicamentComponent;
  let fixture: ComponentFixture<InformationMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationMedicamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
