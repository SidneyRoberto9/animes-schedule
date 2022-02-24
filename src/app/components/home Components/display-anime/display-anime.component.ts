import { Observable } from 'rxjs';
import { heroResult } from 'src/app/model/heroku.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-animes',
  templateUrl: './display-anime.component.html',
  styleUrls: ['./display-anime.component.scss'],
})
export class DisplayAnimeComponent implements OnInit {
  @Input() day: string;
  @Input() animes$: Observable<heroResult[]>;

  animes: heroResult[];

  ngOnInit() {
    this.animes$.subscribe((anime) => (this.animes = anime));
  }
}
