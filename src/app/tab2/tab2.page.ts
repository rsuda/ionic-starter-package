import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { IonRouterOutlet } from '@ionic/angular';
import { PayDetailsComponent } from '../pay-details/pay-details.component';
import { VideoComponent } from '../video/video.component';


export interface pay{
  date: string,
  amount: string
}


const PAY_DATA: pay[] = [
  {date: "December 9, 2021", amount: "$1,234.12"},
  {date: "December 2, 2021", amount: "$1,234.12"},
  {date: "November 26, 2021", amount: "$1,234.12"},
  {date: "December 2, 2021", amount: "$898.49"},
  {date: "November 18, 2021", amount: "$1,234.12"},
  {date: "November 11, 2021", amount: "$1,089.57"},
  {date: "November 4, 2021", amount: "$$1,089.57"},
  {date: "September 29, 2021", amount: "$1,089.57"},
  {date: "September 22, 2021", amount: "$1,089.57"},
  {date: "September 15, 2021", amount: "$1,089.57"},
  {date: "September 8, 2021", amount: "$1,200.00"},
  {date: "September 1, 2021", amount: "$1,200.00"},
  {date: "August 25, 2021", amount: "$1,200.00"},
  {date: "August 18, 2021", amount: "$1,200.00"},
  {date: "August 11, 2021", amount: "$1,200.00"},
  {date: "August 4, 2021", amount: "$1,200.00"},
]


const delay = ms => new Promise(res => setTimeout(res, ms));

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  isOpen: boolean = false;
  pay = PAY_DATA;

  modal: HTMLElement;

  public data: boolean = false;

  function = async () => {
    await delay(2000);
    this.data = true;
  };

  constructor(public actionSheetController: ActionSheetController,
    public modalController: ModalController,
    public routerOutlet: IonRouterOutlet,) {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async options() {
    const options = {
      component: PayDetailsComponent,
      cssClass: 'custom-modal',
      swipeToClose: true,

    };
    const modal = await this.modalController.create(options);
    await modal.present();
  }

  async video() {
    const options = {
      component: VideoComponent,
      cssClass: 'video-modal',
      swipeToClose: false,

    };
    const modal = await this.modalController.create(options);
    await modal.present();
  }

  ngOnInit(){
    this.function();
  }


}
