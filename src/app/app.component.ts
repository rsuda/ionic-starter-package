import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Jobs', url: '/color-palette/color-palette', icon: ''},
    { title: 'Pay', url: '/typography/typography', icon: '' },
    { title: 'Driver Referral', url: '/color-palette/color-palette', icon: ''},
    { title: 'Driving Opportunities', url: '/typography/typography', icon: '' },
    { title: 'Contacts', url: '/color-palette/color-palette', icon: ''},
    { title: 'Workday Learning', url: '/typography/typography', icon: '' },
    { title: 'Messages', url: '/color-palette/color-palette', icon: ''},
    { title: 'News', url: '/typography/typography', icon: '' },
    { title: 'Profile', url: '/color-palette/color-palette', icon: ''},
    { title: 'Reference Library', url: '/typography/typography', icon: '' },
    { title: 'Employee Resource', url: '/color-palette/color-palette', icon: ''},
    { title: 'Map', url: '/typography/typography', icon: '' },
    { title: 'Urgent Care', url: '/color-palette/color-palette', icon: ''},
    { title: 'Safety', url: '/typography/typography', icon: '' },
    { title: 'Customize Home Screen', url: '/color-palette/color-palette', icon: ''},
    { title: 'Settings', url: '/typography/typography', icon: '' },
    { title: 'Sign out', url: '/color-palette/color-palette', icon: ''},
  ];

  constructor() {}
}
