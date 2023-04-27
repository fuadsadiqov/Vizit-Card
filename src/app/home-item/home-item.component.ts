import { Component, Input } from '@angular/core';
import { Card } from '../models/card';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss']
})
export class HomeItemComponent {
  @Input('cardItem') cardItem?: Card

  constructor(private cardService: CardService){}
  getCardDetail(id: number | undefined){
    this.cardService.cardDetail(id)
  }
}
