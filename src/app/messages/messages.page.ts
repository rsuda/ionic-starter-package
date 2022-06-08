import { Component, OnInit } from '@angular/core';

export interface announcements {
  date: string;
  title: string;
  message: string;
}

export interface messages {
  date: string;
  title: string;
  message: string;
}

const ANNOUNCEMENTS_DATA: announcements[] = [
  {date: "Jun 05, 20:24", title: "Driver Referral Sent", message: "Lorem ipsum"},
  {date: "Apr 13, 08:17", title: "New 401(k) Enhancement - Roth 401(k)", message: "Lorem ipsum"},
  {date: "Mar 30, 10:04", title: "Spring in Your Step Challenge", message: "Lorem ipsum"},
  {date: "Feb 14, 16:19", title: "Onsite Werner Maintenance Service Technicians", message: "Lorem ipsum"},
  {date: "Feb 08, 09:48", title: "Company Store Message", message: "Lorem ipsum"},
  {date: "Jan 21, 15:20", title: "WERNER STORE", message: "Lorem ipsum"},
  {date: "Jan 20, 08:36", title: "Important 401(k) Plan Information", message: "Lorem ipsum"},
]

const MESSAGES_DATA: messages[] = [
  {date: "May 17, 09:01", title: "Driver Placement Request", message: "Lorem ipsum"},
]

const delay = ms => new Promise(res => setTimeout(res, ms));

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

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
