import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WhatsNowComponent } from './whats-now.component';

describe('WhatsNowComponent', () => {
  let component: WhatsNowComponent;
  let fixture: ComponentFixture<WhatsNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WhatsNowComponent
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
