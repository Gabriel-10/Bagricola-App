import { HomeComponent } from './componentes/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';

const app_routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

export const app_routing = RouterModule.forRoot(app_routes);
