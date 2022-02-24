import { Observable } from 'rxjs';
import { heroResult } from 'src/app/model/heroku.model';
import { AnimesService } from 'src/app/services/animes.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  day: string;
  detalhes: boolean;

  constructor(
    private animesService: AnimesService,
    private global: GlobalVariablesService
  ) {
    this.animesService.getAnimesHeroku();
  }

  ngOnInit() {
    this.global.getDayWeek$.subscribe((day) => (this.day = day));
  }

  get animesHeroku$(): Observable<heroResult[]> {
    return this.animesService.animesHeroku$;
  }

  selectedDay(day: string): void {
    this.day = day;
  }
}
