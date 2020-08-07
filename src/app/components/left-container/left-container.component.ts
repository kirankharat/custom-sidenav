import { Component, OnInit, Inject } from '@angular/core';
//import { NavService } from '../../services/navService/nav.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.css']
})
export class LeftContainerComponent implements OnInit {
  isClick: boolean;
  recievedValue: boolean;
  // constructor(private navService: NavService, @Inject(DOCUMENT) private document: Document) { }
  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngOnInit(): void {
    // this.navService.isClick.subscribe(res =>
    //     this.isClick = res
    //   )
    //   console.log(this.isClick);

    }
}
