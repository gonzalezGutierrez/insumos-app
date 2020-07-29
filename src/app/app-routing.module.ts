import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'sincronize',
        pathMatch: 'full'
    },
    {
        path: 'offline',
        loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
    },
    {
        path: 'departamentos',
        loadChildren: () => import('./pages/departamentos/departamentos.module').then(m => m.DepartamentosPageModule)
    },
    {
        path: 'departamento-show/:id',
        loadChildren: () => import('./pages/departamento-show/departamento-show.module').then(m => m.DepartamentoShowPageModule)
    },
    {
        path: 'product-show-modal',
        loadChildren: () => import('./pages/product-show-modal/product-show-modal.module').then(m => m.ProductShowModalPageModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'insumos',
        loadChildren: () => import('./pages/insumos/insumos.module').then(m => m.InsumosPageModule)
    },
    {
        path: 'departamento/:id',
        loadChildren: () => import('./pages/departamento/departamento.module').then(m => m.DepartamentoPageModule)
    },
    {
        path: 'insumo/:id',
        loadChildren: () => import('./pages/insumo/insumo.module').then(m => m.InsumoPageModule)
    },
  {
    path: 'entrega',
    loadChildren: () => import('./pages/entrega/entrega.module').then( m => m.EntregaPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'sincronize',
    loadChildren: () => import('./pages/sincronize/sincronize.module').then( m => m.SincronizePageModule)
  },
  {
    path: 'entregas',
    loadChildren: () => import('./pages/entregas/entregas.module').then( m => m.EntregasPageModule)
  },
  {
    path: 'entrega-detail/:id',
    loadChildren: () => import('./pages/entrega-detail/entrega-detail.module').then( m => m.EntregaDetailPageModule)
  }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
