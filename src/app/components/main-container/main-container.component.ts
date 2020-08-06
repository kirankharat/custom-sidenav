import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav-service/nav.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  isClick: boolean;

  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.navService.isClick.subscribe(res =>
      this.isClick = res
    )
    console.log(this.isClick);
  }

}
