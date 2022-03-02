import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatumSearch, RootObjectSearch } from '../model/anime.model';
import { heroModel, heroResult } from '../model/heroku.model';
import { GlobalVariablesService } from './global-variables.service';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  datumSearch$: Observable<DatumSearch[]>;
  animesHeroku$: Observable<heroResult[]>;

  BASE_URL_HEROKU = 'https://animes-schedule-api.herokuapp.com/animes';
  BASE_SEARCH_URL = 'https://api.jikan.moe/v4/anime?q=${busca}&order_by=rank';
  BetterAnimeLink = 'https://betteranime.net/anime/legendado/';

  constructor(
    private http: HttpClient,
    private global: GlobalVariablesService
  ) {}

  formatLink(link: string) {
    link = link.toLowerCase();
    link = link.replace(' (tv)', '');
    link = link.replace(/:/g, '');
    link = link.replace(/ /g, '-');

    return link;
  }

  async getAnimesHeroku() {
    this.animesHeroku$ = await this.http
      .get<heroModel[]>(this.BASE_URL_HEROKU)
      .pipe(
        map((data) => {
          return data.map((animesHeroku: heroModel) => {
            const url = this.formatLink(animesHeroku.title);
            return {
              title: animesHeroku.title,
              image_url: animesHeroku.image_url,
              weekday: animesHeroku.weekday,
              airing: animesHeroku.airing,
              external_links: [
                {
                  name: 'BetterAnime',
                  url: this.BetterAnimeLink + url,
                },
              ],
            };
          });
        })
      );
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
