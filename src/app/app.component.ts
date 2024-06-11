import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected count: number = 0;

  protected updateCounter(increment: boolean): void {
    this.count += increment ? 1 : -1;
  }
}
