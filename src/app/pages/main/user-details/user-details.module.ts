import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDetailsPageRoutingModule } from './user-details-routing.module';

import { UserDetailsPage } from './user-details.page';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDetailsPageRoutingModule
  ],
  declarations: [
    UserDetailsPage,
    InfoItemComponent,
  ],
  providers: [
    DatePipe,
  ]
})
export class UserDetailsPageModule {}
