import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisOSPISComponent } from './frais-ospis.component';

describe('FraisOSPISComponent', () => {
  let component: FraisOSPISComponent;
  let fixture: ComponentFixture<FraisOSPISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraisOSPISComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraisOSPISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
