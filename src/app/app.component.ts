import { Observable } from 'rxjs';

import { Component } from '@angular/core';

import { Jinkan } from './model/anime.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  animesList$: Observable<Jinkan[]>;

  constructor() {}
}
