import { Component } from '@angular/core';

export interface pastjobs {
  title: string;
  date: string;
  id: string;
  chip: string;
}

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

}
