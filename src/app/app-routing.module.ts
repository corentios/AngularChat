import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { SalonComponent } from './salon/salon.component';
import { ChatComponent } from './chat/chat.component';
import { AuthGuard } from './login/auth.guard';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    component: ConnexionComponent
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'salon/1', pathMatch: 'full' },
      { path: 'salon/:id', component: SalonComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
