import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Jinkan, RootObject } from '../model/anime.model';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  constructor(private http: HttpClient) {}
  details = new BehaviorSubject<boolean>(true);
  Actualanime = new BehaviorSubject<Jinkan>({} as Jinkan);

  private readonly BASE_URL = 'https://api.jikan.moe/v3/season';
  animes$: Observable<Jinkan[]>;

  getAnimes(): void {
    this.animes$ = this.http.get<RootObject>(this.BASE_URL).pipe(
      map((data) => {
        const animes = data.anime;
        const jikanAnimes: Jinkan[] = animes.map(
          ({
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
            const date = new Date(airing_start).getDay();
            const [animeProducers] = producers;
            const animeGenres = [genres, themes, demographics, explicit_genres];
            return {
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

  setActualAnime(anime: Jinkan){
    this.Actualanime.next(anime);
  }

  getActualAnime(){
    return this.Actualanime.asObservable();
  }

  setDetails(details: boolean){
    this.details.next(details);
  }

  getDetails(){
    return this.details.asObservable();
  }
}
