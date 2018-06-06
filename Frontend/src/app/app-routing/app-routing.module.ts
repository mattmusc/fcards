import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FcardsListComponent} from '../components/fcards-list/fcards-list.component';
import {FcardDetailComponent} from '../components/fcard-detail/fcard-detail.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full'
  },
  {
    path: 'card/:id',
    component: FcardDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'cards',
    component: FcardsListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
