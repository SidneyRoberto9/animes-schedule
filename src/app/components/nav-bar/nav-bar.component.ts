import { Component, OnInit } from '@angular/core';
import { _MatSlideToggleRequiredValidatorModule } from '@angular/material/slide-toggle';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { DiagnosticCategory } from 'typescript';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  day: number;
  actualWeekDay: number;
  weekDay: number;
  selectedBtn: string;
  buttons = [
    'Todos',
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];

  constructor(private global: GlobalVariablesService) {}

  ngOnInit() {
    this.global.getDayWeek$.subscribe((day) => (this.day = day));
    this.actualWeekDay = new Date().getDay();
    this.weekDay = this.actualWeekDay;
    this.global.setWeekDay(this.actualWeekDay);
  }

  selectBtn(btn: string) {
    this.weekDay = 100;
    this.selectedBtn = btn;
  }

  reload() {
    window.location.reload();
  }

  selectedDay(day: number) {
    this.global.setWeekDay(day);
  }
}
