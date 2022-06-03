import { Component } from '@angular/core';

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

const PAST_JOBS_DATA: pastjobs[] = [
  {title: "Stop 2 to Destination", date: "3/29", id: "T9637111HL", chip: "Submitted"},
  {title: "Stop 1 to Stop 2", date: "3/29", id: "T9637111HL", chip: "Missing"},
  {title: "Stop 2 to Destination", date: "3/28", id: "T9637111HL", chip: "Missing"},
  {title: "Stop 1 to Stop 2", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 3 to Destination", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 2 to Stop 3", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 2 to Destination", date: "3/29", id: "T9637111HL", chip: "Submitted"},
  {title: "Stop 1 to Stop 2", date: "3/29", id: "T9637111HL", chip: "Missing"},
  {title: "Stop 2 to Destination", date: "3/28", id: "T9637111HL", chip: "Missing"},
  {title: "Stop 1 to Stop 2", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 3 to Destination", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 2 to Stop 3", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 2 to Destination", date: "3/29", id: "T9637111HL", chip: "Submitted"},
  {title: "Stop 1 to Stop 2", date: "3/29", id: "T9637111HL", chip: "Missing"},
  {title: "Stop 2 to Destination", date: "3/28", id: "T9637111HL", chip: "Missing"},
  {title: "Stop 1 to Stop 2", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 3 to Destination", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 2 to Stop 3", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 2 to Destination", date: "3/29", id: "T9637111HL", chip: "Submitted"},
  {title: "Stop 1 to Stop 2", date: "3/29", id: "T9637111HL", chip: "Missing"},
  {title: "Stop 2 to Destination", date: "3/28", id: "T9637111HL", chip: "Missing"},
  {title: "Stop 1 to Stop 2", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 3 to Destination", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 2 to Stop 3", date: "3/27", id: "T9637111HL", chip: "Paid"},

]

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor() {}

  pastjobs = PAST_JOBS_DATA;
  cards = CARDS_DATA;

}
