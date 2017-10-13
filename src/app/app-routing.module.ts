import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PersonListComponent} from './persons/person-list/person-list.component';
import {PersonSearchComponent} from './persons/person-search/person-search.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: 'persons',
    pathMatch: 'full'
  },
  {
    path: 'persons',
    component: PersonListComponent,
    data: { title: 'Person List' }
  },
  {
    path: 'search',
    component: PersonSearchComponent,
    data: { title: 'Person Search' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
