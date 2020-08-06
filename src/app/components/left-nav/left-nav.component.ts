import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  navList: { name: string; icon: string; title: string; url: string; }[];

  constructor() { }

  ngOnInit(): void {
    this.navList = [{ 'name': 'Home', 'icon': 'home icon', 'title':'Home', 'url':'/home' },
    { 'name': 'Data Exchange', 'icon': 'dvr icon', 'title':'Data Exchange', 'url':'/data-exchange' },
    { 'name': 'Data Subscribed', 'icon': 'dashboard icon', 'title':'Data Subscribed', 'url':'/data-subscribed' },
    { 'name': 'Android', 'icon': 'android icon', 'title':'Android', 'url':'/android' },
    { 'name': 'Language', 'icon': 'language icon', 'title':'Language', 'url':'/language' }]
  }

}
