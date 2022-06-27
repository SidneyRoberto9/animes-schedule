import { GlobalVariablesService } from 'src/app/services/global-variables.service';

import { Component, OnInit } from '@angular/core';
import { _MatSlideToggleRequiredValidatorModule } from '@angular/material/slide-toggle';

import { buttons, dia } from './data';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  day: string;
  actualWeekDay: number;
  weekDay: number;
  selectedBtn: string;
  buttons = buttons;

  constructor(private global: GlobalVariablesService) {}

  ngOnInit() {
    this.global.getDayWeek$.subscribe((day) => (this.day = day));
    this.actualWeekDay = new Date().getDay();
    this.weekDay = this.actualWeekDay;
    this.global.setWeekDay(dia[this.actualWeekDay].dia);
  }

  selectBtn(btn: string) {
    this.weekDay = 100;
    this.selectedBtn = btn;
  }

  reload() {
    window.location.reload();
  }

  selectedDay(day: string) {
    day = day.replace('ç', 'c');
    day = day.replace('á', 'a');
    this.global.setWeekDay(day.toLocaleLowerCase());
  }
}
