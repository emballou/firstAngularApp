import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StatusUpdatesComponent } from './status-updates.component';

describe('StatusUpdatesComponent', () => {
  let component: StatusUpdatesComponent;
  let fixture: ComponentFixture<StatusUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StatusUpdatesComponent
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
