import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';
import {User, Address} from '../types/user';

@Injectable()
export class HttpService {
  private readonly url: string = 'http://localhost:3000/users';

  constructor(private readonly http: HttpClient) {}

  public getData(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      map((users: User[]) =>
        users.map(
          (user: User) =>
            new User(
              user.id,
              user.name,
              user.surname,
              user.age,
              user.hobby,
              new Address(user.address.id, user.address.street, user.address.numberHome),
            ),
        ),
      ),
      catchError((err: unknown) => {
        console.error('Error!', err);
        return of([]);
      }),
    );
  }
}
