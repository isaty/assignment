import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CompoundComponent } from './compound/compound.component';
const routes: Routes = [
  { path: '', pathMatch:'full', component: ListComponent },
  { path: 'compound/:id', component: CompoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
