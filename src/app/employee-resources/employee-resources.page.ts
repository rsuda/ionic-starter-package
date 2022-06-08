import { Component, OnInit } from '@angular/core';

export interface resources {
  title: string;
}

const RESOURCES_DATA: resources[] = [
  {title: "Available Discounts"},
  {title: "401(k) Program with Kendra Kripal"},
  {title: "Bone and Joint Health with Lyndsie Vacanti"},
  {title: "Bonuses, Teams and Trainers with Jon Goff"},
  {title: "Brake Safety Week with Jim Kochenderfer"},
  {title: "Collision Avoidance with Adam Cassidy"},
  {title: "CSA - Seven BASICS with Jim Kochenderfer"},
  {title: "CSA - Unsafe Driving with Jim Kochenderfer"},
  {title: "CSA and Driver Assistance with Jim Kochenderfer"},
  {title: "Driver Placement Opportunities with Jon Goff"},
  {title: "Driver Wellness Benefits with Lyndsie Vacanti"},
  {title: "Fuel Additives with Kevin Ingalls"},
  {title: "Health Insurance with Kendra Kripal"},
  {title: "Information Update: CDL and Medical Certification"},
  {title: "Long Term Disability Insurance with Kendra Kripal"},
  {title: "National Stop on Red Week with Jim Kochenderfer"},
  {title: "Safety Update"},
  {title: "Tire Inspections with Kevin Ingalls"},
  {title: "Trainer and Teams with Jon Goff"},
  {title: "Werner Rewards"},
  {title: "CDL Program"},
  {title: "Clearinghouse Info"},
  {title: "Clearinghouse Login"},
  {title: "DOT Physical"},
  {title: "Log Retrievals"},
  {title: "Mapping Rollovers"},
  {title: "Trucking Against Trafficking"},
  {title: "Indiana Counties"},
  {title: "Ohio School Districts"},
  {title: "Pennsylvania School Districts"},
  {title: "ATRI's Sleep Apnea Survey"},
  {title: "Back Brace Survey"},
  {title: "Convoy Backing Camera Survey"},
  {title: "Fuel Survey"},
  {title: "Orientation Survey"},
  {title: "Road Breakdown Survey"},
  {title: "Simulator Training Survey"},
  {title: "Terminal Survey"},
  {title: "Wrist Brace Survey"}
]

const delay = ms => new Promise(res => setTimeout(res, ms));

@Component({
  selector: 'app-employee-resources',
  templateUrl: './employee-resources.page.html',
  styleUrls: ['./employee-resources.page.scss'],
})
export class EmployeeResourcesPage implements OnInit {

  constructor() {
    this.function();
  }

  public data: boolean = false;

  function = async () => {
    await delay(2000);
    this.data = true;
  };

  resources = RESOURCES_DATA;

  ngOnInit() {
  }

}
