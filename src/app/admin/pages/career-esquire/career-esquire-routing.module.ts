import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CareerEsquireComponent} from './career-esquire.component';
import {AddCareerEsquireComponent} from './add-career-esquire/add-career-esquire.component';

const routes: Routes = [
  {path: '', component: CareerEsquireComponent},
  {path: 'add-career-apex', component: AddCareerEsquireComponent},
  {path: 'edit-career-apex/:id', component: AddCareerEsquireComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerEsquireRoutingModule { }
