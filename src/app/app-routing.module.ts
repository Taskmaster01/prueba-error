import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './component/portal/portal.component';
import { DivisaComponent } from './component/divisa/divisa.component';
import { HoroscopoComponent } from './component/horoscopo/horoscopo.component';
import { QrComponent } from './component/qr/qr.component';
import { ClimacComponent } from './component/climac/climac.component';

const routes: Routes = [
{path:'puntoA',component:DivisaComponent},
{path:'puntoB', component:PortalComponent},
{path:'puntoC',component:HoroscopoComponent},
{path:"puntoD",component:QrComponent},
{path:"puntoE",component:ClimacComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
