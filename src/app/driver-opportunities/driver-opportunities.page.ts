import { Component, OnInit } from '@angular/core';

export interface announcements {
  title: string;
  message: string;
}

export interface messages {
  date: string;
  title: string;
  message: string;
}

const ANNOUNCEMENTS_DATA: announcements[] = [
  {title: "Van 48 State Solo", message: "Lorem ipsum"},
  {title: "Van 48 States - Owner Operators", message: "Lorem ipsum"},
  {title: "Team Werner", message: "Lorem ipsum"},
  {title: "48 State Van Trainers", message: "Lorem ipsum"},
  {title: "Owner Operator Full Teams", message: "Lorem ipsum"},
  {title: "48 State Owner Operator Trainers", message: "Lorem ipsum"},
  {title: "Canada Zone 7 - Tri-Weekly Home", message: "Lorem ipsum"},
]

const MESSAGES_DATA: messages[] = [
  {date: "May 17, 09:01", title: "Driver Placement Request", message: "Lorem ipsum"},
]

const delay = ms => new Promise(res => setTimeout(res, ms));

@Component({
  selector: 'app-driver-opportunities',
  templateUrl: './driver-opportunities.page.html',
  styleUrls: ['./driver-opportunities.page.scss'],
})
export class DriverOpportunitiesPage implements OnInit {

  constructor() {
    this.function();
   }

  public selectedSegment: string = 'announcements';
  messages = MESSAGES_DATA;
  announcements = ANNOUNCEMENTS_DATA;


  segmentChanged(event:any) {
    this.selectedSegment=event.target.value
  }

  public data: boolean = false;

  function = async () => {
    await delay(2000);
    this.data = true;
  };

  ngOnInit() {
  }

}
