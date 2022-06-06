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
  url: string;
}

const CARDS_DATA: cards[] = [
  {title: "Pay", image: "../../assets/icons/pay-color.svg", url: "tab2"},
  {title: "Job Search", image: "../../assets/icons/job-search.svg", url: "job-search"},
  {title: "Workday", image: "../../assets/icons/workday.png", url: "workday"},
  {title: "Referrals", image: "../../assets/icons/referral.svg", url: "referral"}
]

const PAST_JOBS_DATA: pastjobs[] = [
  {title: "Stop 2 to Destination", date: "3/29", id: "T9637111HL", chip: "Submitted"},
  {title: "Stop 1 to Stop 2", date: "3/29", id: "T9637111HL", chip: "Missing"},
  {title: "Stop 2 to Destination", date: "3/28", id: "T9637111HL", chip: "Missing"},
  {title: "Stop 1 to Stop 2", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 3 to Destination", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 2 to Stop 3", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 1 to Stop 2", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 3 to Destination", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 2 to Stop 3", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 1 to Stop 2", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 3 to Destination", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 2 to Stop 3", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 1 to Stop 2", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 3 to Destination", date: "3/27", id: "T9637111HL", chip: "Paid"},
  {title: "Stop 2 to Stop 3", date: "3/27", id: "T9637111HL", chip: "Paid"},
]

const delay = ms => new Promise(res => setTimeout(res, ms));

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pastjobs = PAST_JOBS_DATA;
  cards = CARDS_DATA;

  public data: boolean = false;

  function = async () => {
    await delay(2000);
    this.data = true;
    console.log("32");
  };

  constructor() {

  }

  ngOnInit(){
    this.function();
  }
}
