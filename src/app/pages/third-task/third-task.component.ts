import {Component, OnInit} from '@angular/core';
import {HttpService, User} from 'src/app/services/http.service';

@Component({
  selector: 'app-third-task',
  templateUrl: './third-task.component.html',
  styleUrls: ['./third-task.component.scss'],
})
export class ThirdTaskComponent implements OnInit {
  protected users: User[] = [];

  constructor(private httpService: HttpService) {}

  public ngOnInit(): void {
    this.httpService.getData().subscribe((users: User[]): void => {
      this.users = users;
    });
  }
}
