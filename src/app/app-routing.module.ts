import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { SettingsPage } from './pages/settings/settings.page';

const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'Config', component: SettingsPage},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
