import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Anime schedule';
  Day?: string;

  selectedDay(day: string) {
    this.Day = day;
  }
}
