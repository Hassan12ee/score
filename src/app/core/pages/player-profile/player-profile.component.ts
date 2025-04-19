import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface PlayerStats {
  goals: number;
  assists: number;
  matches: number;
  started: number;
  minutesPlayed: number;
  rating: number;
  yellowCards: number;
  redCards: number;
}

interface PlayerTraits {
  touches: number;
  shotAttempts: number;
  goals: number;
  chancesCreated: number;
  aerialDuelsWon: number;
  defensiveActions: number;
}

@Component({
  selector: 'app-player-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-fluid py-4">
      <!-- Player Header -->
      <div class="player-header bg-dark text-white p-4 rounded-3 mb-4">
        <div class="row align-items-center">
          <div class="col-md-2">
            <img [src]="playerImage" [alt]="playerName" class="player-image rounded-circle">
          </div>
          <div class="col-md-6">
            <h1 class="display-4 mb-2">{{playerName}}</h1>
            <div class="d-flex align-items-center mb-3">
              <img [src]="teamLogo" [alt]="teamName" class="team-logo me-2">
              <span class="h5 mb-0">{{teamName}}</span>
            </div>
            <div class="player-info">
              <div class="row g-3">
                <div class="col-auto">
                  <div class="info-item">
                    <small class="text-muted d-block">Shirt</small>
                    <span class="h6 mb-0">{{playerNumber}}</span>
                  </div>
                </div>
                <div class="col-auto">
                  <div class="info-item">
                    <small class="text-muted d-block">Age</small>
                    <span class="h6 mb-0">{{age}} years</span>
                  </div>
                </div>
                <div class="col-auto">
                  <div class="info-item">
                    <small class="text-muted d-block">Preferred foot</small>
                    <span class="h6 mb-0">{{preferredFoot}}</span>
                  </div>
                </div>
                <div class="col-auto">
                  <div class="info-item">
                    <small class="text-muted d-block">Position</small>
                    <span class="h6 mb-0">{{position}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 text-md-end">
            <button class="btn btn-outline-light me-2">Follow</button>
            <button class="btn btn-primary">
              <i class="bi bi-calendar-plus me-2"></i>
              Sync to calendar
            </button>
          </div>
        </div>
      </div>

      <!-- Player Traits -->
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="card-title mb-0">Player Traits</h3>
          <small class="text-muted">Stats compared to other attacking midfielders/wingers</small>
        </div>
        <div class="card-body">
          <div class="row g-4">
            <div class="col-md-4" *ngFor="let trait of traits | keyvalue">
              <div class="trait-item">
                <div class="d-flex justify-content-between mb-1">
                  <span>{{trait.key}}</span>
                  <span class="text-primary">{{trait.value}}%</span>
                </div>
                <div class="progress" style="height: 6px;">
                  <div class="progress-bar" 
                       [style.width]="trait.value + '%'"
                       [class.bg-success]="trait.value > 66"
                       [class.bg-warning]="trait.value > 33 && trait.value <= 66"
                       [class.bg-danger]="trait.value <= 33">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Season Stats -->
      <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h3 class="card-title mb-0">Premier League 2023/24</h3>
          <div class="btn-group">
            <button class="btn btn-outline-primary active">Overview</button>
            <button class="btn btn-outline-primary">Stats</button>
            <button class="btn btn-outline-primary">Matches</button>
          </div>
        </div>
        <div class="card-body">
          <div class="row g-4">
            <div class="col-md-3 col-6" *ngFor="let stat of stats | keyvalue">
              <div class="stat-item text-center p-3 border rounded">
                <h2 class="mb-2">{{stat.value}}</h2>
                <span class="text-muted">{{stat.key}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .player-image {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border: 4px solid rgba(255,255,255,0.2);
    }

    .team-logo {
      width: 32px;
      height: 32px;
      object-fit: contain;
    }

    .info-item {
      padding: 0.5rem 1rem;
      background: rgba(255,255,255,0.1);
      border-radius: 4px;
    }

    .trait-item {
      margin-bottom: 1rem;
    }

    .progress {
      background-color: #e9ecef;
      border-radius: 3px;
    }

    .stat-item {
      transition: transform 0.2s ease;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      }

      h2 {
        font-size: 2rem;
        font-weight: 600;
        color: #198754;
      }
    }
  `]
})
export class PlayerProfileComponent implements OnInit {
  playerName = 'Mohamed Salah';
  playerNumber = 11;
  teamName = 'Liverpool';
  teamLogo = 'https://resources.premierleague.com/premierleague/badges/t14.png';
  playerImage = 'https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png';
  age = 32;
  preferredFoot = 'Left';
  position = 'Right Winger';

  traits: PlayerTraits = {
    touches: 26,
    shotAttempts: 90,
    goals: 99,
    chancesCreated: 72,
    aerialDuelsWon: 11,
    defensiveActions: 1
  };

  stats: PlayerStats = {
    goals: 27,
    assists: 18,
    matches: 32,
    started: 32,
    minutesPlayed: 2837,
    rating: 8.14,
    yellowCards: 1,
    redCards: 0
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // You can fetch player data here
  }

  navigateToPlayer(playerId: string) {
    this.router.navigate(['/player', playerId]);
  }
} 