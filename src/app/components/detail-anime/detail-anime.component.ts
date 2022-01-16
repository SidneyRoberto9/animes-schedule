import { Observable } from 'rxjs';
import { Jinkan } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-anime',
  templateUrl: './detail-anime.component.html',
  styleUrls: ['./detail-anime.component.scss']
})
export class DetailAnimeComponent  {
  @Input() details: Observable<boolean>;
  detalhes: boolean;
  data: Jinkan;

  constructor(private animesService: AnimesService) {
    this.animesService.getActualAnime().subscribe((anime) => this.data = anime);
    this.animesService.getDetails().subscribe((details) => this.detalhes = details);
  }

  hideDetalhes() {
    this.animesService.setDetails(true);
  }
}
