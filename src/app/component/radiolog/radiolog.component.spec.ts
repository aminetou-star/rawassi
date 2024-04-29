import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologComponent } from './radiolog.component';

describe('RadiologComponent', () => {
  let component: RadiologComponent;
  let fixture: ComponentFixture<RadiologComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiologComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
