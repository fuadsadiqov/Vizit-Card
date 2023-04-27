import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards!: Card[]
  cardDetailItem!: any
  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: HttpClient
    ) { }

  getCardsByDefault(){
    return this.http.get<Card[]>(this.apiUrl + "/cards")
}
  getCards(){
    this.http.get<Card[]>(this.apiUrl + "/cards")
    .subscribe((res: Card[]) => {
      this.cards = res
    }) 
  }
  postCards(newCard: Card): Observable<any>{
    return this.http.post(this.apiUrl + "/cards", newCard)
  }
  updateCards(newCard: Card, cardId: number): Observable<any>{
    return this.http.put(this.apiUrl + "/cards/" + cardId, newCard)
  }
  deleteCard(cardId: number){
    return this.http.delete(this.apiUrl + "/cards/" + cardId)
  }
  cardDetail(id?: number): any{
    this.cardDetailItem = id
  }
}