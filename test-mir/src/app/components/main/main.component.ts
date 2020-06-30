import {Component, OnDestroy, OnInit} from '@angular/core';
import {Card} from '../../shared/interfaces/Card';
import {Subscription} from 'rxjs';
import {CardsApiService} from '../../shared/backend/cardsApi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  pageNumber = 1;
  cards: Card[] = [];
  pSub: Subscription;

  constructor(private cardsApiService: CardsApiService) {
  }

  ngOnInit() {
    this.cardsApiService.getAll(this.pageNumber).subscribe(resp => {
      this.cards = resp[1]['news'];
    });
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

}
