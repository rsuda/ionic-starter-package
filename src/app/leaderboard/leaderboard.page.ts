import { Component, OnInit } from '@angular/core';

interface person {
  rank: number;
  name: string;
  image: string;
  points: number;
}

const PEOPLE: person[] = [] = [
  {rank: 1, name: "Melissa", image: "../../../../assets/people/woman1.png", points: 11200},
  {rank: 2, name: "Clay", image: "../../../../assets/people/man1.png", points: 11000},
  {rank: 3, name: "Oliver", image: "../../../../assets/people/man2.png", points: 10900},
  {rank: 4, name: "Rachel", image: "../../../../assets/people/woman2.png", points: 10500},
  {rank: 5, name: "David", image: "../../../../assets/people/man3.png", points: 9500},
  {rank: 6, name: "James", image: "../../../../assets/people/man4.png", points: 9000},
  {rank: 7, name: "Samantha", image: "../../../../assets/people/woman3.png", points: 8200},
  {rank: 8, name: "Eric", image: "../../../../assets/people/man5.png", points: 8000}
];

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})

export class LeaderboardPage implements OnInit {


  constructor() { }

  people = PEOPLE;

  public selectedSegment: string = 'safe-miles';

  segmentChanged(event:any) {
    this.selectedSegment=event.target.value
  }

  ngOnInit() {
  }

}
