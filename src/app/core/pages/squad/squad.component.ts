import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Player {
  name: string;
  image: string;
  position: string;
  nationality: string;
  number: number;
}

interface Club {
  name: string;
  logo: string;
  country: string;
}

@Component({
  selector: 'app-squad',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-fluid py-4">
      <!-- Club Header -->
      <div class="club-header mb-4 d-flex align-items-center">
        <img [src]="club?.logo" [alt]="club?.name" class="club-logo me-3">
        <div>
          <h1 class="mb-1">{{club?.name}}</h1>
          <p class="text-muted mb-0">{{club?.country}}</p>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <ul class="nav nav-tabs mb-4">
        <li class="nav-item">
          <a class="nav-link" [class.active]="true">Overview</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Table</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Fixtures</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Squad</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Stats</a>
        </li>
      </ul>

      <!-- Squad Section -->
      <div class="squad-section">
        <!-- Coach Section -->
        <div class="mb-5">
          <h2 class="section-title mb-4">Coach</h2>
          <div class="card">
            <div class="card-body d-flex align-items-center">
              <img [src]="coach.image" [alt]="coach.name" class="coach-image me-3">
              <div>
                <h3 class="mb-1">{{coach.name}}</h3>
                <p class="text-muted mb-0">{{coach.nationality}}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Players Section -->
        <div class="mb-4">
          <h2 class="section-title mb-4">Keepers</h2>
          <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-4" *ngFor="let player of keepers">
              <div class="card player-card">
                <div class="card-body d-flex align-items-center">
                  <img [src]="player.image" [alt]="player.name" class="player-image me-3">
                  <div>
                    <h4 class="mb-1">{{player.name}}</h4>
                    <p class="text-muted mb-2">{{player.nationality}}</p>
                    <span class="badge bg-primary">{{player.number}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .club-logo {
      width: 64px;
      height: 64px;
      object-fit: contain;
    }
    
    .section-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #2d2d2d;
    }

    .coach-image, .player-image {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      object-fit: cover;
    }

    .player-card {
      transition: transform 0.2s ease-in-out;
      cursor: pointer;
      
      &:hover {
        transform: translateY(-2px);
      }
    }

    .nav-tabs {
      border-bottom: 2px solid #dee2e6;
      
      .nav-link {
        border: none;
        color: #6c757d;
        padding: 1rem 1.5rem;
        font-weight: 500;
        
        &.active {
          color: #198754;
          border-bottom: 2px solid #198754;
          margin-bottom: -2px;
        }
        
        &:hover {
          border-color: transparent;
          color: #198754;
        }
      }
    }
  `]
})
export class SquadComponent implements OnInit {
  club: Club | null = null;
  
  coach = {
    name: 'Arne Slot',
    nationality: 'Netherlands',
    image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/man39237.png'
  };

  keepers: Player[] = [
    {
      name: 'Alisson Becker',
      nationality: 'Brazil',
      position: 'Goalkeeper',
      number: 1,
      image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p116535.png'
    },
    {
      name: 'Caoimhin Kelleher',
      nationality: 'Ireland',
      position: 'Goalkeeper',
      number: 62,
      image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p200720.png'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    const storedClub = localStorage.getItem('selectedClub');
    if (storedClub) {
      this.club = JSON.parse(storedClub);
    } else {
      this.router.navigate(['/']);
    }
  }
} 