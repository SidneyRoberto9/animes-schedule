import { Observable } from 'rxjs';
import { DatumSearch } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  detalhes: boolean;
  busca: string = '';

  constructor(private global: GlobalVariablesService, private router: Router) {
    this.global
      .getDetailsSearch()
      .subscribe((detalhes) => (this.detalhes = detalhes));
  }

  inicio() {
    this.router.navigate(['/home']);
  }
}
