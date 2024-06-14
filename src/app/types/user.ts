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

export class Address {
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
