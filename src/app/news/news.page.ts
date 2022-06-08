import { Component, OnInit } from '@angular/core';

export interface cards {
  title: string;
  image: string;
  date: string;
}

const CARDS_DATA: cards[] = [
  {title: "2022 International Roadcheck", image: "../../assets/news/1.jpg", date: "May 2, 2022"},
  {title: "2022 April Associate Recognition Ceremony", image: "../../assets/news/2.jpg", date: "May 2, 2022"},
  {title: "2022 March Associate Recognition Ceremony", image: "../../assets/news/3.jpg", date: "Apr 20, 2022"},
  {title: "2022 Driver Appreciation Spring Celebration Recap", image: "../../assets/news/4.jpg", date: "Apr 14, 2022"},
  {title: "2022 Spring Driver Appreciation Celebration", image: "../../assets/news/5.png", date: "Mar 30, 2022"},
  {title: "2022 February Associate Recognition Ceremony", image: "../../assets/news/6.png", date: "Feb 22, 2022"},
  {title: "Winter Weather Preparedness", image: "../../assets/news/7.png", date: "Feb 16, 2022"},
  {title: "Preparing for Winter Weather #2", image: "../../assets/news/8.png", date: "Dec 22, 2021"},
  {title: "Happy Holidays from Derek Leathers", image: "../../assets/news/9.png", date: "Dec 22, 2021"},
  {title: "2021 December Associate Recognition Ceremony", image: "../../assets/news/10.png", date: "Dec 21, 2021"}

]

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor() { }

  cards = CARDS_DATA;

  ngOnInit() {
  }

}
