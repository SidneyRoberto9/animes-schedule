import { Observable } from 'rxjs';
import { DatumSearch, Jinkan } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-search-anime',
  templateUrl: './details-search-anime.component.html',
  styleUrls: ['./details-search-anime.component.scss'],
})
export class DetailsSearchAnimeComponent implements OnInit {
  @Input() details: Observable<boolean>;
  detalhes: boolean;
  data: DatumSearch;

  constructor(private animesService: AnimesService) {
    this.animesService
      .getActualAnimeSearch()
      .subscribe((anime) => (this.data = anime));
  }

  ngOnInit(): void {
    this.animesService
      .getDetailsSearch()
      .subscribe((details) => (this.detalhes = details));
  }

  hideDetalhes() {
    this.animesService.setDetailsSearch(!this.details);
  }
}
