import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {CardsApiService} from '../../shared/backend/cardsApi.service';
import {switchMap} from 'rxjs/operators';
import {Card} from '../../shared/interfaces/Card';
import {Popular} from '../../shared/interfaces/Popular';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  card$: Observable<Card>;
  populars: Popular[] = this.cardsService.populars;

  constructor(
    private route: ActivatedRoute,
    private cardsService: CardsApiService
  ) {
  }

  ngOnInit() {
    this.card$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.cardsService.getById(params['id']);
      }));
  }
}
