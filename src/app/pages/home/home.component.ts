import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Anime } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  day?: string = 'nada';

  constructor(private animesService: AnimesService) {}

  selectedDay(day: string) {
    this.day = day;
  }

  get animes$(): Observable<Anime[]> {
   return this.animesService.getAnimes();
  }
}
