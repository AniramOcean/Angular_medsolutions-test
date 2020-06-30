import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {ArticleComponent} from './components/article/article.component';


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: 'news', component: MainComponent},
    ]
  },
  {path: 'news/:id', component: ArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
