import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardAnimeComponent } from './components/card-anime/card-anime.component';
import { ConfigComponent } from './components/config/config.component';
import { DetailAnimeComponent } from './components/detail-anime/detail-anime.component';
import { DisplayAnimeComponent } from './components/display-anime/display-anime.component';
import { HomePage } from './pages/home/home.page';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardAnimeComponent,
    DisplayAnimeComponent,
    HomePage,
    DetailAnimeComponent,
    ConfigComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
