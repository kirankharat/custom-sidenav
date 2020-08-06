import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { AppService } from '../../services/app.service';
import { messages} from '../../resource-bundle/message';


@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.html',
  styleUrls: ['./footer-component.less']
})
export class FooterComponent implements OnInit {

  isShow: boolean;
  topPosToStartShowing = 100;

  logoimage:string=""
  logohovertext:string=""
  public messages=messages

  getLogoImage(url:string):string{
    return this.logoimage
  }
  constructor(private appservice:AppService) {

  }

  ngOnInit() {
    this.getHeaderLogo()
  }

  getHeaderLogo=()=>{
  }

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;


    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  public chnageTheme(){
    document.body.classList.toggle('dark');
  }

}
