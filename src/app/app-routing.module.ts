import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelsComponent } from './models/models.component';
import { CreateModelComponent } from './create-model/create-model.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'models', pathMatch: 'full' },
  { path: '', component: ModelsComponent },
  {
    path: 'model',
    children: [
      { path: '', component: CreateModelComponent },
      { path: ':id', component: CreateModelComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
