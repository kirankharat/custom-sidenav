import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { RightContainerComponent } from './components/right-container/right-container.component';
// import { LeftContainerComponent } from './components/left-container/left-container.component';
// import { MainContainerComponent } from './components/main-container/main-container.component';
// import { LeftNavComponent } from './components/left-nav/left-nav.component';
// import { FooterComponent } from './components/footer-component/footer-component';
// import { MasterContainerComponent } from './components/master-container/master-container.component';
// import { HeaderComponentComponent } from './components/header-component/header-component.component';
//import { NavToggleComponent } from '/components/nav-toggle/nav-toggle.component';

import { NavToggleComponent } from './components/nav-toggle/nav-toggle.component';
import { NavService } from './services/nav-service/nav.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    // FooterComponent, 
    // HeaderComponentComponent,
    // MainContainerComponent,
    // LeftContainerComponent,
    // RightContainerComponent,
    // LeftNavComponent,
    // MasterContainerComponent,
     NavToggleComponent 
    ],
  bootstrap: [ AppComponent ],
  providers: [NavService]
})
export class AppModule { }
