import { Component, Input} from '@angular/core';
import { Anime } from '../../model/anime.model';
import { AnimesService } from '../../services/animes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-animes',
  templateUrl: './display-anime.component.html',
  styleUrls: ['./display-anime.component.scss']
})
export class DisplayAnimeComponent {
  @Input() day?: String;
  constructor(private animesService: AnimesService) {}

  get animes$(): Observable<Anime[]> {
   return this.animesService.getAnimes();
  }
}
