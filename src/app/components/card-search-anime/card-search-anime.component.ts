import { Component, Input } from '@angular/core';
import { DatumSearch } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-card-search-anime',
  templateUrl: './card-search-anime.component.html',
  styleUrls: ['./card-search-anime.component.scss'],
})
export class CardSearchAnimeComponent {
  @Input() anime: DatumSearch;
  detalhes: boolean;

  constructor(public animesService: AnimesService) {
    this.animesService.getDetailsSearch().subscribe((detalhes) => {
      this.detalhes = detalhes;
    });
  }

  openDetails(): void {
    this.animesService.setActualAnimeSearch(this.anime);
    this.animesService.setDetailsSearch(!this.detalhes);
    console.log(this.detalhes);
  }
}
