import { Jinkan } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

import { Component, Input } from '@angular/core';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.scss'],
})
export class CardAnimeComponent {
  @Input() day?: number;
  @Input() animes: Jinkan;
  @Input() filterValue: string = 'public';
  constructor(private global: GlobalVariablesService) {}

  openDetails(): void {
    this.global.setActualAnime(this.animes);
    this.global.details.next(false);
  }
}
