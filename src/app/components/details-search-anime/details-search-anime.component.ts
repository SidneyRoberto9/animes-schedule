import { Observable } from 'rxjs';
import { DatumSearch, Genre, Jinkan } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

import { Component, Input, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-details-search-anime',
  templateUrl: './details-search-anime.component.html',
  styleUrls: ['./details-search-anime.component.scss'],
})
export class DetailsSearchAnimeComponent implements OnInit {
  @Input() details: Observable<boolean>;
  detalhes: boolean;
  data: DatumSearch;
  genre: string[];
  studios: string[];
  producers: string[];
  licensors: string[];

  constructor(private global: GlobalVariablesService) {
    this.global
      .getActualAnimeSearch()
      .subscribe((anime) => (this.data = anime));

    this.defineList(this.data);
  }

  defineList(data: DatumSearch) {
    this.genre = [...this.data.genres].map((g, i) => {
      if (this.data.genres.length - 1 > i) {
        return ' ' + g.name;
      }
      return ' ' + g.name + '.';
    });

    this.studios = [...this.data.studios].map((g, i) => {
      if (this.data.studios.length - 1 > i) {
        return ' ' + g.name;
      }
      return ' ' + g.name + '.';
    });

    this.producers = [...this.data.producers].map((g, i) => {
      if (this.data.producers.length - 1 > i) {
        return ' ' + g.name;
      }
      return ' ' + g.name + '.';
    });

    this.licensors = [...this.data.licensors].map((g, i) => {
      if (this.data.licensors.length - 1 > i) {
        return ' ' + g.name;
      }
      return ' ' + g.name + '.';
    });
  }

  ngOnInit(): void {
    this.global
      .getDetailsSearch()
      .subscribe((details) => (this.detalhes = details));
  }

  hideDetalhes() {
    this.global.setDetailsSearch(!this.details);
  }
}
