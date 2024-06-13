import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';

export class User {
  public id: number;
  public name: string;
  public surname: string;
  public age: number;
  public hobby: string[];

  constructor(id: number, name: string, surname: string, age: number, hobby: string[]) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.hobby = hobby;
  }
}

@Injectable()
export class HttpService {
  private readonly url: string = 'http://localhost:3000/users';

  constructor(private readonly http: HttpClient) {}

  public getData(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      catchError((err: unknown) => {
        console.error('Error!', err);
        return of([]);
      }),
    );
  }
}
