import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigation: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.navigation = [
      {label: 'Person List', icon: 'fa-users', routerLink: '/persons', routerLinkActiveOptions: '{exact: true}'},
      {label: 'Search', icon: 'fa-search', routerLink: '/search', routerLinkActiveOptions: '{exact: true}'},
    ];
  }

}
