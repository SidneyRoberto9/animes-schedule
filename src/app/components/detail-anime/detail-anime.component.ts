import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Jinkan } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-detail-anime',
  templateUrl: './detail-anime.component.html',
  styleUrls: ['./detail-anime.component.scss']
})
export class DetailAnimeComponent  {
  @Input() details: Observable<boolean>;
  data: Jinkan;

  constructor(private animesService: AnimesService) {
    this.animesService.getActualAnime().subscribe((anime) => this.data = anime);
  }
}
