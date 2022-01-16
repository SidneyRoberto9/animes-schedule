import { Observable } from 'rxjs';
import { Jinkan } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  day?: number = 100;
  detalhes:boolean;
  config: boolean = true;

  constructor(private animesService: AnimesService) {
    this.animesService.getAnimes();
    this.animesService.getDetails().subscribe((detalhes) => this.detalhes = detalhes);
  }

  get animes$(): Observable<Jinkan[]> {
    return this.animesService.animes$;
  }

  showConfig(){
    this.config = false;
    this.day = -100;
    this.animesService.setDetails(true);
  }

  selectedDay(day: number): void {
    this.day = day;
    this.animesService.setDetails(true);
    this.config = true;
  }
}
