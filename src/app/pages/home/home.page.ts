import { Observable } from 'rxjs';
import { Jinkan } from 'src/app/model/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  day: number;
  detalhes: boolean;

  constructor(
    private animesService: AnimesService,
    private global: GlobalVariablesService
  ) {
    this.animesService.getAnimes(); // set to getAnimes para pegar do back4apps
    this.animesService
      .getDetails()
      .subscribe((detalhes) => (this.detalhes = detalhes));
  }

  ngOnInit() {
    this.global.getDayWeek$.subscribe((day) => (this.day = day));
  }

  get animes$(): Observable<Jinkan[]> {
    return this.animesService.animes$;
  }

  selectedDay(day: number): void {
    this.day = day;
    this.animesService.setDetails(true);
  }

  onChange($event: MatSlideToggleChange) {
    if ($event.checked) {
      document.documentElement.style.setProperty(
        '--toolbar-bg',
        'var(--lightMode-toolbar-bg)'
      );
      document.documentElement.style.setProperty(
        '--sidebar-bg',
        'var(--lightMode-sidebar-bg)'
      );
      document.documentElement.style.setProperty(
        '--display-bg',
        'var(--lightMode-sidebar-bg)'
      );
      document.documentElement.style.setProperty(
        '--cardHover-bg',
        'var(--lightMode-cardHover-bg)'
      );
      document.documentElement.style.setProperty(
        '--text',
        'var(--lightMode-text)'
      );
      document.documentElement.style.setProperty(
        '--text-p',
        'var(--lightMode-text-p)'
      );
    } else {
      document.documentElement.style.setProperty(
        '--toolbar-bg',
        'var(--darkMode-toolbar-bg)'
      );
      document.documentElement.style.setProperty(
        '--sidebar-bg',
        'var(--darkMode-sidebar-bg)'
      );
      document.documentElement.style.setProperty(
        '--display-bg',
        'var(--darkMode-sidebar-bg)'
      );
      document.documentElement.style.setProperty(
        '--cardHover-bg',
        'var(--darkMode-cardHover-bg)'
      );
      document.documentElement.style.setProperty(
        '--text',
        'var(--darkMode-text)'
      );
      document.documentElement.style.setProperty(
        '--text-p',
        'var(--dakMode-text-p)'
      );
    }
  }
}
