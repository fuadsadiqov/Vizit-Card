import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  cards!: Card[]
  filteredCards: Card[] = []

  constructor(public cardService: CardService){
  }

  ngOnInit(){
    this.getCards()
  }
  getCards(){
    this.cardService.getCardsByDefault()
    .subscribe((cardsArr: Card[]) => {
      this.cards = this.filteredCards = cardsArr
    })  
  }
  filterByName(){
    this.filteredCards = this.cards.filter((a: Card) => a.name !== undefined)
          .sort((a: Card, b: Card) => a.name!.localeCompare(b.name!));
  }
  filterByDefault(){
    this.filteredCards = this.cards
  }
  searchByName(value: string): any{
      this.filteredCards = this.cards.filter((card: Card) => {
          return card.name?.toLowerCase().includes(value.toLowerCase()) 
          || card.title.toLowerCase().includes(value.toLowerCase())
          || card.phone.toLowerCase().includes(value.toLowerCase())
          || (card.email && card.email.toLowerCase().includes(value.toLowerCase()))
          || (card.address && card.address.toLowerCase().includes(value.toLowerCase()))
      })
  }
}
