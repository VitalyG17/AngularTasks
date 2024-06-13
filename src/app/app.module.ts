import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {SecondTaskComponent} from './pages/second-task/second-task.component';
import {FirstTaskComponent} from './pages/first-task/first-task.component';
import {ErrorPageComponent} from './pages/error-page/error-page.component';
import {NavigationComponent} from './navigation/navigation.component';
import {TransformDatePipe} from './pipes/transform-date.pipe';
import {ThirdTaskComponent} from './pages/third-task/third-task.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondTaskComponent,
    FirstTaskComponent,
    ErrorPageComponent,
    NavigationComponent,
    TransformDatePipe,
    ThirdTaskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
