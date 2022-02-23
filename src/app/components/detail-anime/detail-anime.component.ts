import { Observable } from 'rxjs';
import { Jinkan } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

import { Component, Input } from '@angular/core';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-detail-anime',
  templateUrl: './detail-anime.component.html',
  styleUrls: ['./detail-anime.component.scss'],
})
export class DetailAnimeComponent {
  @Input() details: Observable<boolean>;
  detalhes: boolean;
  data: Jinkan;

  constructor(private global: GlobalVariablesService) {
    this.global.getActualAnime().subscribe((anime) => (this.data = anime));
    this.global.getDetails().subscribe((details) => (this.detalhes = details));
  }

  hideDetalhes() {
    this.global.setDetails(true);
  }
}
