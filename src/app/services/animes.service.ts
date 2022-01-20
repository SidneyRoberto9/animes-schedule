import Parse from 'parse';
import { BehaviorSubject, defer, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Jinkan, RootObject } from '../model/anime.model';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  details = new BehaviorSubject<boolean>(true);
  Actualanime = new BehaviorSubject<Jinkan>({} as Jinkan);
  animes$: Observable<Jinkan[]>;
  private readonly BASE_URL = 'https://api.jikan.moe/v3/season';

  constructor(private http: HttpClient) {
    Parse.serverURL = 'https://parseapi.back4app.com';
    Parse.initialize(environment.APPLICATION_ID, environment.JS_KEY);
  }

  getData(): void {
    this.animes$ = this.http.get<RootObject>(this.BASE_URL).pipe(
      map((data) => {
        const animes = data.anime;
        const jikanAnimes: Jinkan[] = animes.map(
          ({
            mal_id,
            title,
            image_url,
            synopsis,
            airing_start,
            genres,
            producers,
            score,
            themes,
            demographics,
            explicit_genres,
            r18,
            kids,
          }) => {
            const date = -1;
            const [animeProducers] = producers;
            const animeGenres = [genres, themes, demographics, explicit_genres];
            return {
              mal_id,
              title,
              image_url,
              synopsis,
              airing_start: date,
              genres: animeGenres.flatMap((genre) => genre),
              producers: animeProducers,
              score,
              r18,
              kids,
            };
          }
        );
        return jikanAnimes;
      })
    );
  }

  getAnimes(): void {
    const query = new Parse.Query('AnimeList');
    const queryFind = query.findAll();
    this.animes$ = defer(async () => {
      const data = await queryFind;
      const animeList = data.map(({ attributes }) => {
        const data = { ...attributes };
        delete data['createdAt'];
        delete data['updatedAt'];
        return data as Jinkan;
      });
      return animeList;
    });
  }

  setActualAnime(anime: Jinkan) {
    this.Actualanime.next(anime);
  }

  getActualAnime() {
    return this.Actualanime.asObservable();
  }

  setDetails(details: boolean) {
    this.details.next(details);
  }

  getDetails() {
    return this.details.asObservable();
  }
}
