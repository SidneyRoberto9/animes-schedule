import { Component, Input} from '@angular/core';
import { Anime } from '../../model/anime.model';
import { AnimesService } from '../../services/animes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-animes',
  templateUrl: './display-anime.component.html',
  styleUrls: ['./display-anime.component.scss']
})
export class DisplayAnimeComponent {
  @Input() day?: String;
  @Input() animes$?: Observable<Anime[]>;
}
