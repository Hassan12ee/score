import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Team {
  name: string;
  logo: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: ('W' | 'D' | 'L')[];
}
@Component({
  selector: 'app-scorebord',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scorebord.component.html',
  styleUrl: './scorebord.component.scss'
})
export class ScorebordComponent {
  teams: Team[] = [
    {
      name: 'Liverpool',
      logo: 'https://resources.premierleague.com/premierleague/badges/t14.png',
      played: 32,
      won: 23,
      drawn: 7,
      lost: 2,
      goalsFor: 74,
      goalsAgainst: 31,
      goalDifference: 43,
      points: 76,
      form: ['W', 'W', 'W', 'L', 'W']
    },
    {
      name: 'Arsenal',
      logo: 'https://resources.premierleague.com/premierleague/badges/t3.png',
      played: 32,
      won: 17,
      drawn: 12,
      lost: 3,
      goalsFor: 57,
      goalsAgainst: 27,
      goalDifference: 30,
      points: 63,
      form: ['D', 'W', 'W', 'D', 'D']
    },
    {
      name: 'Arsenal',
      logo: 'https://resources.premierleague.com/premierleague/badges/t3.png',
      played: 32,
      won: 17,
      drawn: 12,
      lost: 3,
      goalsFor: 57,
      goalsAgainst: 27,
      goalDifference: 30,
      points: 63,
      form: ['D', 'W', 'W', 'D', 'D']
    },
    {
      name: 'Arsenal',
      logo: 'https://resources.premierleague.com/premierleague/badges/t3.png',
      played: 32,
      won: 17,
      drawn: 12,
      lost: 3,
      goalsFor: 57,
      goalsAgainst: 27,
      goalDifference: 30,
      points: 63,
      form: ['D', 'W', 'W', 'D', 'D']
    },
    {
      name: 'Arsenal',
      logo: 'https://resources.premierleague.com/premierleague/badges/t3.png',
      played: 32,
      won: 17,
      drawn: 12,
      lost: 3,
      goalsFor: 57,
      goalsAgainst: 27,
      goalDifference: 30,
      points: 63,
      form: ['D', 'W', 'W', 'D', 'D']
    },
    {
      name: 'Arsenal',
      logo: 'https://resources.premierleague.com/premierleague/badges/t3.png',
      played: 32,
      won: 17,
      drawn: 12,
      lost: 3,
      goalsFor: 57,
      goalsAgainst: 27,
      goalDifference: 30,
      points: 63,
      form: ['D', 'W', 'W', 'D', 'D']
    },
    {
      name: 'Arsenal',
      logo: 'https://resources.premierleague.com/premierleague/badges/t3.png',
      played: 32,
      won: 17,
      drawn: 12,
      lost: 3,
      goalsFor: 57,
      goalsAgainst: 27,
      goalDifference: 30,
      points: 63,
      form: ['D', 'W', 'W', 'D', 'D']
    },
    {
      name: 'Arsenal',
      logo: 'https://resources.premierleague.com/premierleague/badges/t3.png',
      played: 32,
      won: 17,
      drawn: 12,
      lost: 3,
      goalsFor: 57,
      goalsAgainst: 27,
      goalDifference: 30,
      points: 63,
      form: ['D', 'W', 'W', 'D', 'D']
    },
    {
      name: 'Arsenal',
      logo: 'https://resources.premierleague.com/premierleague/badges/t3.png',
      played: 32,
      won: 17,
      drawn: 12,
      lost: 3,
      goalsFor: 57,
      goalsAgainst: 27,
      goalDifference: 30,
      points: 63,
      form: ['D', 'W', 'W', 'D', 'D']
    },
    {
      name: 'Arsenal',
      logo: 'https://resources.premierleague.com/premierleague/badges/t3.png',
      played: 32,
      won: 17,
      drawn: 12,
      lost: 3,
      goalsFor: 57,
      goalsAgainst: 27,
      goalDifference: 30,
      points: 63,
      form: ['D', 'W', 'W', 'D', 'D']
    },
    {
      name: 'Arsenal',
      logo: 'https://resources.premierleague.com/premierleague/badges/t3.png',
      played: 32,
      won: 17,
      drawn: 12,
      lost: 3,
      goalsFor: 57,
      goalsAgainst: 27,
      goalDifference: 30,
      points: 63,
      form: ['D', 'W', 'W', 'D', 'D']
    },
    {
      name: 'Arsenal',
      logo: 'https://resources.premierleague.com/premierleague/badges/t3.png',
      played: 32,
      won: 17,
      drawn: 12,
      lost: 3,
      goalsFor: 57,
      goalsAgainst: 27,
      goalDifference: 30,
      points: 63,
      form: ['D', 'W', 'W', 'D', 'D']
    },
    {
      name: 'Arsenal',
      logo: 'https://resources.premierleague.com/premierleague/badges/t3.png',
      played: 32,
      won: 17,
      drawn: 12,
      lost: 3,
      goalsFor: 57,
      goalsAgainst: 27,
      goalDifference: 30,
      points: 63,
      form: ['D', 'W', 'W', 'D', 'D']
    },
    // Add more teams as needed...
  ];
}
