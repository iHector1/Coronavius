import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router'
import { HomeComponent } from '../paginas/home/home.component';
import { MapaComponent } from '../paginas/mapa/mapa.component';
import { AdsComponent } from '../paginas/ads/ads.component';

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  {path:"mapa",component:MapaComponent},
  {path:"ads",component:AdsComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full',
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)]
})
export class RoutingModule { }
