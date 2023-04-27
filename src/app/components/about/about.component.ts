import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  constructor(private cardService: CardService){
    this.cardService.getCardsByDefault().subscribe(cardsArr => this.cards = cardsArr)
    this.cards?.filter(card => {
      if(card.id === this.cardService.cardDetailItem){
        this.cardItem = card
      }
    })
    console.log(this.cardItem);

  }
  cardItem?: Card
  cards?: Card[]

  ngOnInit(){ 
    
  }
}
