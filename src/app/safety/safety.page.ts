import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.page.html',
  styleUrls: ['./safety.page.scss'],
})
export class SafetyPage implements OnInit {

  constructor() { }

  public selectedSegment: string = 'in-progress';

  segmentChanged(event:any) {
    this.selectedSegment=event.target.value
  }

  ngOnInit() {
  }

}
