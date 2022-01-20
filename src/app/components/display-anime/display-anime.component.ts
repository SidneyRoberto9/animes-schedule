import { Observable } from 'rxjs';

import { Component, Input, OnInit } from '@angular/core';

import { Jinkan } from '../../model/anime.model';

@Component({
  selector: 'app-display-animes',
  templateUrl: './display-anime.component.html',
  styleUrls: ['./display-anime.component.scss'],
})
export class DisplayAnimeComponent implements OnInit {
  @Input() day?: number;
  @Input() animes$?: Observable<Jinkan[]>;
  @Input() detalhes?: boolean;
  selectedValue: string = 'title';
  filterValue: string = 'public';
  animes: Jinkan[];

  ngOnInit() {
    this.animes$?.subscribe((anime) => (this.animes = anime));
  }
}
