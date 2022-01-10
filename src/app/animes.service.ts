import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Anime } from './anime.model';
import { ANIMES } from './mock-animes';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {
  getAnimes(): Observable<Anime[]> {
    const animes = of(ANIMES);

    return animes;
  }
}
