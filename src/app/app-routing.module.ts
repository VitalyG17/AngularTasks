import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstTaskComponent} from './pages/first-task/first-task.component';
import {SecondTaskComponent} from './pages/second-task/second-task.component';
import {ErrorPageComponent} from './pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: FirstTaskComponent,
  },
  {
    path: 'second-task',
    component: SecondTaskComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
