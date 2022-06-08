import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

export interface detail{
  title: string,
  data: string
}

export interface data{
  title: string,
  current: string,
  ytd: string
}

const DATA_DATA: data[] = [
  {title: "Gross Earnings", current: "$641.21", ytd: "$45,300.34"},
  {title: "Reinbursements", current: "", ytd: ""},
  {title: "Taxes", current: "$112.36", ytd: "$16,450.12"},
  {title: "Deductions", current: "$84.58", ytd: ""},
  {title: "Advances", current: "", ytd: ""},
  {title: "Net Pay", current: "$1200.23", ytd: "$62,781.20"},
]

const DETAIL_DATA: detail[] = [
  {title: "Company", data: "Werner Enterprises"},
  {title: "Check #", data: "4106505"},
  {title: "Employee", data: "Wan D Hitchcock Jr."},
  {title: "Check Date", data: "12/09/2021"},
  {title: "Tax State", data: "CA"},
  {title: "Direct Deposit", data: "Y"},
]

@Component({
  selector: 'app-pay-details',
  templateUrl: './pay-details.component.html',
  styleUrls: ['./pay-details.component.scss'],
})
export class PayDetailsComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  public grosspay: boolean = false;
  detail = DETAIL_DATA;
  data = DATA_DATA;

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  ngOnInit() {}

}
