import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxBootstrapModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    NgxBootstrapModule,
    RouterModule
  ]
})
export class SharedModule { }
