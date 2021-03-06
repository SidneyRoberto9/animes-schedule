import { Observable } from 'rxjs';
import { DatumSearch } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-search-anime',
  templateUrl: './display-search-anime.component.html',
  styleUrls: ['./display-search-anime.component.scss'],
})
export class DisplaySearchAnimeComponent {
  detalhes: boolean;
  @Input() busca: string = '';
  animes: DatumSearch[];

  constructor(
    private global: GlobalVariablesService,
    private animesService: AnimesService,
    private router: Router
  ) {
    this.global
      .getDetailsSearch()
      .subscribe((detalhes) => (this.detalhes = detalhes));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['busca'].previousValue.length > 3) {
      this.search(changes['busca'].currentValue);
    }
  }

  search(busca: string) {
    this.animesService.search(busca);
    this.datumSearch$?.subscribe((anime) => (this.animes = anime));
  }

  hideDetalhes() {
    this.router.navigate(['/home']);
  }

  get datumSearch$(): Observable<DatumSearch[]> {
    return this.animesService.datumSearch$;
  }
}
