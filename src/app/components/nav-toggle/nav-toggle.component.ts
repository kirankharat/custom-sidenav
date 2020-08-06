import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavService } from 'src/app/services/navService/nav.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-nav-toggle',
  templateUrl: './nav-toggle.component.html',
  styleUrls: ['./nav-toggle.component.css']
})
export class NavToggleComponent implements OnInit {
  isClick: boolean;
  @Output() valueChange = new EventEmitter();

  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.navService.isClick.subscribe(res =>
      this.isClick = res
      );
  }
  toggleNav() {
    this.navService.isClick.next(!this.isClick);
  }

}
