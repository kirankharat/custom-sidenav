import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MainContainerComponent } from './components/main-container/main-container.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { LeftContainerComponent } from './components/left-container/left-container.component';
import { RightContainerComponent } from './components/right-container/right-container.component';
import { MasterContainerComponent } from './components/master-container/master-container.component';
import { FooterComponent } from './components/footer-component/footer-component';
//import { HeaderComponentComponent } from './components/header-component/header-component.component';
//import { NavToggleComponent } from '/components/nav-toggle/nav-toggle.component';
import { NavService } from './services/nav-service/nav.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatTooltipModule, MatSidenavModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    MainContainerComponent,
    LeftContainerComponent,
    LeftNavComponent,
    RightContainerComponent,
    MasterContainerComponent,
    //FooterComponent, 
    //HeaderComponentComponent,
    //MainContainerComponent,
     //NavToggleComponent 
    ],
  bootstrap: [ AppComponent ],
  providers: [NavService]
})
export class AppModule { }
