import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { CoinsComponent } from './coins/coins.component';

const routes: Routes = [
  {path:'', redirectTo : 'coins', pathMatch:'full'},
  {path: '**', redirectTo: 'home', pathMatch:'full'},
  {path: 'coins', component: CoinsComponent},
  {path: 'coin-details/:id', component: CoinDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
