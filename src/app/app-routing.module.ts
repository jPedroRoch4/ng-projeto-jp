import { ProfileComponent } from './user/profile/profile.component';
import { E404Component } from './pages/e404/e404.component';
import { AboutComponent } from './pages/about/about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [


  // Rota para a página inicial caso nao especificada
  // ↓ Tem que ser a primeira rota
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'

  },

  // Rota para a página home.
  {
    path: 'home',
    title: 'Página inicial',
    component: HomeComponent
  },

  // Rota para a página contacts
  {
    path: 'contacts',
    title: 'Faça Contato',
    component: ContactsComponent
  },

  // Rota para a página about
  {
    path: 'about',
    title: 'Sobre',
    component: AboutComponent
  },

  // Rota para a página 404
  {
    path: 'e404',
    title: 'Erro 404',
    component: E404Component
  },

  //Rota para a página profile
  {
    path: 'profile',
    title: 'Perfil de usuário',
    component: ProfileComponent
  },

  // Rota padrão para rotas inexistentes
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  }

  // ↑ Tem que ser a última rota


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
