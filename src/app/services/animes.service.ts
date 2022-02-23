import Parse from 'parse';
import { BehaviorSubject, defer, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  DatumSearch,
  Jinkan,
  RootObject,
  RootObjectSearch,
} from '../model/anime.model';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  animes$: Observable<Jinkan[]>;
  datumSearch$: Observable<DatumSearch[]>;

  BASE_SEARCH_URL: string =
    'https://api.jikan.moe/v4/anime?q=${busca}&order_by=rank';
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

  search(busca: string): void {
    this.BASE_SEARCH_URL = `https://api.jikan.moe/v4/anime?q=${busca}&order_by=popularity&sfw=true`;
    this.datumSearch$ = this.http
      .get<RootObjectSearch>(this.BASE_SEARCH_URL)
      .pipe(
        map((content) => {
          const datum = content.data;
          const datumAnimes: DatumSearch[] = datum.map(
            ({
              mal_id,
              url,
              images,
              trailer,
              title,
              title_english,
              title_japanese,
              title_synonyms,
              type,
              source,
              episodes,
              status,
              airing,
              aired,
              duration,
              rating,
              score,
              scored_by,
              rank,
              popularity,
              members,
              favorites,
              synopsis,
              background,
              season,
              year,
              broadcast,
              producers,
              licensors,
              studios,
              genres,
              explicit_genres,
              themes,
              demographics,
            }) => {
              const animeGenres = [
                genres,
                themes,
                demographics,
                explicit_genres,
              ];
              return {
                mal_id,
                url,
                images,
                trailer,
                title,
                title_english,
                title_japanese,
                title_synonyms,
                type,
                source,
                episodes,
                status,
                airing,
                aired,
                duration,
                rating,
                score,
                scored_by,
                rank,
                popularity,
                members,
                favorites,
                synopsis,
                background,
                season,
                year,
                broadcast,
                producers,
                licensors,
                studios,
                genres: animeGenres.flatMap((genre) => genre),
              };
            }
          );
          return datumAnimes;
        })
      );
  }
}
