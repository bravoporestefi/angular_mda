import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { ErroresComponent } from './pages/errores/errores.component';
import { BoredComponent } from './pages/bored/bored.component';
import { CamaraComponent } from './pages/camara/camara.component';

export const routes: Routes = [

    {path: '', component:HomeComponent},
    {path:'clima', component:ClimaComponent},
    {path:'errores', component:ErroresComponent},
    {path:'bored', component:BoredComponent},
    {path:'camara', component:CamaraComponent},
    {path: '**',redirectTo: '',pathMatch:'full' },

];
