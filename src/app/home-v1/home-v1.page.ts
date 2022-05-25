import { Component, OnInit } from '@angular/core';

export interface pastjobs {
  title: string;
  date: string;
  id: string;
  chip: string;
}

export interface cards {
  title: string;
  image: string;
}

const CARDS_DATA: cards[] = [
  {title: "Past Jobs", image: "../../assets/icons/past.svg"},
  {title: "Pre-Assigned Jobs", image: "../../assets/icons/preassigned.svg"},
  {title: "Pay", image: "../../assets/icons/cash.svg"},
  {title: "Driving Opportunities", image: "../../assets/icons/briefcase.svg"},
  {title: "Messages", image: "../../assets/icons/contacts.svg"},
  {title: "Workday", image: "../../assets/icons/workday.png"},
  //{title: "Safety", image: "../../assets/icons/workday.png"},
  //{title: "News", image: "../../assets/icons/news.svg"},
  //{title: "Urgent Care", image: "../../assets/icons/urgent.svg"}
]

const PAST_JOBS_DATA: pastjobs[] = [
  {title: "Stop 2 to Destination", date: "3/29", id: "T9637111HL", chip: "Submitted"},
  {title: "Stop 1 to Stop 2", date: "3/29", id: "T9637111HL", chip: "Missing"},
  {title: "Stop 2 to Destination", date: "3/28", id: "T9637111HL", chip: "Missing"},
  {title: "Stop 1 to Stop 2", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 3 to Destination", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 2 to Stop 3", date: "3/27", id: "T9637111HL", chip: "Paid"},
]

@Component({
  selector: 'app-home-v1',
  templateUrl: './home-v1.page.html',
  styleUrls: ['./home-v1.page.scss'],
})
export class HomeV1Page implements OnInit {

  constructor() { }

  pastjobs = PAST_JOBS_DATA;
  cards = CARDS_DATA;

  ngOnInit() {
  }

}
