import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterHomeComponent } from './components/master-home/master-home.component';


import { HomeRoutingModule } from './home-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';


import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [MasterHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule,
    TranslateModule
  ]
})
export class HomeModule {}
