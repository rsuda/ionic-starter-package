import { Component, OnInit } from '@angular/core';

export interface cards {
  title: string;
  image: string;
}

const CARDS_DATA: cards[] = [
  {title: "Job Search", image: "../../assets/icons/job-search.svg"},
  {title: "Workday", image: "../../assets/icons/workday.png"},
  {title: "Driver Referrals", image: "../../assets/icons/referral.svg"},
  {title: "Contacts", image: "../../assets/icons/contacts.svg"},
  {title: "Messages", image: "../../assets/icons/referral.svg"},
  {title: "Employee Resources", image: "../../assets/icons/referral.svg"},
  {title: "Safety", image: "../../assets/icons/safety.svg"},
  {title: "Urgent Care", image: "../../assets/icons/urgent.svg"},
  {title: "News", image: "../../assets/icons/news.svg"}
]

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  constructor() { }

  cards = CARDS_DATA;

  ngOnInit() {
  }

}
