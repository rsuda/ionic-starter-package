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

const PAST_JOBS_DATA: pastjobs[] = [
  {title: "Romeoville, IL to Indianapolis, IN", date: "05/27", id: "T9637111HL", chip: "Submitted"},
  {title: "Whitmore LK, to Woodridge, IL", date: "05/26", id: "T9637111HL", chip: "Missing"},
  {title: "Joliet, IL to Belleville, MI", date: "05/25", id: "T9637111HL", chip: "Missing"},
  {title: "Anderson, IN to Romeoville, IL", date: "05/25", id: "T9637111HL", chip: "Paid"},
  {title: "Romeoville, IL to Merrillville, IN", date: "05/24", id: "T9637111HL", chip: "Paid"},
  {title: "Neenah, WI to Sauk VLG, IL", date: "05/22", id: "T9637111HL", chip: "Paid"},
  {title: "Romeoville, IL to GR Chute, WI", date: "05/22", id: "T9637111HL", chip: "Paid"},
  {title: "Romeoville, IL to MT Pleasant, IA", date: "05/21", id: "T9637111HL", chip: "Paid"},
  {title: "Romeoville, IL to Beloit, WI", date: "05/21", id: "T9637111HL", chip: "Paid"},
  {title: "Neenah, WI to Romeoville, IL", date: "05/20", id: "T9637111HL", chip: "Paid"},
  {title: "Indianapolis, IN to Anderson, IN", date: "05/18", id: "T9637111HL", chip: "Paid"},
  {title: "Joliet, IL to Indianapolis, IN", date: "05/18", id: "T9637111HL", chip: "Paid"},
  {title: "Neenah, WI to Romeoville, IL", date: "05/18", id: "T9637111HL", chip: "Paid"},
  {title: "Romeoville, IL to GR Chute, WI", date: "05/17", id: "T9637111HL", chip: "Paid"},
  {title: "Neenah, WI to Romeoville, IL", date: "05/15", id: "T9637111HL", chip: "Paid"},
]

const delay = ms => new Promise(res => setTimeout(res, ms));

@Component({
  selector: 'app-home-v3',
  templateUrl: './home-v3.page.html',
  styleUrls: ['./home-v3.page.scss'],
})
export class HomeV3Page implements OnInit {

  pastjobs = PAST_JOBS_DATA;
  cards = CARDS_DATA;

  public data: boolean = false;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

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
