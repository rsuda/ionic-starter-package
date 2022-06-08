import { Component, OnInit } from '@angular/core';

export interface cards {
  title: string;
  image: string;
  url: string;
}

const CARDS_DATA: cards[] = [
  {title: "Job Search", image: "../../assets/icons/job-search.svg", url: "job-search"},
  {title: "Workday", image: "../../assets/icons/workday.png", url: "workday-external"},
  {title: "Driver Referrals", image: "../../assets/icons/referral.svg", url: "referral"},
  {title: "Driver Opportunities", image: "../../assets/icons/opportunities.svg", url: "driver-opportunities"},
  {title: "Pay", image: "../../assets/icons/pay-color.svg", url: "tabs/tab2"},
  {title: "Contacts", image: "../../assets/icons/contact.svg", url: "tabs/tab4"},
  {title: "Messages", image: "../../assets/icons/contacts.svg", url: "messages"},
  {title: "Employee Resources", image: "../../assets/icons/resources.svg", url: "employee-resources"},
  {title: "Safety", image: "../../assets/icons/safety.svg", url: "safety"},
  {title: "Urgent Care", image: "../../assets/icons/urgent.svg", url: "urgent-care-external"},
  {title: "News", image: "../../assets/icons/news.svg", url: "news"},
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
