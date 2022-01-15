import { Component, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Jinkan } from 'src/app/model/anime.model';
import { DetailAnimeComponent } from '../detail-anime/detail-anime.component';

@Component({
  selector: 'app-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.scss']
})
export class CardAnimeComponent{
  @Input() day?: number;
  @Input() animes?: Jinkan;
  constructor(public dialog: MatDialog) {}

  openDetails(): void {
    const dialogRef = this.dialog.open(DetailAnimeComponent, {
      data: this.animes
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
}
