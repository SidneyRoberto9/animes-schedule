import { DatumSearch } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-search-anime',
  templateUrl: './card-search-anime.component.html',
  styleUrls: ['./card-search-anime.component.scss'],
})
export class CardSearchAnimeComponent {
  @Input() anime: DatumSearch;
  detalhes: boolean;

  constructor(private global: GlobalVariablesService) {
    this.global.getDetailsSearch().subscribe((detalhes) => {
      this.detalhes = detalhes;
    });
  }

  openDetails(): void {
    this.global.setActualAnimeSearch(this.anime);
    this.global.setDetailsSearch(!this.detalhes);
  }
}
