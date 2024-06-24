import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ColophonComponent } from './colophon.component';

describe('ColophonComponent', () => {
  let component: ColophonComponent;
  let fixture: ComponentFixture<ColophonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ColophonComponent
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
