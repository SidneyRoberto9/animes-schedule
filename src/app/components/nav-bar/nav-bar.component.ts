import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  day: number;
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
  }

  selectBtn(btn: string) {
    this.selectedBtn = btn;
  }

  reload() {
    window.location.reload();
  }

  selectedDay(day: number) {
    this.global.setWeekDay(day);
  }
}
