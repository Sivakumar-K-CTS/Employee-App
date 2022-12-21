import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUpdateComponent } from './components/add-update/add-update.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { EmployeeDetailsViewComponent } from './components/employee-details-view/employee-details-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUpdateComponent,
    NavBarComponent,
    EmployeeViewComponent,
    EmployeeDetailsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
