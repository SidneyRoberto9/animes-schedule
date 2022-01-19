import { Component, Input, OnInit } from '@angular/core';
import { Jinkan } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-card-admin-anime',
  templateUrl: './card-admin-anime.component.html',
  styleUrls: ['./card-admin-anime.component.scss']
})
export class CardAdminAnimeComponent{
  @Input() animes: Jinkan;

  constructor(public animesService: AnimesService) {}

  openDetails(): void {
    this.animesService.setActualAnime(this.animes);
  }


}
