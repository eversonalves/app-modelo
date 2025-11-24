import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'elementos',
    loadComponent: () => import('./elementos/elementos.page').then( m => m.ElementosPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'reservas',
    loadComponent: () => import('./reservas/reservas.page').then( m => m.ReservasPage)
  },
  {
    path: 'calendario',
    loadComponent: () => import('./calendario/calendario.page').then( m => m.CalendarioPage)
  },
  {
    path: 'cadastro-cliente',
    loadComponent: () => import('./cadastro-cliente/cadastro-cliente.page').then( m => m.CadastroClientePage)
  },
];
