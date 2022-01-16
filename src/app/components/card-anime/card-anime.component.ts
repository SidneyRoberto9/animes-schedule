import { Jinkan } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DetailAnimeComponent } from '../detail-anime/detail-anime.component';

@Component({
  selector: 'app-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.scss']
})
export class CardAnimeComponent{
  @Input() day?: number;
  @Input() animes: Jinkan;
  constructor(public animesService: AnimesService) {}

  openDetails(): void {
    this.animesService.setActualAnime(this.animes);
    this.animesService.details.next(false);
  }

  
}
