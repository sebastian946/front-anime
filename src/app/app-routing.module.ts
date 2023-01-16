import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './components/score/score.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'score', component: ScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
