import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { LoginComponent } from './core/pages/login/login.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { Page404Component } from './core/inc/page404/page404.component';
import { NewsComponent } from './core/pages/news/news.component';
import { ClubComponent } from './core/pages/club/club.component';
import { ScoreboardComponent } from './core/pages/scoreboard/scoreboard.component';
import { PlayerStatesComponent } from './core/pages/player-states/player-states.component';

export const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path: "Home", component: HomeComponent },
  {path: "Register",component:RegisterComponent},
  {path: "login",component:LoginComponent},
  {path: "news",component:NewsComponent},
  {path: "club",component:ClubComponent},
  {path: "scoreboard",component:ScoreboardComponent},
  {path: "playerStates",component:PlayerStatesComponent},


  {path:"**",component: Page404Component}
];
