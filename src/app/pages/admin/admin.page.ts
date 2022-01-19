import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Jinkan } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss']
})
export class AdminPage {
  data: boolean;
  constructor(private animesService: AnimesService) {
    this.animesService.getAnimes();
  }

  get animes$(): Observable<Jinkan[]> {
    return this.animesService.animes$;
  }
}
