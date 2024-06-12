import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'transformDate',
})
export class TransformDatePipe implements PipeTransform {
  private getJulianDate(date: Date): Date {
    const day: number = date.getDate();
    const month: number = date.getMonth() + 1;
    const year: number = date.getFullYear();

    let difference: number = 0;

    if (year < 1582 || (year === 1582 && (month < 10 || (month === 10 && day < 15)))) {
      difference = 0;
    } else if (year < 1700 || (year === 1700 && (month < 3 || (month === 3 && day <= 11)))) {
      difference = 10;
    } else if (year < 1800 || (year === 1800 && (month < 3 || (month === 3 && day <= 12)))) {
      difference = 11;
    } else if (year < 1900 || (year === 1900 && (month < 3 || (month === 3 && day <= 13)))) {
      difference = 12;
    } else if (year < 2100 || (year === 2100 && (month < 3 || (month === 3 && day <= 14)))) {
      difference = 13;
    } else if (year < 2200 || (year === 2200 && (month < 3 || (month === 3 && day <= 15)))) {
      difference = 14;
    } else if (year < 2300 || (year === 2300 && (month < 3 || (month === 3 && day <= 16)))) {
      difference = 15;
    }
    date.setDate(date.getDate() - difference);
    return date;
  }
  public transform(value: Date, calendarType: string): Date | number | string {
    const currentDate: Date = new Date(value);
    switch (calendarType) {
      case 'gregorian':
        return currentDate;
      case 'julian':
        return this.getJulianDate(currentDate);
      case 'orthodox':
        return this.getJulianDate(currentDate).setFullYear(value.getFullYear() + 5508);
      default:
        return '';
    }
  }
}
