import { Component, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Jinkan } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  day?: number = 100;
  detalhes:boolean;

  constructor(private animesService: AnimesService) {
    this.animesService.getAnimes();
    this.animesService.getDetails().subscribe((detalhes) => this.detalhes = detalhes);
  }

  get animes$(): Observable<Jinkan[]> {
    return this.animesService.animes$;
  }

  selectedDay(day: number): void {
    this.day = day;
    this.animesService.setDetails(true);
  }
}
