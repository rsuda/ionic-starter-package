import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NgCircleProgressModule } from 'ng-circle-progress';


interface mission {
  image: string;
  title: string;
  description: string;
  points: number;
}

interface progressmission {
  image: string;
  title: string;
  description: string;
  points: number;
  progress: number;
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const COMPLETED: mission[] = [] = [
  {image: "../../../../assets/missions/werner-dwp-badges_leadership.png", title: "Leadership Lv3", description: "Complete 3,000 Miles accident free", points: 1000},
  {image: "../../../../assets/missions/werner-dwp-badges_safe miles.png", title: "Safe Miles Lv1", description: "Complete 3,000 Miles accident free",  points: 1000},
  {image: "../../../../assets/missions/werner-dwp-badges_safe miles.png", title: "Safe Miles Lv2", description: "Complete 6,000 Miles accident free",  points: 1500},
  {image: "../../../../assets/missions/werner-dwp-badges_safe stops.png", title: "Safe Stop Lv1", description: "Complete 100 stops accident free",  points: 1000},
  {image: "../../../../assets/missions/werner-dwp-badges_leadership.png", title: "LeadershipLv2", description: "Complete 3,000 Miles accident free",  points: 1000},
  {image: "../../../../assets/missions/werner-dwp-badges_safe miles.png", title: "Safe Miles Lv3", description: "Complete 10,000 Miles accident free",  points: 1000},
  {image: "../../../../assets/missions/werner-dwp-badges_pre-trip inspection.png", title: "Pre-Trip Inspection Lv2", description: "Complete 200 Pre-Trip Inspections",  points: 1500},
  {image: "../../../../assets/missions/werner-dwp-badges_referrals.png", title: "Referrals Lv1", description: "Refer 1 driver that get hired",  points: 1000},
  {image: "../../../../assets/missions/werner-dwp-badges_learning.png", title: "Learning Lv1", description: "Complete learning module 1",  points: 1000},
  {image: "../../../../assets/missions/werner-dwp-badges_referrals.png", title: "Referrals Lv2", description: "Refer 2 drivers that get hired",  points: 1000}
];

const INPROGRESS: progressmission[] = [] = [
  {image: "../../../../assets/missions/werner-dwp-badges_safe miles disabled.png", title: "Safe Miles Lv3", description: "Complete 9,000 Miles accident free", points: 1500, progress: 0.5},
  {image: "../../../../assets/missions/werner-dwp-badges_safe miles disabled.png", title: "Learning", description: "Complete Onboarding Module",  points: 850, progress: 0.75},
  {image: "../../../../assets/missions/werner-dwp-badges_safe stops disabled.png", title: "Safe Stop Lv2", description: "Complete 100,000 Miles accident free",  points: 1000, progress: 0.75}
];

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {

  constructor(public loadingController: LoadingController){

  }

  doughnutChart: any;
  mission = COMPLETED;
  progressmission = INPROGRESS;
  public redeem: boolean = false;
  public data: boolean = true;

  public selectedSegment: string = 'in-progress';


  segmentChanged(event:any) {
    this.selectedSegment=event.target.value
  }

  asyncSkeleton = async () => {
    await delay(2000);
    this.data = false;
  };

  async redeemPoints(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.redeem = true;
    console.log(this.redeem)
  }

  ngOnInit() {
  }

}
