import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DatumSearch, Jinkan } from '../model/anime.model';

@Injectable({
  providedIn: 'root',
})
export class GlobalVariablesService {
  private dayWeekSource = new BehaviorSubject<number>(-1);
  getDayWeek$ = this.dayWeekSource.asObservable();

  details = new BehaviorSubject<boolean>(true);
  detailsSearch = new BehaviorSubject<boolean>(true);

  Actualanime = new BehaviorSubject<Jinkan>({} as Jinkan);
  ActualanimeSearch = new BehaviorSubject<DatumSearch>({} as DatumSearch);

  constructor() {}
  setActualAnime(anime: Jinkan) {
    this.Actualanime.next(anime);
  }

  getActualAnime() {
    return this.Actualanime.asObservable();
  }

  setActualAnimeSearch(anime: DatumSearch) {
    this.ActualanimeSearch.next(anime);
  }

  getActualAnimeSearch() {
    return this.ActualanimeSearch.asObservable();
  }

  setDetails(details: boolean) {
    this.details.next(details);
  }

  getDetails() {
    return this.details.asObservable();
  }

  setDetailsSearch(details: boolean) {
    this.detailsSearch.next(details);
  }

  getDetailsSearch() {
    return this.detailsSearch.asObservable();
  }

  setWeekDay(day: number): void {
    this.dayWeekSource.next(day);
  }
}
