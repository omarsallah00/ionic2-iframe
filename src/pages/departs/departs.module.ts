import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Departs } from './departs';

@NgModule({
  declarations: [
    Departs,
  ],
  imports: [
    IonicPageModule.forChild(Departs),
  ],
  exports: [
    Departs
  ]
})
export class DepartsModule {}
