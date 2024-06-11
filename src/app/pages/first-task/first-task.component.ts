import {Component} from '@angular/core';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.scss'],
})
export class FirstTaskComponent {
  protected count: number = 0;

  protected updateCounter(increment: boolean): void {
    this.count += increment ? 1 : -1;
  }
}
