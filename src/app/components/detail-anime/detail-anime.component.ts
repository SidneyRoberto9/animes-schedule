import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Jinkan } from 'src/app/model/anime.model';

@Component({
  selector: 'app-detail-anime',
  templateUrl: './detail-anime.component.html',
  styleUrls: ['./detail-anime.component.scss']
})
export class DetailAnimeComponent  {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Jinkan) {}
}
