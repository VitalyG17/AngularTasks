import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';

export class User {
  public id: number;
  public name: string;
  public surname: string;
  public age: number;
  public hobby: string[];
  public address: Address;

  constructor(id: number, name: string, surname: string, age: number, hobby: string[], address: Address) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.hobby = hobby;
    this.address = address;
  }
}

class Address {
  public id: number;
  public street: string;
  public numberHome: number;

  constructor(id: number, street: string, numberHome: number) {
    this.id = id;
    this.street = street;
    this.numberHome = numberHome;
  }
  public get fullAddress(): string {
    return `${this.street} ${this.numberHome}`;
  }
}

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
