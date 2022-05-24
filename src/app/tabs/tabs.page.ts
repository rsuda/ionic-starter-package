import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  activeHomepage = false;
  activeJobspage = false;
  activeMappage = false;
  activePaypage = false;
  activeMorepage = false;

  constructor() {
    this.activeHomepage = true;
  }

  changeIcon(page) {
    if (page == 'home') {
      this.activeHomepage = true;
      this.activePaypage = false;
      this.activeMappage = false;
      this.activeJobspage = false;
      this.activeMorepage = false;
    } else if (page == 'jobs') {
      this.activeHomepage = false;
      this.activePaypage = false;
      this.activeMappage = false;
      this.activeJobspage = true;
      this.activeMorepage = false;
    } else if (page == 'map') {
      this.activeHomepage = false;
      this.activePaypage = false;
      this.activeMappage = true;
      this.activeJobspage = false;
      this.activeMorepage = false;
    }else if (page == 'pay') {
      this.activeHomepage = false;
      this.activePaypage = true;
      this.activeMappage = false;
      this.activeJobspage = false;
      this.activeMorepage = false;
    }else {
      this.activeHomepage = false;
      this.activePaypage = false;
      this.activeMappage = false;
      this.activeJobspage = false;
      this.activeMorepage = true;
    }

  }

}
