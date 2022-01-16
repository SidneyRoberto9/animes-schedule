import { Observable } from 'rxjs';

import { Component, Input } from '@angular/core';

import { Jinkan } from '../../model/anime.model';

@Component({
  selector: 'app-display-animes',
  templateUrl: './display-anime.component.html',
  styleUrls: ['./display-anime.component.scss']
})
export class DisplayAnimeComponent {
  @Input() day?: number;
  @Input() animes$?: Observable<Jinkan[]>;
  @Input() detalhes?: boolean;

}
