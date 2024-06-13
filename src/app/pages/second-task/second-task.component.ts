import {Component} from '@angular/core';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.scss'],
})
export class SecondTaskComponent {
  protected currentDate: Date = new Date();
  protected oneDayTime: number = 24 * 60 * 60 * 1000;

  protected changeDay(increment: number): void {
    this.currentDate = new Date(this.currentDate.getTime() + increment * this.oneDayTime);
  }
}
