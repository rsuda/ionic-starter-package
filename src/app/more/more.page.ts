import { Component, OnInit } from '@angular/core';

export interface cards {
  title: string;
  image: string;
  url: string;
}

const CARDS_DATA: cards[] = [
  {title: "Job Search", image: "../../assets/icons/job-search.svg", url: "job-search"},
  {title: "Workday", image: "../../assets/icons/workday.png", url: "job-search"},
  {title: "Driver Referrals", image: "../../assets/icons/referral.svg", url: "job-search"},
  {title: "Contacts", image: "../../assets/icons/contacts.svg", url: "job-search"},
  {title: "Messages", image: "../../assets/icons/referral.svg", url: "job-search"},
  {title: "Employee Resources", image: "../../assets/icons/referral.svg", url: "job-search"},
  {title: "Safety", image: "../../assets/icons/safety.svg", url: "job-search"},
  {title: "Urgent Care", image: "../../assets/icons/urgent.svg", url: "www.youtube.com"},
  {title: "News", image: "../../assets/icons/news.svg", url: "job-search"},
  {title: "Achievements", image: "../../assets/icons/referral.svg", url: "achievements"}

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
