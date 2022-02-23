import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardAnimeComponent } from './components/card-anime/card-anime.component';
import { DetailAnimeComponent } from './components/detail-anime/detail-anime.component';
import { DisplayAnimeComponent } from './components/display-anime/display-anime.component';
import { HomePage } from './pages/home/home.page';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SearchPage } from './pages/search/search.page';
import { CardSearchAnimeComponent } from './components/card-search-anime/card-search-anime.component';
import { DetailsSearchAnimeComponent } from './components/details-search-anime/details-search-anime.component';
import { DisplaySearchAnimeComponent } from './components/display-search-anime/display-search-anime.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardAnimeComponent,
    DisplayAnimeComponent,
    HomePage,
    DetailAnimeComponent,
    SortByPipe,
    SearchPage,
    CardSearchAnimeComponent,
    DetailsSearchAnimeComponent,
    DisplaySearchAnimeComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
