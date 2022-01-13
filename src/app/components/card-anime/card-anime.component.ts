import { Component, Input} from '@angular/core';
import { Jinkan } from 'src/app/model/anime.model';

@Component({
  selector: 'app-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.scss']
})
export class CardAnimeComponent{
  @Input() day?: number;
  @Input() animes?: Jinkan;

  constructor() {}
}
