import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { PersonDetailComponent } from './person-details/person.details.component';

const routes: Routes = [
  {path: '', component: PersonComponent},
  {path: 'person/:id', component: PersonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
