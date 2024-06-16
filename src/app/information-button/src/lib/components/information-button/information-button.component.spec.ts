import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InformationButtonComponent } from './information-button.component';

describe('InformationButtonComponent', () => {
  let component: InformationButtonComponent;
  let fixture: ComponentFixture<InformationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        InformationButtonComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
