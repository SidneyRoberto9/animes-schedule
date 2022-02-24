import { heroResult } from 'src/app/model/heroku.model';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.scss'],
})
export class CardAnimeComponent {
  @Input() day: string;
  @Input() animes: heroResult;

  constructor(private global: GlobalVariablesService) {}
}
