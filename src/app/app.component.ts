import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Anime schedule';
  day?: string = 'nada';

  selectedDay(day: string) {
    this.day = day;
  }
}
