import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStatesComponent } from './player-states.component';

describe('PlayerStatesComponent', () => {
  let component: PlayerStatesComponent;
  let fixture: ComponentFixture<PlayerStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerStatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
