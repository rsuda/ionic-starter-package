import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

export interface contacts {
  title: string;
  phone: string;
}

export interface terminals {
  title: string;
}

const TERMINALS_DATA: terminals[] = [
  {title: "Atlanta, GA"},
  {title: "Dallas, TX"},
  {title: "Denver, CO"},
  {title: "Detroit, MI"},
  {title: "El Paso, TX"},
  {title: "Fontana, CA"},
  {title: "Joliet, IL"},
  {title: "Lake City, FL"},
  {title: "Laredo, TX"},
  {title: "Lehigh Valley, PA"},
  {title: "Omaha, NE"},
  {title: "Phoenix, AZ"},
  {title: "Springfield, OH"},
  {title: "West Memphis, AR"},
]

const CONTACTS_DATA: contacts[] = [
  {title: "Safety Hotline", phone: "(800) 331-0361"},
  {title: "Emergency Services", phone: "911"},
  {title: "Truckers Against Trafficking", phone: "(888) 373-7888"},
  {title: "Benefits", phone: "(877) 856-7711"},
  {title: "Canada Briefing Line", phone: "(800) 433-7432"},
  {title: "Driver Placement", phone: "(800) 721-1025"},
  {title: "Driver Relations", phone: "(800) 843-0575"},
  {title: "Equipment Hotline", phone: "(866) 914-3380"},
  {title: "Fuel Department", phone: "(866) 902-3896"},
  {title: "Human Resources", phone: "(402) 894-3001"},
  {title: "Logs", phone: "(800) 646-0536"},
  {title: "Logs Telephone Test", phone: "(800) 460-0017"},
  {title: "Payroll", phone: "(800) 227-6849"},
  {title: "Permint Department", phone: "(800) 362-3076"},
  {title: "Pets/Pass", phone: "(866) 702-9372"},
  {title: "Risk Department", phone: "(800) 431-8216"},
  {title: "Road Breakdown", phone: "(800) 228-0013"},
  {title: "Werner Main", phone: "(800) 228-2240"},
]

const delay = ms => new Promise(res => setTimeout(res, ms));

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(public routerOutlet: IonRouterOutlet) {
    this.function();
  }

  public data: boolean = false;

  function = async () => {
    await delay(2000);
    this.data = true;
  };

  public selectedSegment: string = 'departments';

  segmentChanged(event:any) {
    this.selectedSegment=event.target.value
  }

  contacts = CONTACTS_DATA;
  terminals = TERMINALS_DATA;
}
