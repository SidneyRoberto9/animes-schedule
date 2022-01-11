import { Component, Input, OnInit } from '@angular/core';
import { Anime } from './anime.model';
import { AnimesService } from '../../services/animes.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {
  @Input() Day?: String;
  animes: Anime[] = [];

  constructor(private animesService: AnimesService) {}

  ngOnInit(): void {
    this.getAnimes();
  }

  getAnimes(): void {
    this.animesService.getAnimes().subscribe(animes => 
      this.animes = animes);
  }
}
