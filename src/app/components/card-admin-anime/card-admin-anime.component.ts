import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Jinkan } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';
import { DataAdminComponent } from '../data-admin/data-admin.component';

@Component({
  selector: 'app-card-admin-anime',
  templateUrl: './card-admin-anime.component.html',
  styleUrls: ['./card-admin-anime.component.scss']
})
export class CardAdminAnimeComponent{
  @Input() animes: Jinkan;
  result: string;
  day: string;

  constructor(public animesService: AnimesService, public dialog: MatDialog) {}

  openChange(): void {
    this.animesService.setActualAnime(this.animes);
    const dialogRef = this.dialog.open(DataAdminComponent,{
      width: '259px',
      data: {day: this.day},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.result = result;
    });
  }


}
