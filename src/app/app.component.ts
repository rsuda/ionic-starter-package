import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Jobs', url: '/color-palette/color-palette', icon: 'car'},
    { title: 'Pay', url: '/typography/typography', icon: 'cash' },
    { title: 'Driver Referral', url: '/color-palette/color-palette', icon: 'thumbs-up'},
    { title: 'Driving Opportunities', url: '/typography/typography', icon: 'briefcase' },
    { title: 'Contacts', url: '/color-palette/color-palette', icon: 'people'},
    { title: 'Workday Learning', url: '/typography/typography', icon: 'nuclear' },
    { title: 'Messages', url: '/color-palette/color-palette', icon: 'chatbox'},
    { title: 'News', url: '/typography/typography', icon: 'newspaper' },
    { title: 'Profile', url: '/color-palette/color-palette', icon: 'person'},
    { title: 'Reference Library', url: '/typography/typography', icon: 'library' },
    { title: 'Employee Resource', url: '/color-palette/color-palette', icon: 'tv'},
    { title: 'Map', url: '/typography/typography', icon: 'map' },
    { title: 'Urgent Care', url: '/color-palette/color-palette', icon: 'heart'},
    { title: 'Safety', url: '/typography/typography', icon: 'shield-checkmark' },
    { title: 'Customize Home Screen', url: '/color-palette/color-palette', icon: 'hammer'},
    { title: 'Settings', url: '/typography/typography', icon: 'settings'},
    { title: 'Sign out', url: '/color-palette/color-palette', icon: 'log-out'},
  ];

  constructor() {}
}
