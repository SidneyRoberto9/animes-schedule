import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/components/animes/anime.model';

@Component({
  selector: 'app-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.scss']
})
export class CardAnimeComponent{
  @Input() day?: String;
  @Input() animes?: Anime;

}
