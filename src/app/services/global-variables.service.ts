import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

import { DatumSearch, Jinkan } from '../model/anime.model';

@Injectable({
  providedIn: 'root',
})
export class GlobalVariablesService {
  private dayWeekSource = new BehaviorSubject<string>('todos');
  getDayWeek$ = this.dayWeekSource.asObservable();
  loading = new BehaviorSubject<boolean>(true);
  detailsSearch = new BehaviorSubject<boolean>(true);
  ActualanimeSearch = new BehaviorSubject<DatumSearch>({} as DatumSearch);

  constructor() {}
  setLoading(loading: boolean): void {
    this.loading.next(loading);
  }

  getLoading() {
    return this.loading.asObservable();
  }

  setActualAnimeSearch(anime: DatumSearch) {
    this.ActualanimeSearch.next(anime);
  }

  getActualAnimeSearch() {
    return this.ActualanimeSearch.asObservable();
  }

  setDetailsSearch(details: boolean) {
    this.detailsSearch.next(details);
  }

  getDetailsSearch() {
    return this.detailsSearch.asObservable();
  }

  setWeekDay(day: string): void {
    this.dayWeekSource.next(day);
  }
}
