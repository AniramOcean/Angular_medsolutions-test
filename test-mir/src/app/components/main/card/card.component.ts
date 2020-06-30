import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../shared/interfaces/Card';
import {CardsApiService} from '../../../shared/backend/cardsApi.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor(private cardsApiService: CardsApiService) { }

  ngOnInit(): void {
    this.cardsApiService.getById(this.card.id).subscribe(response => {
      this.card.teaser = response.teaser;
      this.card.news_category = response.news_category;
    });
  }

}
