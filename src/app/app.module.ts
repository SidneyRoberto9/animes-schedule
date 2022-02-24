import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardAnimeComponent } from './components/home Components/card-anime/card-anime.component';
import { DisplayAnimeComponent } from './components/home Components/display-anime/display-anime.component';
import { NavBarComponent } from './components/home Components/nav-bar/nav-bar.component';
import { CardSearchAnimeComponent } from './components/search Components/card-search-anime/card-search-anime.component';
import { DetailsSearchAnimeComponent } from './components/search Components/details-search-anime/details-search-anime.component';
import { DisplaySearchAnimeComponent } from './components/search Components/display-search-anime/display-search-anime.component';
import { HomePage } from './pages/home/home.page';
import { SearchPage } from './pages/search/search.page';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardAnimeComponent,
    DisplayAnimeComponent,
    HomePage,
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
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
