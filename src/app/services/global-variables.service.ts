import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalVariablesService {
  private dayWeekSource = new BehaviorSubject<number>(-1);
  getDayWeek$ = this.dayWeekSource.asObservable();

  constructor() {}

  setWeekDay(day: number): void {
    this.dayWeekSource.next(day);
  }
}
