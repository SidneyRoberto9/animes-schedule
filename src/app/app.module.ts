import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardAnimeComponent } from './components/card-anime/card-anime.component';
import { DetailAnimeComponent } from './components/detail-anime/detail-anime.component';
import { DisplayAnimeComponent } from './components/display-anime/display-anime.component';
import { HomePage } from './pages/home/home.page';
import { SortByPipe } from './pipes/sort-by.pipe';
import { AdminPage } from './pages/admin/admin.page';
import { CardAdminAnimeComponent } from './components/card-admin-anime/card-admin-anime.component';
import { DataAdminComponent } from './components/data-admin/data-admin.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule}  from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    CardAnimeComponent,
    DisplayAnimeComponent,
    HomePage,
    DetailAnimeComponent,
    SortByPipe,
    AdminPage,
    CardAdminAnimeComponent,
    DataAdminComponent,
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
    MatDialogModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: MatDialogRef , 
      useValue:{} 
    },
    { 
      provide: MAT_DIALOG_DATA, 
      useValue: {} 
    }
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
