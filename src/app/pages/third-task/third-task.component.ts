import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {HttpService, User} from 'src/app/services/http.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-third-task',
  templateUrl: './third-task.component.html',
  styleUrls: ['./third-task.component.scss'],
  providers: [HttpService],
})
export class ThirdTaskComponent implements OnInit, OnDestroy {
  protected users: User[] = [];
  private subscription: Subscription = new Subscription();
  private readonly httpService: HttpService = inject(HttpService);

  public ngOnInit(): void {
    this.subscription = this.httpService.getData().subscribe((users: User[]): void => {
      this.users = users;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
