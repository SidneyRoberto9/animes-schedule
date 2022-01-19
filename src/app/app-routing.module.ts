import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AdminPage } from './pages/admin/admin.page';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  {path: '', component: HomePage},
  {path: `${environment.API_KEY}`, component: AdminPage},
  {path: '**', redirectTo: ''},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
