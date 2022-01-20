import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DatumSearch } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  detalhes: boolean;

  constructor(private animesService: AnimesService) {
    this.animesService
      .getDetailsSearch()
      .subscribe((detalhes) => (this.detalhes = detalhes));
  }
}
