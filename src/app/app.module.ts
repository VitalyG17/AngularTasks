import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {SecondTaskComponent} from './pages/second-task/second-task.component';
import {FirstTaskComponent} from './pages/first-task/first-task.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, SecondTaskComponent, FirstTaskComponent, ErrorPageComponent, NavigationComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
