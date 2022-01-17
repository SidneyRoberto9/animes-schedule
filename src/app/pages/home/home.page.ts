import { Observable } from 'rxjs';
import { Jinkan } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

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

  onChange($event: MatSlideToggleChange){
    if($event.checked){
      document.documentElement.style.setProperty('--toolbar-bg', 'var(--lightMode-toolbar-bg)');
      document.documentElement.style.setProperty('--sidebar-bg', 'var(--lightMode-sidebar-bg)');
      document.documentElement.style.setProperty('--display-bg', 'var(--lightMode-sidebar-bg)');
      document.documentElement.style.setProperty('--cardHover-bg', 'var(--lightMode-cardHover-bg)');
      document.documentElement.style.setProperty('--text', 'var(--lightMode-text)');
      document.documentElement.style.setProperty('--text-p', 'var(--lightMode-text-p)');
      
    } else {
      document.documentElement.style.setProperty('--toolbar-bg', 'var(--darkMode-toolbar-bg)');
      document.documentElement.style.setProperty('--sidebar-bg', 'var(--darkMode-sidebar-bg)');
      document.documentElement.style.setProperty('--display-bg', 'var(--darkMode-sidebar-bg)');
      document.documentElement.style.setProperty('--cardHover-bg', 'var(--darkMode-cardHover-bg)');
      document.documentElement.style.setProperty('--text', 'var(--darkMode-text)');
      document.documentElement.style.setProperty('--text-p', 'var(--dakMode-text-p)');
    }
    
  }
}
